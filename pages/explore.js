"use client";
import React, { PureComponent } from 'react';
import { ListFilter } from 'lucide-react';
import { Search as SearchIcon } from "lucide-react";
import VehicleCard from '@/components/VehicleCard';
import vehicles from '@/data/VehicleData';
import Footer from '@/components/Footer';

class Explore extends PureComponent {
    handleBack = () => {
        window.history.back();
    };

    handleSearchClick = () => {
        window.location.href = "/search";
    };


    render() {
        return (
            <>
                <section className="text-center bg-warning text-black p-2 sticky-top">
                    <div>
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <button
                                onClick={this.handleBack}
                                className="btn btn-link text-dark d-flex align-items-center text-decoration-none fs-5 bg-warning"
                            >
                                <i className="ri-arrow-left-line fs-4 me-2"></i>
                                Explore
                            </button>
                            <div className="d-flex justify-content-evenly align-items-center m-1">
                                <button
                                    onClick={this.handleSearchClick} className='btn btn-link bg-warning border-none text-dark'
                                >
                                    <SearchIcon size={28} className='cursor-pointer' />
                                </button>
                                <button className="btn btn-dark"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasBottom"
                                    aria-controls="offcanvasBottom">
                                    <ListFilter size={24} />
                                </button>
                                <div
                                    className="offcanvas offcanvas-bottom"
                                    tabIndex={-1}
                                    id="offcanvasBottom"
                                    aria-labelledby="offcanvasBottomLabel"
                                    style={{ height: '45vh', maxHeight: '80vh' }}

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
                                        <div className="d-flex flex-column gap-3">
                                            <select className="form-select form-select-lg" aria-label="Vehicle">
                                                <option value="">All Vehicles</option>
                                                <option value="1">Cars</option>
                                                <option value="2">Bikes</option>
                                                <option value="3">Scooters</option>
                                            </select>

                                            <select className="form-select form-select-lg" aria-label="Rate">
                                                <option value="">Any Price</option>
                                                <option value="1">1000 - 3000</option>
                                                <option value="2">3000 - 5000</option>
                                                <option value="3">5000 - 10000</option>
                                            </select>

                                            <select className="form-select form-select-lg" aria-label="Fuel Type">
                                                <option value="">All Fuel Types</option>
                                                <option value="1">Petrol</option>
                                                <option value="2">Diesel</option>
                                                <option value="3">CNG</option>
                                                <option value="4">EV</option>
                                            </select>
                                        </div>
                                        <div className='d-flex m-3 gap-2'>
                                            <button className='btn btn-outline-secondary w-50' data-bs-dismiss="offcanvas"
                                            >
                                                Clear All
                                            </button>
                                            <button className='btn btn-primary w-50'>
                                                Apply Filters
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div >
                </section >

                <section className="container mt-4 mb-5">
                    <h1 className="text-dark text-center fs-4 d-md-none mb-2">
                        Explore Your Favourite Vehicle to Rent
                    </h1>
                    <h5 className="text-center text-muted mb-3">
                        Vehicles Available: {vehicles.length}
                    </h5>

                    <div className="row cols-1 g-3">
                        <VehicleCard vehicles={vehicles} />
                    </div>
                </section >

                <Footer />
            </>
        );
    }
}

export default Explore;
