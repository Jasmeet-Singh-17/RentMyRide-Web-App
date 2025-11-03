import React from 'react';
import { useRouter } from 'next/navigation';

const Contact = () => {
    const router = useRouter();

    const handleBack = () => {
        router.push('/')
    };
    return (
        <>
            <div className="mb-3 border border-dark sticky-top bg-warning p-1">
                <button
                    onClick={handleBack}
                    className="btn btn-link text-dark d-flex align-items-center text-decoration-none fs-3 w-100 "
                >
                    <i className="ri-arrow-left-line fs-3 me-2"></i> Help
                </button>
            </div>


            <div className="container my-5">
                <div
                    className="rounded-4 card border-0 mx-auto p-4 p-md-5"
                    style={{
                        maxWidth: '700px',
                        backgroundColor: '#e5e5e5ff',
                    }}>
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
                                    className="w-100 rounded-3 border border-warning p-2"
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
                                    className="w-100 rounded-3 border border-warning p-2"
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
                                    className="w-100 rounded-3 border border-warning p-2"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="service" className="form-label fw-semibold "
                                >
                                    Needed Service *
                                </label>
                                <input
                                    type="text"
                                    id="service"
                                    className="w-100 rounded-3 border border-warning p-2"
                                    placeholder="Service Needed"
                                    style={{ outline: 'none' }}
                                />

                            </div>

                            <div className="col-12">
                                <label htmlFor="message" className="form-label fw-semibold">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-100 rounded-3 border border-warning p-2"
                                    placeholder="Your message here..."
                                    required
                                ></textarea>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="fixed-bottom border-top border-dark p-3">
                <button
                    type="submit"
                    className="btn btn-warning fw-semibold text-white w-100 rounded-3"
                >
                    Send Message
                </button>
            </div>


        </>
    );
}

export default Contact;
