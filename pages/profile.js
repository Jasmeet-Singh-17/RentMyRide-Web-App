import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { CircleUserRound } from 'lucide-react'

export default function profile() {
    const router = useRouter();
    const handleBack = () => {
        router.push('/index')
    }
    return (
        <>
            <div className="mb-3 border border-dark sticky-top bg-warning p-1">
                <button
                    onClick={handleBack}
                    className="btn btn-link text-dark d-flex align-items-center text-decoration-none fs-3 w-100 "
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
                <div className="d-flex flex-column gap-3 justify-content-center align-items-center py-2">

                    <div className="card border-none rounded-4 cursor-pointer p-2 w-100 ">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-3">
                                <i className="ri-shopping-basket-2-fill fs-2 text-warning"></i>
                                <h5 className="fw-semibold mb-0">Your Orders</h5>
                            </div>
                            <i className="ri-arrow-right-s-line fs-4 text-muted"></i>
                        </div>
                    </div>

                    <div className="card border-none rounded-4 cursor-pointer p-2 w-100 ">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-3">
                                <i className="ri-settings-5-fill fs-2 text-dark"></i>
                                <h5 className="fw-semibold mb-0">Settings</h5>
                            </div>
                            <i className="ri-arrow-right-s-line fs-4 text-muted"></i>
                        </div>
                    </div>

                    <div className="card border-none rounded-4 cursor-pointer p-2 w-100 ">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-3">
                                <i className="ri-wallet-fill fs-2 text-success"></i>
                                <h5 className="fw-semibold mb-0">Your Wallet</h5>
                            </div>
                            <i className="ri-arrow-right-s-line fs-4 text-muted"></i>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

