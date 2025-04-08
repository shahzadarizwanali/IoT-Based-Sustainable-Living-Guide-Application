import React from 'react'

function Blog1() {
    return (
        <div>
            {/* blog 1 content */}

            <section className="about_section m-5">
                <div className="container  ">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>
                                        5 Easy Ways to reduce your waste
                                    </h2>
                                </div>
                                <p>
                                    Reducing waste is a key step toward a sustainable lifestyle. Here are five simple yet
                                    effective ways to minimize waste in daily life:
                                    <br /><br />
                                    <b>Switch to Reusable Items</b> – Use cloth bags, metal straws, and refillable bottles
                                    instead of disposable plastic.
                                    <br /><br />
                                    <b>Compost Organic Waste</b> – Turn food scraps and garden waste into compost to enrich the
                                    soil naturally.
                                    <br /><br />
                                    <b>Buy in Bulk</b> – Reduce packaging waste by purchasing groceries and household items in
                                    bulk.
                                    <br /><br />
                                    <b>Repurpose and Upcycle</b> – Get creative by turning old clothes, furniture, and materials
                                    into something new.
                                    <br /><br />
                                    <b>Say No to Single-Use Plastics</b> – Avoid plastic cutlery, cups, and packaging whenever
                                    possible.
                                    <br /><br />
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="img-box">
                                <img src="/assets/images/trash.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Blog1