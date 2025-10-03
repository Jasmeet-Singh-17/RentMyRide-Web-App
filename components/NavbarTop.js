import React, { PureComponent } from 'react'
import Link from 'next/link'

class NavbarTop extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <nav className="navbar fixed-top navbar-light bg-warning border-top d-flex justify-content-center">
                    <Link href="/" className="navbar-brand text-dark fw-bold fs-4">
                        RentMyRide <i className="ri-riding-fill"></i>
                    </Link>
                </nav>
            </>
        )
    }
}

export default NavbarTop