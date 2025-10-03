import React, { PureComponent } from 'react'
import Link from 'next/link';

class NavbarWrapper extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                {/* Mobile Top Navbar */}
                <nav className="navbar fixed-top navbar-light bg-warning border-bottom d-flex d-md-none justify-content-center">
                    <Link href="/" className="navbar-brand text-dark fw-bold fs-4">
                        RentMyRide <i className="ri-riding-fill"></i>
                    </Link>
                </nav>

                {/* Mobile Bottom Navbar */}
                <nav className="navbar fixed-bottom navbar-light bg-light border-top d-flex justify-content-around d-md-none">
                    <Link href="/" className="nav-link text-center">
                        <i className="ri-home-4-fill"></i> <br /> Home
                    </Link>
                    <Link href="/explore" className="nav-link text-center">
                        <i className="ri-car-fill"></i> <br /> Explore
                    </Link>
                    <Link href="/profile" className="nav-link text-center">
                        <i className="ri-user-3-fill"></i> <br /> Profile
                    </Link>
                </nav>

                {/* Desktop / Tablet Navbar */}
                <nav className="navbar navbar-expand-md navbar-light bg-warning d-flex justify-content-center">
                    <div className="container">
                        <Link href="/" className="navbar-brand text-dark fw-bold fs-4">
                            RentMyRide <i className="ri-riding-fill"></i>
                        </Link>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto gap-3">
                                <li className="nav-item">
                                    <Link href="/" className="nav-link custom-nav-link">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/explore" className="nav-link custom-nav-link">
                                        Explore
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/contact" className="nav-link custom-nav-link">
                                        Contact
                                    </Link>
                                </li>
                            </ul>

                            <div className="d-flex gap-2 ms-lg-3 mt-3 mt-lg-0">
                                <Link href="/login" className="btn btn-outline-dark fw-semibold px-3">
                                    Login
                                </Link>
                                <Link href="/signup" className="btn btn-dark text-white fw-semibold px-3">
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>


            </>
        );
    };
}

export default NavbarWrapper