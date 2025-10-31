import React from 'react';
import { useRouter } from 'next/navigation';

const SearchPage = () => {
    const router = useRouter();
    handleBack = () => {
        router.push('/index')
    };

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
                <div className="d-flex align-items-center my-2 ">
                    <div className="flex-grow-1 border-bottom border-2 ms-3"></div>
                    <span className="fw-bold fs-5"> Recently Recented</span>
                    <div className="flex-grow-1 border-bottom border-2 ms-3"></div>
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

export default SearchPage;