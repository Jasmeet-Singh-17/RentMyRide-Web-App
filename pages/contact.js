import React, { PureComponent } from 'react';
import Footer from '@/components/Footer';
import NavbarWrapper from '@/components/NavbarWrapper';

class Contact extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <NavbarWrapper />

                <div className="container my-5">
                    <div className="card shadow-lg p-4 rounded-4" style={{ backgroundColor: 'rgba(255, 255, 224, 0.95)' }}>
                        <h2 className="text-center mb-4 fw-bold text-warning">Contact Us</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label fw-semibold">Full Name *</label>
                                <input
                                    type="text"
                                    className="form-control rounded-3 border-warning"
                                    id="fullName"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="row g-3 mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="email" className="form-label fw-semibold">Email *</label>
                                    <input
                                        type="email"
                                        className="form-control rounded-3 border-warning"
                                        id="email"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="phone" className="form-label fw-semibold">Phone</label>
                                    <input
                                        type="text"
                                        className="form-control rounded-3 border-warning"
                                        id="phone"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="services" className="form-label fw-semibold">Needed Services *</label>
                                <select className="form-select rounded-3 border-warning" id="services" required>
                                    <option selected disabled>Select a service</option>
                                    <option value="1">Vehicle Booking Inquiry</option>
                                    <option value="2">Rental Assistance</option>
                                    <option value="3">Other Services</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Vehicle Type</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="vehicleType" id="car" value="car" checked />
                                    <label className="form-check-label" htmlFor="car">Car</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="vehicleType" id="bike" value="bike" />
                                    <label className="form-check-label" htmlFor="bike">Bike</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="vehicleType" id="scooter" value="scooter" />
                                    <label className="form-check-label" htmlFor="scooter">Scooter</label>
                                </div>
                            </div>



                            <div className="mb-3">
                                <label htmlFor="message" className="form-label fw-semibold">Message</label>
                                <textarea
                                    className="form-control rounded-3 border-warning"
                                    id="message"
                                    rows="4"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-warning w-100 fw-semibold text-white rounded-3">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default Contact