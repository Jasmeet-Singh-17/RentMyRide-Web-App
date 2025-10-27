import React, { PureComponent } from 'react';

class SearchPage extends PureComponent {
    handleBack = () => {
        window.history.back();
    };
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <>
                <section className="d-flex align-items-center gap-2 bg-white text-black p-2 position-sticky top-0 border-bottom">
                    <div className="d-flex align-items-center flex-grow-1 bg-dark-subtle rounded-4 px-3 py-2">
                        <i className="ri-search-line text-secondary me-2"></i>
                        <input
                            type="search"
                            placeholder="Search your vehicle"
                            className="border-0 bg-transparent text-dark w-100 outline-0 "
                            style={{ outline: 'none' }}
                        />
                    </div>
                </section>

                <section className="mt-2 pt-2 container">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2 className="fw-bold text-dark fs-4 mb-0">Recently Rented</h2>
                    </div>

                    <div className="list-group  rounded-4">
                        <div className="list-group-item d-flex justify-content-between align-items-center bg-light-subtle">
                            <div>
                                <h5 className="mb-1 text-dark">Toyota Fortuner</h5>
                                <small className="text-muted">SUV • 7 Seater</small>
                            </div>
                        </div>

                        <div className="list-group-item d-flex justify-content-between align-items-center bg-light">
                            <div>
                                <h5 className="mb-1 text-dark">Honda City</h5>
                                <small className="text-muted">Sedan • 5 Seater</small>
                            </div>

                        </div>

                        <div className="list-group-item d-flex justify-content-between align-items-center bg-light-subtle">
                            <div>
                                <h5 className="mb-1 text-dark">Jeep Compass</h5>
                                <small className="text-muted">SUV • 5 Seater</small>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        );
    }
}

export default SearchPage;