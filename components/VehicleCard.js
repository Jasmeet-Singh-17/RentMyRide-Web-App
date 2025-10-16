import React, { PureComponent } from "react";

class VehicleCard extends PureComponent {
    state = {
        selectedVehicle: null,
    };

    handleCardClick = (vehicle) => {
        this.setState({ selectedVehicle: vehicle });
    };

    closeModal = () => {
        this.setState({ selectedVehicle: null });
    };

    render() {
        const { vehicles } = this.props;
        const { selectedVehicle } = this.state;

        return (
            <>
                <div className="container my-4">
                    <div className="row g-3">
                        {vehicles.map((v) => (
                            <div
                                className="col-md-4 mb-1"
                                key={v.id}
                                onClick={() => this.handleCardClick(v)}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="card rounded-4 shadow-sm">
                                    <div className="card-body d-flex justify-content-between">
                                        <div>
                                            <h5 className="card-title mb-1">{v.name}</h5>
                                            <p className="card-text text-muted small mb-0">
                                                <strong>Type:</strong> {v.type}
                                            </p>
                                        </div>
                                        <i className="ri-bookmark-3-fill fs-5 text-warning"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal */}
                {selectedVehicle && (
                    <div
                        className="modal show fade d-block"
                        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                    >
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content rounded-4">
                                <div className="modal-header">
                                    <h5 className="modal-title">{selectedVehicle.name}</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={this.closeModal}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <p><strong>Type:</strong> {selectedVehicle.type}</p>
                                    <p><strong>Fuel:</strong> {selectedVehicle.fuel}</p>
                                    <p><strong>Seats:</strong> {selectedVehicle.seats}</p>
                                    <p><strong>Rate:</strong> {selectedVehicle.rate}</p>
                                    <p><strong>Location:</strong> {selectedVehicle.location}</p>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        className="btn btn-secondary"
                                        onClick={this.closeModal}
                                    >
                                        Close
                                    </button>
                                    <button className="btn btn-warning text-dark">Rent Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    }
}

export default VehicleCard;
