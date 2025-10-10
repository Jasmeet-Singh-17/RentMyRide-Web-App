import React, { PureComponent } from 'react';

class VehicleCard extends PureComponent {
    render() {
        const { vehicles } = this.props;

        return (
            <div className="container my-4">
                <div className="row">
                    {vehicles.map((v) => (
                        <div className="col-md-4 mb-3" key={v.id}>
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{v.name}</h5>
                                    <p className="card-text mb-1"><strong>Type:</strong> {v.type}</p>
                                    <p className="card-text mb-1"><strong>Rate:</strong> {v.rate}</p>
                                    <p className="card-text mb-1"><strong>Location:</strong> {v.location}</p>
                                    {v.seats && <p className="card-text mb-1">Seats: {v.seats}</p>}
                                    {v.fuel && <p className="card-text mb-0">Fuel: {v.fuel}</p>}
                                    <div className="d-flex flex-column  gap-2">
                                        <button className="btn btn-success w-100">Rent Now</button>
                                        <button className="btn btn-warning w-100">Check Availability</button>
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
