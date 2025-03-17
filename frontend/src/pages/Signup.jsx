import React, { useState } from 'react';

const Signup = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await fetch('http://localhost:8000/api/signup/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setSuccess('Signup successful! You can now log in.');
            } else {
                setError(data.error || 'Signup failed');
            }
        } catch (error) {
            setError('Server error');
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
                    {error && <p className="text-white bg-danger">{error}</p>}
                    {success && <p className="text-white bg-success">{success}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input type="text" name="username" className="form-control" placeholder="Enter Your Name" onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <input type="email" name="email" className="form-control" placeholder="Email address" onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange} required />
                        </div>
                        <button type="submit" className="btn btn-dark w-100">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
