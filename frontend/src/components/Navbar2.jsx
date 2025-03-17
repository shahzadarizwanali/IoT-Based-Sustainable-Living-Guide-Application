import React from 'react'

function Navbar2() {
    return (
        <div>
            {/* navigation bar */}
            <nav className="nav d-flex flex-row flex-nowrap justify-content-between align-items-center">
                {/* Logo (Adjust size on mobile)  */}
                <div className="container-fluid">
                    <img className="logo ps-5 m-1 img-fluid" src="/assets/images/logo2.png" alt="logo" style={{ maxWidth: "150px" }} />
                </div>

                {/* Search Bar (Visible on larger screens only) */}
                <div className="search-container d-none d-md-flex justify-content-center">
                    <i className="fa fa-search" style={{ fontSize: "18px" }}></i>
                    <input className="form-control" style={{ width: "400px" }} type="search" placeholder="Search"
                        onclick="toggleSearch()" />
                </div>

                {/* Search Icon (Visible only on mobile)  */}
                <div className="d-md-none">
                    <i className="fa fa-search" style={{ fontSize: "20px" }} onclick="toggleSearch()"></i>
                </div>

                <div className="container-fluid d-flex align-items-center justify-content-end">
                    {/* Notification Icon */}
                    <i className="fa-regular fa-2x fa-bell m-3" onclick="toggleNotifications()"></i>

                    {/* Profile Icon  */}
                    <button className="btn btn-light d-flex align-items-center gap-2 rounded-pill shadow-sm px-3 py-2"
                        onclick="toggleProfileMenu()">
                        <i className="fa-solid fa-2x fa-circle-user"></i>
                        <span className="fw-bold d-none d-sm-inline">PROFILE</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>

                    <div id="ProfileMenu" className="profile-dropdown-menu">
                        <strong>ACCOUNT</strong>
                        <div className="profile-info">
                            <i className="fa-solid fa-2x fa-circle-user"></i>
                            <hr />
                            <div>
                                <strong>Demo Person</strong>
                                <span>demoperson@gmail.com</span>
                            </div>
                        </div>
                        <a href="/">Public profile</a>
                        <a href="/">Settings</a>
                        <a href="/">What's new</a>
                        <a href="/">Refer Friends</a>
                        <a href="/">Suggestions</a>
                        <a href="/">Report Content</a>
                        <a href="privacy.html">Privacy policy</a>
                        <a href="terms.html">Terms & Conditions</a>
                        <a href="/">Sign out</a>
                    </div>

                    {/* Menu Bar  */}
                    <button className="btn d-flex align-items-center rounded-pill shadow-sm px-2 py-2" onclick="toggleNewProfile()">
                        <i className='fas fa-ellipsis-v m-3' style={{ fontSize: "24px" }}></i>
                    </button>

                    <div id="newProfile" className="profile-dropdown-menu">
                        <strong>ACCOUNT</strong>
                        <div className="profile-info">
                            <i className="fa-solid fa-2x fa-circle-user"></i>
                            <hr />
                            <div>
                                <strong>Demo Person</strong>
                                <span>demoperson@gmail.com</span>
                            </div>
                            <div className="d-flex justify-content-center mt-2">
                                <i className="fa fa-facebook px-3" style={{ fontSize: "24px", color: "#000000" }}></i>
                                <i className="fa fa-twitter px-3" style={{ fontSize: "24px", color: "#000000" }}></i>
                                <i className="fa fa-youtube-play px-3" style={{ fontSize: "24px", color: "#000000" }}></i>
                            </div>
                            <hr />
                        </div>
                        <a href="/">Customize Profile</a>
                        <a href="/">Close this Profile</a>
                    </div>
                </div>
            </nav>

            {/* notifications  */}
            <div id="notifications" className="notifications-dropdown">
                <div className="d-flex justify-content-between p-2">
                    <strong>Notifications</strong>
                    <span className="text-primary" style={{ cursor: "pointer" }}>Mark all as read</span>
                </div>
                <div className="notification-item">
                    <div className="d-flex align-items-center gap-2">
                        <div className="notification-circle">90%</div>
                        <span><strong>Notifications 1</strong></span>
                    </div>
                    <div className="notification-dot"></div>
                </div>
                <div className="notification-item">
                    <div className="d-flex align-items-center gap-2">
                        <div className="notification-circle">50%</div>
                        <span><strong>Notifications 2</strong></span>
                    </div>
                    <div className="notification-dot"></div>
                </div>
            </div>
        </div>

    )
}

export default Navbar2