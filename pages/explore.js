import React, { PureComponent } from 'react';
import { ListFilter, Search } from 'lucide-react';
import VehicleCard from '@/components/VehicleCard';
import vehicles from '@/data/VehicleData';
import Header from '@/components/Header';
import PlaceholderCard from '@/components/placeholderCard';
import Footer from '@/components/Footer';

class Explore extends PureComponent {
    render() {
        return (
            <>
                {/* <Header /> */}
                {/* Filter Section */}
                <section className='d-flex bg-warning text-center p-4  d-md-none'>
                    <h1 className='text-light'> Explore Your Favourite Vehicle to Rent </h1>
                </section>

                <section className="text-center bg-white text-black py-3 fixed-top position-sticky">
                    <div className="d-flex justify-content-center ">
                        <div className="d-flex justify-content-center align-items-center gap-2 bg-light py-2 rounded-pill px-3" style={{ width: '80%' }}>
                            <Search className="text-muted" />
                            <input
                                type="text" placeholder=" Search Your Vehicle " className="border-0 bg-light w-100"
                            />
                        </div>
                        <div className='py-2 px-3'>
                            <ListFilter />
                        </div>
                    </div>
                </section>

                {/* <div className="d-flex gap-3 justify-content-center flex-wrap">
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

                </div> */}


                {/* Vehicle Cards Section */}
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
