import { useRouter } from "next/router";
import vehicles from "@/data/VehicleData";
import Footer from "@/components/Footer";

export default function Vehicle() {
    const router = useRouter();
    const { id } = router.query;

    // Safely find vehicle only when `id` exists
    const vehicle = id ? vehicles.find((v) => v.id === Number(id)) : null;

    const handleBack = () => {
        router.push("/explore");
    };

    // ✅ Guard against undefined vehicle (this fixes the build/prerender error)
    if (!vehicle) {
        return (
            <>
                <section>
                    <div className="mb-3 border border-dark sticky-top bg-warning p-1 shadow-sm">
                        <button
                            onClick={handleBack}
                            className="btn btn-link text-dark d-flex align-items-center text-decoration-none fs-3 w-100"
                        >
                            <i className="ri-arrow-left-line fs-3 me-2"></i> Back
                        </button>
                    </div>
                </section>

                <section className="container my-5">
                    <p className="fs-5 mb-0">
                        Vehicle not found or still loading.
                    </p>
                </section>

                <Footer />
            </>
        );
    }

    return (
        <>
            <section>
                <div className="mb-3 border border-dark sticky-top bg-warning p-1 shadow-sm">
                    <button
                        onClick={handleBack}
                        className="btn btn-link text-dark d-flex align-items-center text-decoration-none fs-3 w-100"
                    >
                        <i className="ri-arrow-left-line fs-3 me-2"></i> {vehicle.name}
                    </button>
                </div>
            </section>

            <section className="d-flex justify-content-center mb-3">
                <div className="card" style={{ width: "20rem" }}>
                    <img
                        src={vehicle.src}
                        className="card-img img-fluid"
                        alt={vehicle.name}
                    />
                </div>
            </section>

            <section className="container">
                <div className="row g-3 mb-2">
                    <div className="col-12">
                        <div className="card text-center p-3 bg-transparent border-warning shadow-sm">
                            <h5 className="fw-bold mb-0">{vehicle.name}</h5>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <div className="d-flex align-items-center my-3 container">
                    <i className="ri-information-line fs-5 text-warning me-2"></i>
                    <span className="fw-bold fs-5">Overview</span>
                    <div className="flex-grow-1 border-bottom border-2 border-warning ms-3"></div>
                </div>
            </div>

            <section className="container">
                <div className="row g-3 mb-4">
                    <div className="col-6">
                        <div className="card text-center p-3 shadow-sm h-100">
                            <i className="ri-money-rupee-circle-fill fs-2 text-warning mb-2"></i>
                            <h5 className="mb-0">
                                {vehicle.currency}
                                {vehicle.rate}
                                {vehicle.rateUnit}
                            </h5>
                            <small className="text-muted">Per Day</small>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="card text-center p-3 shadow-sm h-100">
                            <i className="ri-gas-station-fill fs-2 text-warning mb-2"></i>
                            <h5 className="mb-0">{vehicle.fuel}</h5>
                            <small className="text-muted">Fuel Type</small>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="card text-center p-3 shadow-sm h-100">
                            <i className="ri-user-line fs-2 text-warning mb-2"></i>
                            <h5 className="mb-0">{vehicle.seats} Seater</h5>
                            <small className="text-muted">Capacity</small>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="card text-center p-3 shadow-sm h-100">
                            <i className="ri-map-pin-2-line fs-2 text-warning mb-2"></i>
                            <h5 className="mb-0">{vehicle.location}</h5>
                            <small className="text-muted">Location</small>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <div className="d-flex align-items-center my-3 container">
                    <i className="ri-sparkling-2-line fs-5 text-warning me-2"></i>
                    <span className="fw-bold fs-5">Features & Amenities</span>
                    <div className="flex-grow-1 border-bottom border-2 border-warning ms-3"></div>
                </div>
            </div>

            <section className="container">
                <div className="card">
                    <div className="card-body">
                        <div className="row g-2">
                            {vehicle.features?.map((feature, index) => (
                                <div key={index} className="col-12">
                                    <div className="d-flex align-items-center p-2">
                                        <i className="ri-check-double-line text-success fs-5 me-3"></i>
                                        <span>{feature}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mb-5 p-2">
                <div className="d-flex align-items-center my-3">
                    <i className="ri-file-list-3-line fs-5 text-warning me-2"></i>
                    <span className="fw-bold fs-5">Enquire</span>
                    <div className="flex-grow-1 border-bottom border-2 border-warning ms-3"></div>
                </div>

                <div className="d-grid gap-2 mb-5 container">
                    <button className="btn btn-warning btn-lg fw-bold">
                        <i className="ri-calendar-check-line me-2"></i>
                        Rent Now
                    </button>
                </div>
            </section>

            <Footer />
        </>
    );
}