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
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <section className="text-center bg-warning text-black p-2 fixed-top position-sticky ">
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <button
                                onClick={this.handleBack}
                                className="btn btn-link text-dark d-flex align-items-center text-decoration-none fs-5 bg-warning"
                            >
                                <i className="ri-arrow-left-line fs-4 me-2"></i>
                                Explore
                            </button>
                            <div className="d-flex align-items-center gap-3">
                                <button
                                    onClick={this.handleSearchClick} className='btn btn-link bg-warning border-none text-dark'
                                >
                                    <SearchIcon size={24} className='cursor-pointer' />
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
                                >
                                    <div className="offcanvas-header">
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
                                    <div className="offcanvas-body small">
                                        <div className="d-flex gap-3 justify-content-center flex-wrap">
                                            <select className="form-select w-auto" aria-label="Vehicle">
                                                <option selected>Vehicles</option>
                                                <option value="1">Cars</option>
                                                <option value="2">Bikes</option>
                                                <option value="3">Scooters</option>
                                            </select>

                                            <select className="form-select w-auto" aria-label="Rate">
                                                <option selected>By Rate</option>
                                                <option value="1">1000 - 3000</option>
                                                <option value="2">3000 - 5000</option>
                                                <option value="3">5000 - 10000</option>
                                            </select>

                                            <select className="form-select w-auto" aria-label="Fuel Type">
                                                <option selected>Fuel Type</option>
                                                <option value="1">Petrol</option>
                                                <option value="2">Diesel</option>
                                                <option value="3">CNG</option>
                                                <option value="4">EV</option>
                                            </select>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                <section className="d-flex bg-warning text-center p-4 d-md-none border-top border-light m-2 rounded-pill ">
                    <h1 className="text-light m-auto">
                        Explore Your Favourite Vehicle to Rent
                    </h1>
                </section>

                < section className='p-1 m-auto' >
                    <h2 className='text-center mt-1'> Vehicles Available: {vehicles.length} </h2>
                    <VehicleCard vehicles={vehicles} />

                </section >

                <Footer />
            </>
        );
    }
}

export default Explore;
