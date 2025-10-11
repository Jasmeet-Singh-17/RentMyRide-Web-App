import React, { PureComponent } from 'react';
import { Search } from 'lucide-react';

class SearchPage extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <section className="text-center bg-white text-black py-2 fixed-top postion-sticky ">
                    <div className="container">
                        <div className="d-flex align-items-center p-2 ">
                            <Search className=" fs-5 ms-2" />
                            <input type="text" placeholder="Search Your Vehicle"
                                className="form-control border-0 ms-2 text-muted" />
                        </div>
                    </div>
                </section>

                <section className="mt-4 pt-5 container">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2 className="fw-bold text-dark">Recently Rented</h2>
                    </div>

                    <div className="d-flex gap-2 justify-content-center ">
                        <button className="btn btn-outline-dark ">Fortuner</button>
                        <button className="btn btn-outline-dark ">Honda City</button>
                        <button className="btn btn-outline-dark ">Jeep</button>
                        <button className="btn btn-outline-dark ">Innova</button>
                        <button className="btn btn-outline-dark ">BMW</button>
                    </div>
                </section>


            </>
        )
    }
}

export default SearchPage