import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <React.Fragment>
                <section className="footer-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Contact Info</h3>

                                    <ul className="footer-contact-info">
                                        <li>
                                            <i className="flaticon-phone-call"></i>
                                            <span>Mon to Fri : 10:00AM - 06:00PM</span>
                                           
                                            <a href="tel:+18557737767">+18557737767</a>
                                        </li>
                                        <li>
                                            <i className="flaticon-email"></i>
                                            <span>Do You Have a Question?</span>
                                            <a href="mailto:tecqify@gmail.com">tecqify@gmail.com</a>
                                        </li>
                                        <li>
                                            <i className="flaticon-social-media"></i>
                                            <span>Socials Network</span>

                                            <ul className="social">
                                                <li>
                                                    <Link href="/#">
                                                        <a target="https://www.facebook.com/tecQify"><i className="fab fa-facebook-f"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.instagram.com/tecqify/">
                                                        <a target="_blank"><i className="fab fa-instagram"></i></a>
                                                    </Link>
                                                </li>
                                                {/* <li>
                                                    <Link href="/#">
                                                        <a target="_blank"><i className="fab fa-linkedin"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/#">
                                                        <a target="_blank"><i className="fab fa-youtube"></i></a>
                                                    </Link> 
                                                </li>*/}
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget pl-5">
                                    <h3>Quick Links</h3>

                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about2">
                                                <a>About</a>
                                            </Link>
                                        </li>
                                        {/* <li>
                                            <Link href="/blog">
                                                <a>Blog</a>
                                            </Link>
                                        </li> */}
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact</a>
                                            </Link>
                                        </li>
                                        {/* <li>
                                            <Link href="/#">
                                                <a>Agency</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#">
                                                <a>Digital</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Support</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop">
                                                <a>Shop</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#">
                                                <a>Agency</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#">
                                                <a>Digital</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Support</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop">
                                                <a>Shop</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#">
                                                <a>Digital</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/conatct">
                                                <a>Support</a>
                                            </Link>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>

                            {/* <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="single-footer-widget pl-5">
                                    <h3>Instagram</h3>

                                    <ul className="footer-instagram-post">
                                        <li>
                                            <Link href="/#">
                                                <a target="_blank">
                                                    <img src={require("../../images/instagram-image/insta-img1.jpg")} alt="image" />
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#">
                                                <a target="_blank">
                                                    <img src={require("../../images/instagram-image/insta-img2.jpg")} alt="image" />
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#">
                                                <a target="_blank">
                                                    <img src={require("../../images/instagram-image/insta-img3.jpg")} alt="image" />
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#">
                                                <a target="_blank">
                                                    <img src={require("../../images/instagram-image/insta-img4.jpg")} alt="image" />
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#">
                                                <a target="_blank">
                                                    <img src={require("../../images/instagram-image/insta-img5.jpg")} alt="image" />
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#">
                                                <a target="_blank">
                                                    <img src={require("../../images/instagram-image/insta-img6.jpg")} alt="image" />
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>*/}
                        </div> 

                        <div className="copyright-area">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <p>
                                        Copyright &copy;{currentYear} TecQify. 
                                        All rights reserved <a href="https://tecqify.com/" target="_blank">TecQify</a>
                                    </p>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <ul>
                                        <li>
                                            <Link href="/terms-and-conditions">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Footer;