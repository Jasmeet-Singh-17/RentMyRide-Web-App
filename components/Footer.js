import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <footer className="d-none d-md-block bg-dark text-white pt-5 pb-3">
                    <div className="container">
                        <div className="row g-4 flex-row flex-wrap flex-lg-nowrap">

                            <div className="col-lg-3 col-md-6 col-sm-6 mb-4 d-flex flex-column">
                                <h3 className="fw-bold text-white mb-3">
                                    <span className="text-warning">RentMyRide</span>
                                    <i className="ri-riding-fill ms-2 text-warning"></i>
                                </h3>
                                <p className="text-light mb-4">
                                    Making car sharing simple, affordable, and reliable. Connect with vehicle owners
                                    and find your perfect ride anytime, anywhere.
                                </p>

                                <div className="d-flex gap-3">
                                    <a href="#" className="text-white fs-4 social-link" style={{ textDecoration: 'none' }}>
                                        <i className="ri-facebook-circle-fill"></i>
                                    </a>
                                    <a href="#" className="text-white fs-4 social-link" style={{ textDecoration: 'none' }}>
                                        <i className="ri-twitter-x-fill" />
                                    </a>
                                    <a href="#" className="text-white fs-4 social-link" style={{ textDecoration: 'none' }}>
                                        <i className="ri-instagram-fill" />
                                    </a>
                                    <a href="#" className="text-white fs-4 social-link" style={{ textDecoration: 'none' }}>
                                        <i className="ri-linkedin-fill" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 mb-4 d-flex flex-column">
                                <h5 className="fw-bold text-white mb-4">Quick Links</h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><a href="#" className="text-white text-decoration-none footer-link">Browse Cars</a></li>
                                    <li className="mb-2"><a href="#" className="text-white text-decoration-none footer-link">Rent Bikes</a></li>
                                    <li className="mb-2"><a href="#" className="text-white text-decoration-none footer-link">Scooters</a></li>
                                    <li className="mb-2"><a href="#" className="text-white text-decoration-none footer-link">List Your Vehicle</a></li>
                                    <li className="mb-2"><a href="#" className="text-white text-decoration-none footer-link">Pricing</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 mb-4 d-flex flex-column">
                                <h5 className="fw-bold text-white mb-4">Support</h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><a href="#" className="text-white text-decoration-none footer-link">Help Center</a></li>
                                    <li className="mb-2"><a href="#" className="text-white text-decoration-none footer-link">FAQ</a></li>
                                    <li className="mb-2"><a href="#" className="text-white text-decoration-none footer-link">Contact Us</a></li>
                                    <li className="mb-2"><a href="#" className="text-white text-decoration-none footer-link">Terms of Service</a></li>
                                    <li className="mb-2"><a href="#" className="text-white text-decoration-none footer-link">Privacy Policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 mb-4 d-flex flex-column">
                                <h5 className="fw-bold text-white mb-4">Get In Touch</h5>

                                <div className="mb-3 d-flex align-items-start">
                                    <i className="ri-map-pin-2-fill text-white fs-5 me-3 mt-1"></i>
                                    <div>
                                        <p className="text-light mb-0">
                                            123 Business Park, <br />
                                            Delhi, India 110064
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-3 d-flex align-items-center">
                                    <i className="ri-phone-fill text-white fs-5 me-3"></i>
                                    <a href="tel:+919876543210" className="text-white text-decoration-none footer-link">
                                        +91 98765 43210
                                    </a>
                                </div>

                                <div className="mb-3 d-flex align-items-center">
                                    <i className="ri-mail-fill text-white fs-5 me-3"></i>
                                    <a href="mailto:support@rentmyride.com" className="text-white text-decoration-none footer-link">
                                        support@rentmyride.com
                                    </a>
                                </div>

                                <div className="d-flex align-items-center">
                                    <i className="ri-time-fill text-white fs-5 me-3"></i>
                                    <p className="text-light mb-0">
                                        24/7 Customer Support
                                    </p>
                                </div>
                            </div>
                        </div>

                        <hr className="my-4" />

                        <div className="row align-items-center">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <p className="text-light mb-0">
                                    <small>© 2025 RentMyRide. All Rights Reserved.</small>
                                </p>
                            </div>
                            <div className="col-md-6 text-md-end">
                                <div className="d-flex justify-content-md-end justify-content-start gap-4">
                                    <a className="text-white text-decoration-none footer-link" href="#"> Privacy </a>
                                    <a className="text-white text-decoration-none footer-link" href="#"> Terms </a>
                                    <a className="text-white text-decoration-none footer-link" href="#"> Cookies </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer
