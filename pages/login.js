import React, { PureComponent } from 'react';

class Login extends PureComponent {
    render() {
        return (
            <>
                <div
                    className="container d-flex flex-column justify-content-center align-items-center vh-100"
                    style={{ backgroundColor: '#f8f9fa' }}
                >
                    {/* Login Card */}
                    <div
                        className="card p-4 rounded-4 "
                        style={{
                            maxWidth: '400px',
                            width: '100%',
                            backgroundColor: 'rgba(247, 247, 232, 0.95)',
                        }}
                    >
                        <h2 className="text-center mb-4 fw-bold text-warning">Login</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label fw-bold">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control rounded-3 border-warning"
                                    id="email"
                                    placeholder="Enter email"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label fw-bold">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control rounded-3 border-warning"
                                    id="password"
                                    placeholder="Password"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-warning w-100 rounded-3 fw-semibold text-white"
                            >
                                Login
                            </button>

                            <p className="text-center mt-3 text-muted">
                                Don't have an account?{' '}
                                <a href="/signup" className="text-warning fw-bold text-decoration-none">
                                    Sign Up
                                </a>
                            </p>
                        </form>
                    </div>

                    {/* Divider */}
                    <hr
                        className="mx-auto my-4"
                        style={{ width: '90%', borderTop: '1px solid #ccc' }}
                    />

                    {/* Footer Links */}
                    <div className="d-flex justify-content-center flex-wrap gap-3 text-center">
                        <a href="#" className="text-decoration-none text-dark small">
                            Return Policy
                        </a>
                        <a href="#" className="text-decoration-none text-dark small">
                            Terms of Use
                        </a>
                        <a href="#" className="text-decoration-none text-dark small">
                            Services
                        </a>
                        <a href="#" className="text-decoration-none text-dark small">
                            Privacy
                        </a>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;
