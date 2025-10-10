import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { PureComponent } from 'react'
import { CircleUserRound } from 'lucide-react'

class Profile extends PureComponent {
    render() {
        return (
            <ProfileContent />
        )
    }
}

function ProfileContent() {
    const router = useRouter()

    return (
        <div className="container py-5">
            {/* Back Arrow */}
            <div className="mb-3">
                <button
                    onClick={() => router.back()}
                    className="btn btn-link text-dark d-flex align-items-center text-decoration-none"
                >
                    <i className="ri-arrow-left-line fs-3 me-2"></i> Back
                </button>

            </div>

            {/* Profile Card */}
            <div className="card text-center p-4 mb-5 shadow-sm rounded-4">
                <div className="card-body">
                    {/* Avatar */}
                    <div className="d-flex justify-content-center mb-3">
                        <div
                            className="rounded-circle bg-white d-flex align-items-center justify-content-center shadow"
                            style={{ width: '120px', height: '120px' }}
                        >
                            <CircleUserRound size={80} className="text-dark" />
                        </div>
                    </div>

                    <h4 className="card-title fw-bold">Your Profile</h4>
                    <h6 className="card-subtitle mb-3 text-muted">
                        Log in to view your complete profile
                    </h6>

                    <Link href="/login" className="btn btn-dark btn-lg w-50 rounded-pill shadow">
                        Login
                    </Link>
                </div>
            </div>

            <div className="row text-center g-4">
                <div className="col-6 col-md-6">
                    <div className="card p-4 rounded-4">
                        <i className="ri-shopping-basket-2-fill fs-2 text-dark"></i>
                        <h5 className="fw-bold">Your Orders</h5>
                    </div>
                </div>

                <div className="col-6 col-md-6">
                    <div className="card p-4 rounded-4 ">
                        <i className="ri-settings-5-fill fs-2 text-dark"></i>
                        <h5 className="fw-bold">Settings</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
