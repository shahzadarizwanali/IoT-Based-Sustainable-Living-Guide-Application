import React from 'react'

function About() {
    return (
        <div>
            {/* about section  */}
            <section className="about_section m-5">
                <div className="container  ">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>
                                        About Us
                                    </h2>
                                </div>
                                <p>
                                    At the Soil Association, we help people build natural solutions together.
                                    <br /><br />
                                    We support everyone to grow - whether that's growing food, or by growing as people, developing healthy
                                    connections with nature and joining together with others to support a nature-friendly future.
                                    <br /><br />
                                    Working together with farmers, businesses, policymakers and fellow citizens, our work has made an impact
                                    on the food you eat, the clothes you wear and the environment you live in.
                                    <br /><br />
                                    Throughout our history, we've campaigned for change on a global scale. We've supported farming innovation.
                                    We've developed world-leading standards in order to protect the future health of our communities, animals,
                                    plants and environment.
                                    <br /><br />
                                    We do this because we know we can make a world of difference.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="img-box">
                                <img src="/assets/images/img.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default About