import React, { useState } from "react";

const VehicleCard = ({ vehicles }) => {
    const [selectedVehicle, setSelectedVehicle] = useState(null);

    const openModal = (vehicle) => {
        setSelectedVehicle(vehicle);
    };

    const closeModal = () => {
        setSelectedVehicle(null);
    };

    return (
        <>
            {/* Vehicle Cards */}
            <div className="container my-5">
                <div className="row g-3">
                    {vehicles.map((v) => (
                        <div
                            className="col-md-4 mb-1"
                            key={v.id}
                            onClick={() => openModal(v)}
                            style={{ cursor: "pointer" }}
                        >
                            <div className="card rounded-4">
                                <div className="card-body d-flex align-items-center justify-content-between">
                                    <div className="d-flex justify-content-center gap-3">
                                        <img
                                            src={v.src}
                                            alt={v.name}
                                            width={50}
                                            className="rounded-circle"
                                        />
                                        <div>
                                            <h5 className="card-title mb-1 fw-semibold">{v.name}</h5>
                                            <p className="card-text text-muted mb-0">
                                                <strong>Type: </strong> {v.type}
                                            </p>
                                        </div>
                                    </div>
                                    <i className="ri-bookmark-3-fill fs-5 text-warning"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Simple Modal */}
            {selectedVehicle && (
                <div
                    className="modal show d-block"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                    onClick={closeModal}
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content rounded-4">
                            <div className="modal-header">
                                <h5 className="modal-title fw-bold">{selectedVehicle.name}</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <div className="text-center mb-3">
                                    <img
                                        src={selectedVehicle.src}
                                        alt={selectedVehicle.name}
                                        className="img-fluid rounded"
                                        style={{ maxHeight: "200px" }}
                                    />
                                </div>

                                <div className="px-2">
                                    <div className="d-flex justify-content-between py-2">
                                        <span className="fw-semibold text-secondary">Type:</span>
                                        <span>{selectedVehicle.type}</span>
                                    </div>

                                    <div className="d-flex justify-content-between py-2">
                                        <span className="fw-semibold text-secondary">Fuel:</span>
                                        <span>{selectedVehicle.fuel}</span>
                                    </div>

                                    <div className="d-flex justify-content-between py-2">
                                        <span className="fw-semibold text-secondary">Seats:</span>
                                        <span>{selectedVehicle.seats}</span>
                                    </div>

                                    <div className="d-flex justify-content-between py-2">
                                        <span className="fw-semibold text-secondary">Location:</span>
                                        <span>{selectedVehicle.location}</span>
                                    </div>

                                    <div className="d-flex justify-content-between py-2">
                                        <span className="fw-semibold text-secondary">Rate:</span>
                                        <span className="text-warning fw-bold">{selectedVehicle.rate}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-warning w-100">Rent Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default VehicleCard;