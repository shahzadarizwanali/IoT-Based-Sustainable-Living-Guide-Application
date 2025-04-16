import React from 'react'

function Settings() {
    return (
        <div>
            <div className="container my-5">
                <h3><strong>Your Account Setting</strong></h3>
                <hr />

                <div className="d-flex align-items-center mt-3">
                    {/* Profile Picture  */}
                    <div className="profile-circle me-3">RA</div>
                    <div>
                        <p className="mb-1"><strong>Upload your profile photo</strong></p>
                        <p className="text-muted small">This helps your teammates recognize you.</p>
                    </div>
                    <button className="btn btn-outline-secondary ms-auto">Upload photo</button>
                </div>

                <hr />

                {/* <Name Section  */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                        <p className="mb-1 text-muted">Name</p>
                        <p className="mb-0">Rizwan Ali</p>
                    </div>
                    <button className="btn btn-outline-secondary">Edit</button>
                </div>

                <hr />

                {/* Email Section  */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                        <p className="mb-1 text-muted">Email address</p>
                        <p className="mb-0">rrizwanali808@gmail.com</p>
                    </div>
                    <button className="btn btn-outline-secondary">Edit</button>
                </div>

                <hr />

                {/* Number Section  */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                        <p className="mb-1 text-muted">Phone Number</p>
                        <p className="mb-0">0320-2569899</p>
                    </div>
                    <button className="btn btn-outline-secondary">Edit</button>
                </div>

                <hr />

                {/* Password Section  */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                        <p className="mb-1 text-muted">Password</p>
                        <p className="mb-0">*************</p>
                    </div>
                    <button className="btn btn-outline-secondary">Change</button>
                </div>
            </div>
        </div>

    )
}

export default Settings