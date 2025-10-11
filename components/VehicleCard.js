import React, { PureComponent } from 'react';

class VehicleCard extends PureComponent {
    render() {
        const { vehicles } = this.props;

        return (
            <div className="container my-4">
                <div className="row">
                    {vehicles.map((v) => (
                        <div className="col-md-4 mb-3" key={v.id}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{v.name}</h5>
                                    <p className="card-text mb-1"><strong>Type</strong> {v.type}</p>
                                    <p className="card-text mb-1"><strong>Rate</strong> {v.rate}</p>
                                    <p className="card-text mb-1"><strong>Location:</strong> {v.location}</p>
                                    <p className="card-text mb-1"><strong>Seats</strong> {v.seats}</p>
                                    <p className="card-text mb-0"><strong> Fuel </strong>{v.fuel}</p>
                                    <div className="d-flex gap-1 mt-2">
                                        <button className="btn btn-outline-success w-50">Rent Now <i class="ri-shopping-cart-2-fill"></i></button>
                                        <button className="btn btn-outline-warning w-50">Check Availability <i class="ri-calendar-view"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default VehicleCard;
