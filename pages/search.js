import React from "react";
import Footer from "@/components/Footer";

const SearchPage = () => {

    const recentSearches = [
        { name: "Toyota Fortuner", type: "SUV", src: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Honda City", type: "Sedan", src: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Mahindra Thar", type: "SUV", src: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800" },
    ];

    return (
        <>
            {/* Search Bar */}
            <section className="d-flex align-items-center gap-2 bg-white text-black p-2 position-sticky top-0 border-bottom"> <div className="d-flex align-items-center flex-grow-1 bg-dark-subtle rounded-3 px-3 py-2">
                <i className="ri-search-line text-secondary me-2"></i>
                <input type="search"
                    placeholder="Search your vehicle"
                    className="border-0 bg-transparent text-dark w-100 outline-0 "
                    style={{ outline: 'none' }} />
            </div>
            </section>

            {/* Content */}
            <div className="container mt-2">
                <div className="d-flex align-items-center my-2 ">
                    <div className="flex-grow-1 border-bottom border-2 ms-3"></div>
                    <span className="text-secondary text-uppercase fw-semibold ms-3"> Recently Recented
                    </span>
                    <div className="flex-grow-1 border-bottom border-2 ms-3"></div>
                </div>

                <section>
                    <div className="row">
                        <div className="col-md-6">
                            {recentSearches.map((item) => (
                                <div
                                    className="d-flex align-items-center mb-4 px-2"
                                    style={{ cursor: "pointer" }}
                                >
                                    <img
                                        src={item.src}
                                        alt={item.name}
                                        width="70"
                                        className="img-fluid me-3 rounded-circle"
                                    />
                                    <div>
                                        <h5 className="mb-0">{item.name}</h5>
                                        <small className="text-muted">{item.type}</small>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
};

export default SearchPage;
