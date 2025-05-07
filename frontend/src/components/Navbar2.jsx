import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Navbar2() {
    // CHANGED: Set default user as null instead of hardcoded guest
    const [user, setUser] = useState(null);
    const [notifications, setNotifications] = useState([]);
    const navigate = useNavigate();
    // Simulates the login API call
    const loginUser = async (email, password) => {
        const response = await fetch('http://localhost:8000/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();

        if (data.status === 'success') {
            setUser({
                name: data.user.name,
                email: data.user.email,
            });
            localStorage.setItem('user', JSON.stringify(data.user)); // Save user
        } else {
            console.error('Login failed: ', data.message);
        }
    };

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.email) {
            setUser({
                name: storedUser.name || 'No Name',
                email: storedUser.email,
            });
        } else {
            // ADDED: Login triggered only if no user in localStorage
            loginUser("guest@example.com", "guestpassword");
        }

        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/notifications/");
            const sorted = response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            setNotifications(sorted);
        } catch (error) {
            console.error("Error fetching notifications:", error);
        }
    };
    const handleNotificationClick = () => {
        // Redirect to the analytics page
        navigate('/analytics/');
    };

    const markAllAsRead = () => {
        // Update the state locally by setting all notifications to read
        setNotifications(notifications.map((notif) => ({
            ...notif,
            is_read: true
        })));
    };

    return (
        <div>
            {/* navigation bar */}
            <div className="container-fluid">
                <nav className="nav d-flex flex-row flex-nowrap justify-content-between align-items-center">
                    <a className="navbar-brand pt-3" href="index.html">
                        <img src="/assets/images/logo2.png" alt="" height="70px" />
                    </a>

                    <div className="search-container d-none d-md-flex justify-content-center" style={{ position: "relative", left: "20%" }}>
                        <i className="fa fa-search" style={{ fontSize: "18px" }}></i>
                        <input className="form-control" style={{ width: "400px" }} type="search" placeholder="Search"
                            onClick={() => window.toggleSearch()} />
                    </div>

                    <div className="d-md-none" style={{ position: "relative", left: "7%" }}>
                        <i className="fa fa-search" style={{ fontSize: "20px" }} onClick={() => window.toggleSearch()}></i>
                    </div>

                    <div className="container-fluid d-flex align-items-center justify-content-end">
                        <i className="fa-regular fa-2x fa-bell m-3" onClick={() => window.toggleNotifications()}></i>

                        <button className="btn btn-light d-flex align-items-center gap-2 rounded-pill shadow-sm px-3 py-2"
                            onClick={() => window.toggleProfileMenu()}>
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
                                    {/*  CHANGED: Conditional user data rendering */}
                                    <strong>{user ? user.name : "Loading..."}</strong>
                                    <span>{user ? user.email : ""}</span>
                                </div>
                            </div>
                            <a href="/dashboard">Dashboard</a>
                            <a href="/settings">Settings</a>
                            <a href="/">Close this Profile</a>

                        </div>

                        <button className="btn d-flex align-items-center rounded-pill shadow-sm px-2 py-2" onClick={() => window.toggleNewProfile()}>
                            <i className='fas fa-ellipsis-v m-2 p=2' style={{ fontSize: "24px" }}></i>
                        </button>

                        <div id="newProfile" className="profile-dropdown-menu">
                            <strong>ACCOUNT</strong>
                            <div className="profile-info">
                                <i className="fa-solid fa-2x fa-circle-user"></i>
                                <hr />
                                <div>
                                    {/*  CHANGED: Conditional user data rendering */}
                                    <strong>{user ? user.name : "Loading..."}</strong>
                                    <span>{user ? user.email : ""}</span>
                                </div>
                                <div className="d-flex justify-content-center mt-2">
                                    <i className="fa fa-facebook px-3" style={{ fontSize: "24px", color: "#000000" }}></i>
                                    <i className="fa fa-twitter px-3" style={{ fontSize: "24px", color: "#000000" }}></i>
                                    <i className="fa fa-youtube-play px-3" style={{ fontSize: "24px", color: "#000000" }}></i>
                                </div>
                                <hr />
                            </div>

                            <a href="/whats">What's new</a>
                            <a href="/suggestions">Suggestions</a>
                            <a href="/report">Report Content</a>
                            <a href="privacy">Privacy policy</a>
                            <a href="terms">Terms & Conditions</a>
                            <a href="/" onClick={() => window.logout()}>Sign out</a>
                        </div>
                    </div>

                    <div id="notifications" className="notifications-dropdown p-2">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <strong>Notifications</strong>
                            <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => markAllAsRead()}>Mark all as read</span>
                        </div>

                        {notifications.length > 0 ? (
                            <div
                                className="notification-item d-flex justify-content-between align-items-center p-2 mb-2 rounded shadow-sm bg-white"
                                key={notifications[0].id}
                                onClick={() => handleNotificationClick && handleNotificationClick(notifications[0].id)}
                                style={{ borderLeft: notifications[0].sustainability ? "5px solid #4CAF50" : "5px solid #F44336", cursor: 'pointer' }}
                            >
                                <div className="d-flex align-items-center gap-2">
                                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "bold" }}>
                                        {notifications[0].sustainability ? "✅" : "⚠️"}
                                    </div>
                                    <div>
                                        <strong>{notifications[0].title}</strong>
                                        {/* <div style={{ fontSize: "0.85rem", color: "gray" }}>{notifications[0].sustainability ? "Sustainable" : "Not Sustainable"}</div> */}
                                    </div>
                                </div>

                                {!notifications[0].is_read && <div className="notification-dot"></div>}
                            </div>
                        ) : (
                            <div className="p-2 text-center">No new notifications</div>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar2;