"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ListFilter, Search as SearchIcon } from "lucide-react";
import VehicleCard from "@/components/VehicleCard";
import vehicles from "@/data/VehicleData";
import Footer from "@/components/Footer";

const Explore = () => {
    const router = useRouter()

    const [activeFilter, setActiveFilter] = useState("vehicle");

    const setFilter = (e) => {
        setActiveFilter(e);
    };

    const handleBack = () => {
        router.push('/index')
    };

    const handleSearchClick = () => {
        router.push("/search");
    };

    return (
        <>
            <section className="text-center bg-warning text-black p-2 p-relative">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <button
                        onClick={handleBack}
                        className="btn btn-link text-dark d-flex align-items-center text-decoration-none fs-5 bg-warning"
                    >
                        <i className="ri-arrow-left-line fs-4 me-2"></i>
                        Explore
                    </button>

                    <div className="d-flex justify-content-evenly align-items-center m-1">
                        <button
                            onClick={handleSearchClick}
                            className="btn btn-link bg-warning border-none text-dark"
                        >
                            <SearchIcon size={28} className="cursor-pointer" />
                        </button>

                        {/* Filter Button */}
                        <button
                            className="btn btn-dark"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasBottom"
                            aria-controls="offcanvasBottom"
                        >
                            <ListFilter size={24} />
                        </button>

                        {/* Offcanvas Filter Panel */}
                        <div
                            className="offcanvas offcanvas-bottom"
                            tabIndex={-1}
                            id="offcanvasBottom"
                            aria-labelledby="offcanvasBottomLabel"
                            style={{ height: "45vh", maxHeight: "80vh" }}
                        >
                            <div className="offcanvas-header border-bottom">
                                <h5 className="offcanvas-title" id="offcanvasBottomLabel">
                                    Apply Filters
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                />
                            </div>

                            <div className="offcanvas-body">
                                <div className="d-flex flex-column h-100">
                                    <div className="d-flex flex-grow-1">
                                        <div className="d-flex flex-column p-3 gap-4">
                                            <label
                                                onClick={() => setFilter("vehicle")}
                                                className={`fw-semibold p-2 ${activeFilter === "vehicle" ? "border-dark rounded-4 bg-warning p-2" : ""}`}
                                            >
                                                Vehicle Type
                                            </label>

                                            <label
                                                onClick={() => setFilter("fuel")}
                                                className={`fw-semibold p-2 ${activeFilter === "fuel" ? "border-dark rounded-4 bg-warning p-2" : ""}`}
                                            >
                                                Fuel Type
                                            </label>

                                            <label
                                                onClick={() => setFilter("price")}
                                                className={`fw-semibold p-2 ${activeFilter === "price" ? "border-dark rounded-4 bg-warning p-2" : ""}`}
                                            >
                                                Price
                                            </label>
                                        </div>

                                        <div className="border-start mx-3"></div>

                                        <div className="d-flex flex-column flex-grow-1 p-3 gap-4">
                                            {activeFilter === "vehicle" && (
                                                <div className="d-flex flex-column gap-3 align-items-center justify-content-center p-2">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value="car"
                                                            id="carCheck"
                                                        />
                                                        <label className="form-check-label ms-2" htmlFor="carCheck">
                                                            Cars
                                                        </label>
                                                    </div>

                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value="bike"
                                                            id="bikeCheck"
                                                        />
                                                        <label className="form-check-label ms-2" htmlFor="bikeCheck">
                                                            Bikes
                                                        </label>
                                                    </div>

                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value="scooter"
                                                            id="scooterCheck"
                                                        />
                                                        <label className="form-check-label ms-2" htmlFor="scooterCheck">
                                                            Scooters
                                                        </label>
                                                    </div>
                                                </div>
                                            )}

                                            {activeFilter === "fuel" && (
                                                <div className="d-flex flex-column gap-3 align-items-center justify-content-center p-2">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value="petrol"
                                                            id="petrolCheck"
                                                        />
                                                        <label className="form-check-label ms-2" htmlFor="petrolCheck">
                                                            Petrol
                                                        </label>
                                                    </div>

                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value="diesel"
                                                            id="dieselCheck"
                                                        />
                                                        <label className="form-check-label ms-2" htmlFor="dieselCheck">
                                                            Diesel
                                                        </label>
                                                    </div>

                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value="electric"
                                                            id="electricCheck"
                                                        />
                                                        <label className="form-check-label ms-2" htmlFor="electricCheck">
                                                            Electric
                                                        </label>
                                                    </div>

                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value="hybrid"
                                                            id="hybridCheck"
                                                        />
                                                        <label className="form-check-label ms-2" htmlFor="hybridCheck">
                                                            Hybrid
                                                        </label>
                                                    </div>
                                                </div>
                                            )}

                                            {activeFilter === "price" && (
                                                <div className="d-flex flex-column gap-3 align-items-center justify-content-center p-2">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value="low"
                                                            id="lowCheck"
                                                        />
                                                        <label className="form-check-label ms-2" htmlFor="lowCheck">
                                                            Below ₹50,000
                                                        </label>
                                                    </div>

                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value="mid"
                                                            id="midCheck"
                                                        />
                                                        <label className="form-check-label ms-2" htmlFor="midCheck">
                                                            Below ₹1,00,000
                                                        </label>
                                                    </div>

                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value="high"
                                                            id="highCheck"
                                                        />
                                                        <label className="form-check-label ms-2" htmlFor="highCheck">
                                                            Above ₹1,00,000
                                                        </label>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="d-flex gap-2 p-3 border-top mt-auto">
                                        <button
                                            className="btn btn-outline-secondary w-50"
                                            data-bs-dismiss="offcanvas"
                                            type="button"
                                        >
                                            Clear All
                                        </button>
                                        <button className="btn btn-primary w-50" type="button">
                                            Apply Filters
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mt-4 mb-5">
                <h1 className="text-dark text-center fs-4 d-md-none mb-2">
                    Explore Your Favourite Vehicle to Rent
                </h1>
                <h5 className="text-center text-muted mb-3">
                    Vehicles Available: {vehicles.length}
                </h5>

                <div className="row cols-1 g-3">
                    <VehicleCard />
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Explore;
