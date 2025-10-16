import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { PureComponent } from 'react'
import { CircleUserRound } from 'lucide-react'

class Profile extends PureComponent {
    handleBack = () => {
        window.history.back();
    };
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <>
                <div className="mb-3 border border-dark p-fixed-top bg-warning py-1">
                    <button
                        onClick={this.handleBack}
                        className="btn btn-link text-dark d-flex align-items-center text-decoration-none fs-3  w-100 "
                    >
                        <i className="ri-arrow-left-line fs-3 me-2"></i> My Account
                    </button>

                </div>

                <div className="container ">
                    <div className="card text-center p-4 mb-4 rounded-4">
                        <div className="card-body">
                            <div className="d-flex justify-content-center mb-3">
                                <div
                                    className="rounded-circle bg-white d-flex align-items-center justify-content-center "
                                    style={{ width: '120px', height: '120px' }}
                                >
                                    <CircleUserRound size={80} className="text-dark" />
                                </div>
                            </div>

                            <h4 className="card-title fw-bold">Your Profile</h4>
                            <h6 className="card-subtitle mb-3 text-muted">
                                Log in to view your complete profile
                            </h6>

                            <Link href="/login" className="btn btn-warning btn-lg w-50 rounded-pill ">
                                Login
                            </Link>
                        </div>
                    </div>

                    <div className="d-flex row text-center justify-content-evenly align-itmes-center">

                        <div className="col-4 col-sm-4">
                            <div className="card rounded-4 cursor-pointer h-100 p-2 bg-warning">
                                <i className="ri-shopping-basket-2-fill fs-2"></i>
                                <h5 className="fw-bold mt-2">Your Orders</h5>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="card rounded-4 cursor-pointer h-100 p-2 bg-light">
                                <i className="ri-settings-5-fill fs-2"></i>
                                <h5 className="fw-bold mt-2">Settings</h5>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="card rounded-4 cursor-pointer h-100 p-2 bg-warning">
                                <i className="ri-wallet-fill fs-2"></i>
                                <h5 className="fw-bold mt-2">Your Wallet</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default Profile