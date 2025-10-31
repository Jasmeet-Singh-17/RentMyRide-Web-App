"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import vehicles from "@/data/VehicleData";

const VehicleCard = () => {
    const router = useRouter()

    const [selectedVehicle, setSelectedVehicle] = useState(null);

    const openPage = (vehicle) => {
        setSelectedVehicle(vehicle);
        router.push(`/vehicle/${vehicle.id}`);
        console.log(vehicle.name);
    }

    return (
        <>
            {/* Vehicle Cards */}
            <div className="container my-5">
                <div className="row g-3">
                    {vehicles.map((v) => (
                        <div
                            className="col-md-4 mb-1"
                            key={v.id}
                            style={{ cursor: "pointer" }}
                        >
                            <div className="card rounded-4" onClick={() => { openPage(v) }}>
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
        </>
    );
};

export default VehicleCard;