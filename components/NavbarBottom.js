import React, { PureComponent } from 'react'
import Link from "next/link";

class NavbarBottom extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <nav className="navbar fixed-bottom navbar-light bg-light border-top d-flex justify-content-around">
                    <Link href="/" className="nav-link text-center">
                        <i class="ri-home-4-fill"></i> <br /> Home
                    </Link>
                    <Link href="/explore" className="nav-link text-center">
                        <i class="ri-car-fill"></i> <br /> Explore
                    </Link>

                    <div className="text-center position-relative">
                        {/* Profile icon triggers collapse */}
                        <a
                            className="nav-link"
                            data-bs-toggle="collapse"
                            href="#profileButtons"
                            role="button"
                            aria-expanded="false"
                            aria-controls="profileButtons"
                        >
                            <i className="ri-user-3-fill"></i> <br /> Profile
                        </a>

                        <div className="collapse position-absolute bottom-100 start-50 translate-middle-x mb-2"
                            id="profileButtons"
                            style={{
                                transition: 'all 0.3s ease',
                                width: 'max-content',
                                zIndex: 1000
                            }}>

                            <div className="bg-white rounded-3 shadow-lg p-2 d-flex gap-2">
                                <Link href="/login" className="btn btn-outline-dark fw-semibold px-3">Login</Link>
                                <Link href="/signup" className="btn btn-dark text-white fw-semibold px-3">Register</Link>
                            </div>
                        </div>
                    </div>
                </nav >
            </>
        )
    }
}

export default NavbarBottom
