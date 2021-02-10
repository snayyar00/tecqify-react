import React, { Component } from 'react';
import Link from 'next/link';

class WhyChooseUs extends Component {
    render() {
        return (
            <section className="choose-area-two ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <div className="section-title text-left">
                                    <span className="sub-title">Why Choose Us</span>
                                    <h2>Engaging New Audiences Through Smart Approach</h2>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                    <p>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc. Donec vitae sapien ut libero venenatis faucibus tempus.</p>
                                </div>
    
                                <div className="choose-btn">
                                    <Link href="/about2#">
                                        <a className="default-btn">
                                            Discover More <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="choose-image">
                                <img src={require("../../images/machine-learning/about3.png")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyChooseUs;