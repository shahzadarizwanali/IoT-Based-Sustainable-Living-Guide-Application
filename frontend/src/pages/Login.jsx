import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:8000/api/login/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                navigate('/dashboard'); // Redirect to Dashboard
            } else {
                setError(data.error || 'Invalid Credentials');
            }
        } catch (error) {
            setError('Server error');
        }
    };

    return (
        <div>
            {/* login form  */}
            <div class="m-3">
                <div class="login-page container-fluid d-flex justify-content-center align-items-center vh-100 m-3">
                    <div class="auth-container text-center">
                        <h2>Welcome!</h2>
                        <p class="text-muted">Sign in to your account</p>
                        <div class="google-btn">
                            <img src="/assets/images/gmail-logo.png" alt="Google Logo" />
                            Sign in with Google
                        </div>
                        <div class="divider"><span>or</span></div>
                        {error && <p className="text-white bg-danger">{error}</p>}
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email Address"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div class="d-flex justify-content-between mb-3">
                                <div>
                                    <input type="checkbox" id="remember" /> <label for="remember">Remember me </label>
                                </div>
                                <br />
                                <a href="/" onclick="toggleAuth('forget')">Forgot password?</a>
                            </div>
                            <button type="submit" class="btn btn-dark w-100">Sign in</button>
                        </form>
                        <p class="mt-3 text-muted">Don't have an account? <a href="/signup">Sign up</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Login