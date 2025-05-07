import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login/', {
                email,
                password
            });

            if (response.data.status === 'success') {
                setMsg('Login successful!');

                // 🔄 CHANGED: Save user data to localStorage
                localStorage.setItem('user', JSON.stringify(response.data.user));

                // 🔄 CHANGED: Redirect to dashboard page
                window.location.href = '/dashboard';
            }
        } catch (error) {
            setMsg('Invalid credentials');
        }
    };

    return (
        <div>
            {/* login form  */}
            <div className="m-3">
                <div className="login-page container-fluid d-flex justify-content-center align-items-center vh-100 m-3">
                    <div className="auth-container text-center">
                        <h2>Welcome!</h2>
                        <p className="text-muted">Sign in to your account</p>
                        <div className="google-btn">
                            <img src="/assets/images/gmail-logo.png" alt="Google Logo" />
                            Sign in with Google
                        </div>
                        <div className="divider"><span>or</span></div>
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    className="form-control"
                                    placeholder="Email Address"
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    className="form-control"
                                    placeholder="Password"
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <div>
                                    <input type="checkbox" id="remember" /> <label htmlFor="remember">Remember me </label>
                                </div>
                                <a href="/" onClick={() => window.toggleAuth?.('forget')}>Forgot password?</a> {/* 🔄 CHANGED: inline JS to React event */}
                            </div>
                            <button type="submit" className="btn btn-dark w-100">Sign in</button>
                            <p>{msg}</p>
                        </form>
                        <p className="mt-3 text-muted">Don't have an account? <a href="/signup">Sign up</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
