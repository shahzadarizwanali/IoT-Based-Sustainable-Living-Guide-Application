import React from 'react'
import { useEffect } from 'react';
import Chatbot from './Chatbot';

const Index = () => {
    return (

        <div>
            <>

                {/* main section */}
                <section className="slider_section">
                    <div id="customCarousel1" className="carousel" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 mx-auto">
                                            <div className="detail-box">
                                                <h1>
                                                    GREEN METRICS <br />
                                                    Sustainable Living Guide
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Image inside the carousel item, now set to 200px height */}
                                <img src="/assets/images/sustainability-banner.jpg" className="d-block w-100" alt="carousel" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* end slider section */}

                {/* two columns */}
                <section className="service_section layout_padding">
                    <div className="container m-0 p-0">
                        <div className="row">
                            {/* col-md-8 card with content */}
                            <div className="col-md-8">
                                <div className="service_container">
                                    <p>We’ve put together this <a href="/">Sustainable Living Guide</a> to help people restore nature, health and a
                                        safe climate from the ground up. Whether you're looking for small changes you can make at home or advice
                                        on bigger changes you can make in your life, we've got you covered!
                                        <br /><br />
                                        The <a href="/">FREE digital guide</a> is packed with top tips and expert advice from the Soil Association
                                        and our partners, including:
                                        <br />
                                        <ul>
                                            <li>The latest on packaging</li>
                                            <li>Creating a wildlife-friendly garden</li>
                                            <li>How to avoid greenwashing</li>
                                            <li>The link between your finances and sustainability, from Triodos Bank</li>
                                            <li>Energy saving advice, from the Centre for Sustainable Energy</li>
                                            <li>Sustainable travel tips, from Sustrans</li>
                                        </ul>
                                        <b>Enter your details below to receive your digital copy and to receive our regular emails with sustainable living tips.</b>
                                        <br />
                                    </p>

                                    <section className="contact_section layout_padding-bottom">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="forms col-lg-10 col-md-10 offset-md-1">
                                                    <div className="form_container">
                                                        <form action="">
                                                            <div>
                                                                <input type="text" placeholder="Your Name" />
                                                            </div>
                                                            <div>
                                                                <input type="text" placeholder="Phone Number" />
                                                            </div>
                                                            <div>
                                                                <input type="email" placeholder="Email" />
                                                            </div>
                                                            <div>
                                                                <input type="text" className="message-box" placeholder="Message" />
                                                            </div>
                                                            <div className="btn_box">
                                                                <button>
                                                                    Submit
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <p>Read our <a href="/privacy">privacy policy</a> for more information.</p>
                                    <br />
                                    <p>If you consent to receive contact from us, you'll receive regular emails and occasional postal communications
                                        full of practical tips for sustainable living, campaigning updates, and other ways to get involved. You can
                                        update your preferences or unsubscribe at any time.</p>
                                </div>
                            </div>

                            {/* col-md-4 cards with content (Blogs) */}
                            <div className="col-md-4 p-2 m-0">
                                <h3 style={{ textAlign: "center" }} className="p-0">Related Content</h3>
                                {/* Card 1 */}
                                <div className="card mb-3" style={{ width: "22rem" }}>
                                    <img src="/assets/images/recycle.png" className="card-img-top" style={{ height: "250px" }} alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">5 easy ways to reduce your waste</h5>
                                        <a href="/blog1" className="btn btn-success">Read More</a>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="card mb-3" style={{ width: "22rem" }}>
                                    <img src="/assets/images/plant.jpg" className="card-img-top" style={{ height: "250px" }} alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">A step to sustainable environment choices</h5>
                                        <a href="/blog2" className="btn btn-success">Read More</a>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="card mb-3" style={{ width: "22rem" }}>
                                    <img src="/assets/images/bees.png" className="card-img-top" style={{ height: "250px" }} alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Bee-friendly flowers and herbs</h5>
                                        <a href="/blog3" className="btn btn-success">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </>
            <Chatbot />
        </div>
    )
}

export default Index