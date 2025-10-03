import Footer from '@/components/Footer';
import NavbarWrapper from '@/components/NavbarWrapper';
import React, { PureComponent } from 'react';

class Login extends PureComponent {
    render() {
        return (
            <>
                <NavbarWrapper />

                <div className="container d-flex justify-content-center align-items-center min-vh-100">
                    <div
                        className="card shadow-lg p-4 rounded-4"
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
                                <a href="/signup" className="text-warning fw-bold">
                                    Sign Up
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Login;
