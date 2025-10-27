import React, { PureComponent } from 'react'

class BrandCard extends PureComponent {
    render() {
        const { brand } = this.props;
        return (
            <>

                <div className="text-center">
                    <img
                        src={brand.src}
                        alt={brand.name}
                        width={100}
                        className="img-fluid"
                    />
                    <h4 className="m-1">{brand.name}</h4>
                </div>
            </>
        );
    }
}

export default BrandCard