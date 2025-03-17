import React from 'react'

const navbar = () => {
    return (
        <div>
            {/* header section  */}
            <header className="header_section">
                <div className="header_bottom">
                    <div className="container-fluid">
                        {/* navigation bar  */}
                        <nav className="navbar navbar-expand-lg custom_nav-container ">
                            <a className="navbar-brand" href="index.html">
                                <img src="/assets/images/logo2.png" alt="" height="70px" />
                            </a>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className=""> </span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav  ">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/about"> About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/contact">Contact Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/certificate">Certificate</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/login"> Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/signup"> Signup</a>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            {/* end header section  */}

        </div>
    )
}

export default navbar