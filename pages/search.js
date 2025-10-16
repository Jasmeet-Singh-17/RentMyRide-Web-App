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
                <section className="bg-white text-black p-2 position-sticky border-bottom">
                    <div className="d-flex align-items-center bg-dark-subtle rounded-4 border border-dark">
                        <button
                            onClick={this.handleBack}
                            className="btn btn-link text-dark d-flex align-items-center justify-content-center text-decoration-none fs-5 px-2"
                        >
                            <i className="ri-arrow-left-line fs-4"></i>
                        </button>
                        <input type="text" placeholder="Search your vehicle"
                            className="form-control border-0 bg-transparent text-dark ms-2 rounded-4"
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