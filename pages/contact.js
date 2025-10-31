import React, { PureComponent } from 'react';
import Footer from '@/components/Footer';

const Contact = () => {
    handleBack = () => {
        window.history.back();
    };
    return (
        <>
            <div className="mb-3 border border-dark sticky-top bg-warning p-1">
                <button
                    onClick={this.handleBack}
                    className="btn btn-link text-dark d-flex align-items-center text-decoration-none fs-3 w-100 "
                >
                    <i className="ri-arrow-left-line fs-3 me-2"></i> Help
                </button>
            </div>


            <div className="container my-5">
                <div
                    className="card shadow-lg border-0 rounded-4 mx-auto p-4 p-md-5"
                    style={{
                        maxWidth: '700px',
                        backgroundColor: '#f8f9fa',
                    }}
                >
                    <h2 className="text-center fw-bold text-warning mb-4">
                        Get in Touch
                    </h2>
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="name" className="form-label fw-semibold">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control rounded-3 border-warning"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label fw-semibold">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control rounded-3 border-warning"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="phone" className="form-label fw-semibold">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    className="form-control rounded-3 border-warning"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="service" className="form-label fw-semibold">
                                    Needed Service *
                                </label>
                                <select
                                    id="service"
                                    className="form-select rounded-3 border-warning"
                                    required
                                >
                                    <option value="" disabled selected>
                                        Select a service
                                    </option>
                                    <option value="rental">Vehicle Rental</option>
                                    <option value="support">Customer Support</option>
                                    <option value="partner">Partner With Us</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="col-12">
                                <label htmlFor="message" className="form-label fw-semibold">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="form-control rounded-3 border-warning"
                                    placeholder="Your message here..."
                                    required
                                ></textarea>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-warning w-100 mt-4 fw-semibold text-white rounded-3 py-2"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Contact;
