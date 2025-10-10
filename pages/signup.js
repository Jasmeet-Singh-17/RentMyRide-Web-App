import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { PureComponent } from 'react'

class Signup extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <Header />

                <div className="container d-flex justify-content-center align-items-center min-vh-100">
                    <div
                        className="card shadow-lg p-4 rounded-4"
                        style={{
                            maxWidth: '450px',
                            width: '100%',
                            backgroundColor: 'rgba(247, 247, 232, 0.95)'
                        }}
                    >
                        <h2 className="text-center mb-4 fw-bold text-warning">Sign Up</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label fw-bold">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control rounded-3 border-warning"
                                    id="name"
                                    placeholder="Enter full name"
                                    required
                                />
                            </div>

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

                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label fw-bold">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control rounded-3 border-warning"
                                    id="confirmPassword"
                                    placeholder="Confirm password"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-warning w-100 rounded-3 fw-semibold text-white"
                            >
                                Sign Up
                            </button>

                            <p className="text-center mt-3 text-muted">
                                Already have an account?{' '}
                                <a href="/login" className="text-warning fw-bold">
                                    Login
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
                <Footer />

            </>

        )
    }
}

export default Signup