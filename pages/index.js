import React, { PureComponent } from 'react'
import NavbarBottom from '@/components/NavbarBottom'
import NavbarTop from '@/components/NavbarTop'
import NavbarWrapper from '@/components/NavbarWrapper'
import Footer from '@/components/Footer'
class Index extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <>
        <NavbarWrapper />

        <section
          className="d-flex align-items-center justify-content-center"
          style={{
            minHeight: '80vh',
            background: 'linear-gradient(135deg, #FFD700 0%, #FFB347 100%)'
          }}
        >
          <div className="container text-center">
            <h1 className="display-4 text-dark fw-bold mb-3">
              Welcome to RentMyRide <i className="ri-riding-fill"></i>
            </h1>
            <p className="text-dark fs-5 mb-4">
              Car sharing made simple, affordable, and reliable
            </p>
            <button className="btn btn-dark btn-lg rounded-pill shadow px-5 py-3 btn-hover">
              <i className="ri-car-fill me-2"></i>
              Find Your Ride Now
            </button>

            <div className="d-flex gap-3 my-4 justify-content-center flex-wrap">
              <span className="badge bg-white text-success px-3 py-2 rounded-pill">
                <i className="ri-check-fill me-1"></i> Instant Booking
              </span>
              <span className="badge bg-white text-success px-3 py-2 rounded-pill">
                <i className="ri-check-fill me-1"></i> 24/7 Support
              </span>
              <span className="badge bg-white text-success px-3 py-2 rounded-pill">
                <i className="ri-check-fill me-1"></i> Best Prices
              </span>
            </div>
          </div>
        </section>

        {/* //Features */}
        <section className='py-4' style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h1 className='text-center mb-5 fw-bold mt-3'>Features That Make Us Unique</h1>
            <div className="row g-4">

              <div className="col-md-6 col-lg-4">
                <div className="card h-100 rounded-4 p-4 hover-effect" style={{ background: 'linear-gradient(135deg, #ffffff, #f2f2f2)' }}>
                  <div className="card-body text-center">
                    <i className="ri-car-fill fs-1 text-dark mb-3"></i>
                    <h5 className="card-title fw-bold">User-Friendly Booking</h5>
                    <p className="card-text">
                      Book vehicles instantly, choose multiple types, and enjoy flexible durations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card h-100 rounded-4 p-4 hover-effect" style={{ background: 'linear-gradient(135deg, #ffffff, #f0f0f0)' }}>
                  <div className="card-body text-center">
                    <i className="ri-user-3-fill fs-1 text-dark mb-3"></i>
                    <h5 className="card-title fw-bold">Direct Owner Contact</h5>
                    <p className="card-text">
                      Connect directly with vehicle owners for transparent bookings and hassle-free communication.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card h-100 rounded-4 p-4 hover-effect" style={{ background: 'linear-gradient(135deg, #ffffff, #f0f0f0)' }}>
                  <div className="card-body text-center">
                    <i className="ri-map-pin-2-fill fs-1 text-dark mb-3"></i>
                    <h5 className="card-title fw-bold">Convenience Features</h5>
                    <p className="card-text">
                      Find nearby vehicles, manage pick-up/drop-off, and save favorites for quick access.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card h-100 rounded-4 p-4 hover-effect" style={{ background: 'linear-gradient(135deg, #ffffff, #f9f9f9)' }}>
                  <div className="card-body text-center">
                    <i className="ri-dashboard-fill fs-1 text-dark mb-3"></i>
                    <h5 className="card-title fw-bold">Admin / Owner Features</h5>
                    <p className="card-text">
                      Manage vehicles, bookings, pricing, and track statistics easily from the dashboard.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card h-100 rounded-4 p-4 hover-effect" style={{ background: 'linear-gradient(135deg, #ffffff, #f4f4f4)' }}>
                  <div className="card-body text-center">
                    <i className="ri-customer-service-2-line fs-1 text-dark mb-3"></i>
                    <h5 className="card-title fw-bold">24/7 Customer Support</h5>
                    <p className="card-text">
                      Get help anytime with our responsive support team available around the clock.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card h-100 rounded-4 p-4 hover-effect" style={{ background: 'linear-gradient(135deg, #ffffff, #e6e6e6)' }}>
                  <div className="card-body text-center">
                    <i className="ri-discount-percent-line fs-1 text-dark mb-3"></i>
                    <h5 className="card-title fw-bold">Huge Discounts</h5>
                    <p className="card-text">
                      Enjoy special offers, seasonal discounts, and promotional deals on rentals.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* //Services */}
        <section className='py-5' style={{ backgroundColor: '#f9fafb' }}>
          <div className="container">
            <h1 className='text-center mb-5 fw-bold'>Our Services</h1>
            <div className="row g-4">

              <div className="col-md-6 col-lg-4">
                <div className="service-card h-100 p-4 text-center hover-service">
                  <div className="icon-circle mb-3">
                    <i className="ri-roadster-fill fs-1 text-white"></i>
                  </div>
                  <h5 className="fw-bold">Core Rental Services</h5>
                  <p>
                    Rent cars, bikes, and scooters instantly with flexible hourly, daily, or weekly options.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="service-card h-100 p-4 text-center hover-service">
                  <div className="icon-circle mb-3" style={{ backgroundColor: '#28a745' }}>
                    <i className="ri-map-pin-2-fill fs-1 text-white"></i>
                  </div>
                  <h5 className="fw-bold">Dedicated Pick-Up Center</h5>
                  <p>
                    Convenient pick-up and drop-off points for quick and hassle-free rentals.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="service-card h-100 p-4 text-center hover-service">
                  <div className="icon-circle mb-3" style={{ backgroundColor: '#007bff' }}>
                    <i className="ri-smartphone-fill fs-1 text-white"></i>
                  </div>
                  <h5 className="fw-bold">Tech & Mobile Services</h5>
                  <p>
                    Real-time vehicle availability, GPS tracking, and mobile app integration for easy booking.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="service-card h-100 p-4 text-center hover-service">
                  <div className="icon-circle mb-3" style={{ backgroundColor: '#ffc107' }}>
                    <i className="ri-shield-check-fill fs-1 text-white"></i>
                  </div>
                  <h5 className="fw-bold">Safety & Trust</h5>
                  <p>
                    Verified users, insurance coverage, and transparent bookings for complete peace of mind.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="service-card h-100 p-4 text-center hover-service">
                  <div className="icon-circle mb-3" style={{ backgroundColor: '#17a2b8' }}>
                    <i className="ri-customer-service-2-line fs-1 text-white"></i>
                  </div>
                  <h5 className="fw-bold">24/7 Customer Support</h5>
                  <p>
                    Get help anytime with our responsive support team, available around the clock.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="service-card h-100 p-4 text-center hover-service">
                  <div className="icon-circle mb-3" style={{ backgroundColor: '#6c757d' }}>
                    <i className="ri-secure-payment-fill fs-1 text-white"></i>
                  </div>
                  <h5 className="fw-bold">Safe Payment</h5>
                  <p>
                    Secure online payments with multiple options including cards, UPI, and wallets.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>


        <section className='py-5 mb-3'>
          <div className='container'>

            <h1 className='text-center mb-5 fw-bold'>Renting Made Easy with 3 Easy Steps</h1>

            <div className='bg-dark p-4 rounded-4'>

              <div className="row g-4 justify-content-center">

                <div className="col-sm-12 col-md-4 col-lg-4">
                  <div className="card p-4 text-center h-100 rounded-4 card-hover bg-white">
                    <div className="mb-5 bg-dark rounded-4 d-flex align-items-center justify-content-center" >
                      <i className="ri-number-1 fs-1 text-white"></i>
                    </div>
                    <h5 className="fw-bold mb-4">Search Your Vehicle </h5>
                    <p>Rent cars, bikes, and scooters instantly with flexible hourly, daily, or weekly options.</p>
                  </div>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-4">
                  <div className="card p-4 text-center h-100 rounded-4 card-hover bg-white">
                    <div className="mb-5 bg-dark rounded-4 d-flex align-items-center justify-content-center" >
                      <i className="ri-number-2 fs-1 text-white"></i>
                    </div>
                    <h5 className="fw-bold mb-4">Easy Booking Process</h5>
                    <p>Book your ride online in just a few clicks without any paperwork or delays.</p>
                  </div>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-4">
                  <div className="card p-4 text-center h-100 rounded-4 card-hover bg-white">
                    <div className="mb-5 bg-dark rounded-4 d-flex align-items-center justify-content-center" >
                      <i className="ri-number-3 fs-1 text-white"></i>
                    </div>
                    <h5 className="fw-bold mb-4">Flexible Payment Options</h5>
                    <p>Pay securely via multiple methods — cards, UPI, or cash on delivery.</p>
                  </div>
                </div>

              </div>

              <div className='p-3 my-4 rounded-4 bg-white d-flex align-items-center justify-content-between shadow-sm button-hover'>
                <h5 className='mb-0 text-dark'>
                  Rent The Vehicle
                </h5>
                <button className='btn btn-outline-dark rounded-4 d-flex align-items-center gap-2 px-4 py-2' href='/explore'>
                  Rent Now <i className="ri-arrow-right-fill"></i>
                </button>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </>
    )
  }
}

export default Index