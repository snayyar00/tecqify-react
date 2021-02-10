import React, { Component } from 'react';
import Link from 'next/link';

class TeamCard extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="team-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Our Team</span>
                            <h2>Our Expert Team</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src={require("../../images/team-image/team10.jpg")} alt="team" />
                                        
                                        <div className="social">
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3>John Smith</h3>
                                        <span>CEO & Founder</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src={require("../../images/team-image/team11.jpg")} alt="team" />

                                        <div className="social">
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3>Lucy Eva</h3>
                                        <span>Backend Team Leader</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src={require("../../images/team-image/team12.jpg")} alt="team" />

                                        <div className="social">
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3>Steven Smith</h3>
                                        <span>ReactJS Developer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src={require("../../images/team-image/team13.jpg")} alt="team" />

                                        <div className="social">
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3>Williams Smith</h3>
                                        <span>AngularJS Developer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src={require("../../images/team-image/team14.jpg")} alt="team" />

                                        <div className="social">
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3>Harry</h3>
                                        <span>VueJS Developer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src={require("../../images/team-image/team15.jpg")} alt="team" />

                                        <div className="social">
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3>George</h3>
                                        <span>Web Designer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src={require("../../images/team-image/team16.jpg")} alt="team" />

                                        <div className="social">
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3>Charlie</h3>
                                        <span>SEO Specialist</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src={require("../../images/team-image/team17.jpg")} alt="team" />

                                        <div className="social">
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3>Amelia</h3>
                                        <span>Marketing Manager</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src={require("../../images/team-image/team18.jpg")} alt="team" />

                                        <div className="social">
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3>Joe Root</h3>
                                        <span>Web Developer</span>
                                    </div>
                                </div>
                            </div>

                            {/* Pagination */}
                            <div className="col-lg-12 col-sm-12">
                                <div className="pagination-area">
                                    <Link href="/team#">
                                        <a className="prev page-numbers">
                                            <i className="fas fa-angle-double-left"></i>
                                        </a>
                                    </Link>
                                    <Link href="/team#">
                                        <a className="page-numbers">1</a>
                                    </Link>
                                    <span className="page-numbers current" aria-current="page">2</span>
                                    <Link href="/team#">
                                        <a className="page-numbers">3</a>
                                    </Link>
                                    <Link href="/team#">
                                        <a className="page-numbers">4</a>
                                    </Link>
                                    <Link href="/team#">
                                        <a className="next page-numbers">
                                            <i className="fas fa-angle-double-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animation shape image */}
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
                    <div className="shape-img6">
                        <img src={require("../../images/shape/shape6.png")} alt="image" />
                    </div>
                    <div className="shape-img9">
                        <img src={require("../../images/shape/shape9.png")} alt="image" />
                    </div>
                    <div className="shape-img10">
                        <img src={require("../../images/shape/shape10.png")} alt="image" />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default TeamCard;