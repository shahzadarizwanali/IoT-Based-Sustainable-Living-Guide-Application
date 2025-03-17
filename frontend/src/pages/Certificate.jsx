import React from 'react'

const Certificate = () => {
    return (
        <div>
            {/* certificate content */}
            <div class="container-fluid bg-light">
                <div class="container my-5">
                    <div class="row align-items-center">
                        {/* Certificate Image  */}
                        <div class="col-md-6 p-3">
                            <img src="/assets/images/certificate.webp" alt="Certificate" class="img-fluid rounded shadow" />
                        </div>

                        {/* Details Section  */}
                        <div class="col-md-6">
                            <h2><strong>Sustainable Environment Certificate</strong></h2>
                            <span class="badge bg-danger">Save 30%</span>
                            <p class="text-decoration-line-through">$95.00</p>
                            <h3 class="text-success">$66.50</h3>

                            <p>
                                Ready to get your <strong>JavaScript</strong> Lorem ipsum, dolor sit amet consectetur
                                adipisicing
                                elit. Repellendus consectetur, veritatis optio quod repellat voluptatibus nulla reiciendis
                                ullam
                                est
                                obcaecati, ducimus deserunt odit cumque recusandae suscipit sint perspiciatis autem illum.
                            </p>

                            <p>Become a <strong>Certified Sustainable Environment</strong> with Green Matrics</p>

                            <p class="text-warning">
                                ★★★★☆ (539 Reviews)
                            </p>

                            {/* Quantity Selector */}
                            <div class="d-flex align-items-center mb-3">
                                <label class="me-2">Quantity:</label>
                                <input type="number" class="form-control w-25" value="1" min="1" />
                            </div>

                            {/* Buy Buttons  */}
                            <button class="btn btn-warning w-100 mb-2">Buy now</button>
                            <button class="btn btn-success w-100">Buy it now</button>

                            <p class="mt-2 text-muted">14-Day Money-Back Guarantee</p>

                            <p class="mt-2">Interested in multiple purchases? <a href="/" class="text-primary">Send us a
                                request.</a></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Certificate