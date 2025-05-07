import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const handleChange = e => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/signup/', formData);
            alert(response.data.message);
        } catch (error) {
            alert("Signup failed");
            console.log(error.response.data);
        }
    };

    return (
        <div className="m-3">
            <div className="signup-page container-fluid d-flex justify-content-center align-items-center m-0">
                <div className="auth-container text-center col-md-5">
                    <h2>Sign up now</h2>
                    <p className="text-muted">Create a new account</p>
                    <div class="google-btn">
                        <img src="/assets/images/gmail-logo.png" alt="Google Logo" />
                        Sign up with Google
                    </div>
                    <div class="divider"><span>or</span></div>
                    {/* {error && <p className="text-white bg-danger">{error}</p>}
                    {success && <p className="text-white bg-success">{success}</p>} */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input type="text" name="name" className="form-control" placeholder="Enter Your Name" onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <input type="email" name="email" className="form-control" placeholder="Email address" onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange} required />
                        </div>
                        <button type="submit" className="btn btn-dark w-100">Sign up</button>
                    </form>
                    <p class="mt-3 text-muted">Already have account? <a href="/login">Login</a></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
