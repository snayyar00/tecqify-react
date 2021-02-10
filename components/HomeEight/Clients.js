import React, { Component } from 'react';
import Link from 'next/link';

class Clients extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="partner-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Clients</span>
                            <h2>Our Loving Clients</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div className="row align-items-center">
                            <div className="single-partner-item">
                                <Link href="/index8#">
                                    <a target="_blank">
                                        <img src={require("../../images/partner-image/partner-img1.png")} alt="image" />
                                        <img src={require("../../images/partner-image/partner-img1.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="single-partner-item">
                                <Link href="/index8#">
                                    <a target="_blank">
                                        <img src={require("../../images/partner-image/partner-img2.png")} alt="image" />
                                        <img src={require("../../images/partner-image/partner-img2.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="single-partner-item">
                                <Link href="/index8#">
                                    <a target="_blank">
                                        <img src={require("../../images/partner-image/partner-img3.png")} alt="image" />
                                        <img src={require("../../images/partner-image/partner-img3.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="single-partner-item">
                                <Link href="/index8#">
                                    <a target="_blank">
                                        <img src={require("../../images/partner-image/partner-img4.png")} alt="image" />
                                        <img src={require("../../images/partner-image/partner-img4.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="single-partner-item">
                                <Link href="/index8#">
                                    <a target="_blank">
                                        <img src={require("../../images/partner-image/partner-img5.png")} alt="image" />
                                        <img src={require("../../images/partner-image/partner-img5.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="single-partner-item">
                                <Link href="/index8#">
                                    <a target="_blank">
                                        <img src={require("../../images/partner-image/partner-img6.png")} alt="image" />
                                        <img src={require("../../images/partner-image/partner-img6.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="single-partner-item">
                                <Link href="/index8#">
                                    <a target="_blank">
                                        <img src={require("../../images/partner-image/partner-img7.png")} alt="image" />
                                        <img src={require("../../images/partner-image/partner-img7.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="single-partner-item">
                                <Link href="/index8#">
                                    <a target="_blank">
                                        <img src={require("../../images/partner-image/partner-img8.png")} alt="image" />
                                        <img src={require("../../images/partner-image/partner-img8.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="single-partner-item">
                                <Link href="/index8#">
                                    <a target="_blank">
                                        <img src={require("../../images/partner-image/partner-img9.png")} alt="image" />
                                        <img src={require("../../images/partner-image/partner-img9.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className="single-partner-item">
                                <Link href="/index8#">
                                    <a target="_blank">
                                        <img src={require("../../images/partner-image/partner-img10.png")} alt="image" />
                                        <img src={require("../../images/partner-image/partner-img10.png")} alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Animation Shape Image */}
                    <div className="shape-img2">
                        <img src={require("../../images/shape/shape2.svg")} alt="image" />
                    </div>
                    <div className="shape-img3">
                        <img src={require("../../images/shape/shape3.svg")} alt="image" />
                    </div>
                    <div className="shape-img4">
                        <img src={require("../../images/shape/shape4.png")} alt="image" />
                    </div>
                    <div className="shape-img5">
                        <img src={require("../../images/shape/shape5.png")} alt="image" />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Clients;