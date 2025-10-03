import React, { PureComponent } from 'react';
import VehicleCard from '@/components/VehicleCard';
import vehicles from '@/data/vehicleData';
import PlaceholderCard from '@/components/placeholderCard';
import NavbarWrapper from '@/components/NavbarWrapper';
import Footer from '@/components/Footer';

class Explore extends PureComponent {
    render() {
        return (
            <>
                <NavbarWrapper />

                {/* Filter Section */}
                <section className='bg-warning text-center p-4 mb-4'>
                    <h1 className='text-light'> Explore Your Favourite Vehicle to Rent </h1>
                    <p className='text-muted'> Filter your best vehicle according to the Budget </p>

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

                        <button type='submit' className='btn btn-dark rounded-4 px-3 text-light'>
                            Submit
                        </button>
                    </div>
                </section>

                {/* Vehicle Cards Section */}
                <section className='p-4 m-4'>
                    <h2> Vehicles Available: {vehicles.length} </h2>
                    <VehicleCard vehicles={vehicles} />
                    <PlaceholderCard />


                </section>

                <Footer />
            </>
        );
    }
}

export default Explore;
