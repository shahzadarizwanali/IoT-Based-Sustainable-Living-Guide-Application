import React, { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/contact/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setResponseMessage(data.message);
                setFormData({ name: '', phone: '', email: '', message: '' }); // Clear form
            } else {
                setResponseMessage('Error: Unable to send message.');
            }
        } catch (error) {
            setResponseMessage('Server error. Please try again later.');
        }
    };

    return (
        <div>
            {/* contact section  */}
            <section className="contact_section layout_padding">
                <div className="container-fluid">
                    <div className="col-lg-4 col-md-5 offset-md-1">
                        <div className="heading_container">
                            <h2>
                                Contact Us
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-5 offset-md-1">
                            <div className="form_container">
                                {responseMessage && <p className="bg-success text-white">{responseMessage}</p>}
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <input type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <input type="text" className="message-box" placeholder="Message" name="message" value={formData.message} onChange={handleChange} required />
                                    </div>
                                    <div className="btn_box">
                                        <button type="submit">
                                            SEND
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 px-0">
                            <div className="col">
                                <div className="container-fluid">
                                    <div className="d-flex mb-2">
                                        <i className="fa fa-phone" style={{ fontSize: "20px", color: "#000000" }}></i>
                                        <h6 className="ps-3" style={{ fontSize: "16px" }}>929-333-3513</h6>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="fa fa-phone" style={{ fontSize: "20px", color: "#000000" }}></i>
                                        <h6 className="ps-3" style={{ fontSize: "16px" }}>917-893-7717</h6>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="fa fa-envelope" style={{ fontSize: "20px", color: "#000000" }}></i>
                                        <h6 className="ps-3" style={{ fontSize: "16px" }}>info@greenmetrics.com</h6>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="fa fa-map-marker" style={{ fontSize: "20px", color: "#000000" }}></i>
                                        <h6 className="ps-3" style={{ fontSize: "16px" }}>Green Metrics, LLC. 2248 Broadway # 1116 <br /> New
                                            York, NY 10024</h6>
                                    </div>

                                    <div className="d-flex fw-bolder">
                                        <a className="nav-link  text-primary" href="/privacy">Privacy Policy</a>
                                        <a className="nav-link ps-5 text-primary" href="/terms">Terms of use</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* end contact section */}

        </div >
    )
}

export default Contact
