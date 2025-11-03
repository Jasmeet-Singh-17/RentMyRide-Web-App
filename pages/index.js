import React, { PureComponent } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BrandCard from '@/components/BrandCard'
import brands from '@/data/brands'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Index = () => {
  return (
    <>
      <Header />

      <section
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: '60vh',
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
          <button className="btn btn-dark rounded-pill px-5 py-3">
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

            <div className="col-6 col-md-6 col-lg-4">
              <div className="card rounded-4 p-1" style={{ background: 'linear-gradient(-40deg, #ffffff, #e6e6e6)', cursor: 'pointer' }}>
                <div className="card-body text-center">
                  <i className="ri-car-line fs-1 text-dark "></i>
                  <h5 className="card-title fw-bold">User-Friendly Booking</h5>
                  <p className="card-text">
                    Book vehicles instantly, choose multiple types, and enjoy flexible durations.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-4">
              <div className="card rounded-4 p-1" style={{ background: 'linear-gradient(-40deg, #ffffff, #e6e6e6)', cursor: 'pointer' }}>
                <div className="card-body text-center">
                  <i className="ri-user-3-line fs-1 text-dark"></i>
                  <h5 className="card-title fw-bold">Direct Contact</h5>
                  <p className="card-text">
                    Connect directly with vehicle owners for transparent bookings and hassle-free communication.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-4">
              <div className="card rounded-4 p-1" style={{ background: 'linear-gradient(-40deg, #ffffff, #e6e6e6)', cursor: 'pointer' }}>
                <div className="card-body text-center">
                  <i className="ri-map-pin-2-line fs-1 text-dark mb-3"></i>
                  <h5 className="card-title fw-bold">Convenience Features</h5>
                  <p className="card-text">
                    Find nearby vehicles, manage pick-up/drop-off, and save favorites for quick access.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-4">
              <div className="card rounded-4 p-1" style={{ background: 'linear-gradient(-40deg, #ffffff, #e6e6e6)', cursor: 'pointer' }}>
                <div className="card-body text-center">
                  <i className="ri-dashboard-line fs-1 text-dark mb-3"></i>
                  <h5 className="card-title fw-bold">Admin  Features</h5>
                  <p className="card-text">
                    Manage vehicles, bookings, pricing, and track statistics easily from the dashboard.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-4">
              <div className="card rounded-4 p-1" style={{ background: 'linear-gradient(-40deg, #ffffff, #e6e6e6)', cursor: 'pointer' }}>
                <div className="card-body text-center">
                  <i className="ri-customer-service-2-line fs-1 text-dark mb-3"></i>
                  <h5 className="card-title fw-bold">24/7 Customer Support</h5>
                  <p className="card-text">
                    Get help anytime with our responsive support team available around the clock.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-4">
              <div className="card rounded-4 p-1" style={{ background: 'linear-gradient(-40deg, #ffffff, #e6e6e6)', cursor: 'pointer' }}>
                <div className="card-body text-center ">
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

      <section className='py-5'>
        <div className="container">
          <h1 className="text-center mb-2 fw-bold">Top Brands</h1>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="pb-5"
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <div className="d-flex justify-content-center">
                  <BrandCard brand={brand} />
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-pagination"></div>
          </Swiper >
        </div >
      </section>


      {/* //Services */}
      <section className="py-2 container">
        <h1 className="text-center mb-4 fw-bold">Our Services</h1>
        <div className="row g-4">

          <div className="col-6 col-md-6 col-lg-4">
            <div className="card rounded-4 p-1" style={{ cursor: "pointer" }}>
              <div className="card-body text-center">
                <div className="icon-circle mb-3">
                  <i className="ri-roadster-fill fs-1 text-white"></i>
                </div>
                <h5 className="card-title fw-bold">Core Rental Services</h5>
                <p className="card-text">
                  Rent cars, bikes, and scooters instantly with flexible hourly,
                  daily.
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-6 col-lg-4">
            <div className="card rounded-4 p-1">
              <div className="card-body text-center">
                <div className="icon-circle mb-3" style={{ backgroundColor: "#28a745" }}>
                  <i className="ri-map-pin-2-fill fs-1 text-white"></i>
                </div>
                <h5 className="card-title fw-bold">Dedicated Pick-Up Center</h5>
                <p className="card-text">
                  Convenient pick-up and drop-off points for quick and hassle-free
                  rentals.
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-6 col-lg-4">
            <div className="card rounded-4 p-1">
              <div className="card-body text-center">
                <div className="icon-circle mb-3" style={{ backgroundColor: "#007bff" }}>
                  <i className="ri-smartphone-fill fs-1 text-white"></i>
                </div>
                <h5 className="card-title fw-bold">Tech & Mobile Services</h5>
                <p className="card-text">
                  Real-time vehicle availability, GPS tracking, and mobile app
                  integration for easy booking.
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-6 col-lg-4">
            <div className="card rounded-4 p-1">
              <div className="card-body text-center">
                <div className="icon-circle mb-3" style={{ backgroundColor: "#ffc107" }}>
                  <i className="ri-shield-check-fill fs-1 text-white"></i>
                </div>
                <h5 className="card-title fw-bold">Safety & Trust</h5>
                <p className="card-text">
                  Verified users, insurance coverage, and transparent bookings for
                  complete peace of mind.
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-6 col-lg-4">
            <div className="card rounded-4 p-1">
              <div className="card-body text-center">
                <div className="icon-circle mb-3" style={{ backgroundColor: "#17a2b8" }}>
                  <i className="ri-customer-service-2-line fs-1 text-white"></i>
                </div>
                <h5 className="card-title fw-bold">24/7 Support</h5>
                <p className="card-text pb-4">
                  Get help anytime with our responsive support team.
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-6 col-lg-4">
            <div className="card rounded-4 p-1">
              <div className="card-body text-center">
                <div className="icon-circle mb-3" style={{ backgroundColor: "#6c757d" }}>
                  <i className="ri-secure-payment-fill fs-1 text-white"></i>
                </div>
                <h5 className="card-title fw-bold">Safe Payment</h5>
                <p className="card-text">
                  Secure online payments with options like cards, UPI.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section >


      <section className='py-5 mb-3'>
        <div className='container'>

          <h1 className='text-center mb-5 fw-bold'>Renting Made Easy with 3 Easy Steps</h1>

          <div className='bg-dark p-4 rounded-4 my-4'>

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

export default Index