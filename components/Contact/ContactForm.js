import React, { useState } from 'react'
import { Axios, db } from '../firebase/firebaseConfig'


const ContactForm = () => {
  const [formData, setFormData] = useState({})

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setFormData({
      name: '',
      email: '',
      Message: '',
      phone:'',
    })
  }
  const sendEmail = () => {
      console.log(formData)
    Axios.post(
      'https://us-central1-tecqify-2c48b.cloudfunctions.net/nextServer/',
      formData,
      {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
      }
    )
      .then(res => {
        db.collection('contact-form').add({
          name: formData.name,
          email: formData.email,
          Message: formData.message,
          phone:formData.phone,


          time: new Date(),
        })
      })
      .catch(error => {
        console.log("bruh",error)
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="contact_form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={updateInput}
          value={formData.name || ''}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={updateInput}
          value={formData.email || ''}
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone"
          onChange={updateInput}
          value={formData.phone || ''}
        />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          onChange={updateInput}
          value={formData.message || ''}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <label></label>
    </>
  )
}

export default ContactForm;