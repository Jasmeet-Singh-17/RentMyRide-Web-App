import React, { PureComponent } from 'react';

class Login extends PureComponent {
    render() {
        return (
            <><div className="container fixed-top d-md-none ">
                <div
                    className="card rounded-top-0 rounded-bottom-4 text-center py-4 text-dark fw-semibold "
                    style={{
                        backgroundColor: '#f5ebe0',
                        height: "10vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div className="d-flex align-items-center justify-content-center gap-2">
                        <span className="fw-bold fs-5">RentMyRide</span>
                        <i className="ri-riding-fill fs-3"></i>
                    </div>
                </div>
            </div>



                <div
                    className="container fixed-bottom d-md-none">
                    <div
                        className="card p-3 rounded-top-4 rounded-bottom-0 "
                        style={{
                            width: '100%',
                            backgroundColor: '#f3f1f0ff',
                        }}
                    >
                        <h2 className="text-center mb-4 fw-bold text-warning">Welcome Back</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label fw-bold">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="border bg-white text-dark w-100 outline-0 border-warning rounded-3 p-2"
                                    id="email"
                                    placeholder="Enter email"
                                    style={{ outline: 'none' }}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label fw-bold">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="border bg-white text-dark w-100 outline-0 border-warning rounded-3 p-2"
                                    id="password"
                                    placeholder="Password"
                                    style={{ outline: 'none' }}
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
                        <hr
                            className=" my-4"
                            style={{ width: '90%', borderTop: '1px solid #686565ff' }}
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
                </div>

                <div
                    className="container d-md-flex flex-column justify-content-center align-items-center vh-100 d-none"                >
                    {/* Login Card */}
                    <div
                        className="card p-4 rounded-4 "
                        style={{
                            width: '100%',
                            backgroundColor: '#f3f1f0ff',
                        }}
                    >
                        <h2 className="text-center mb-4 fw-bold text-warning">Welcome Back</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label fw-bold">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="border bg-white text-dark w-100 outline-0 border-warning rounded-3 p-2"
                                    id="email"
                                    placeholder="Enter email"
                                    style={{ outline: 'none' }}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label fw-bold">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="border bg-white text-dark w-100 outline-0 border-warning rounded-3 p-2"
                                    id="password"
                                    placeholder="Password"
                                    style={{ outline: 'none' }}
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
