import React, { PureComponent } from 'react'
import Image from "next/image";

class BrandCard extends PureComponent {
    render() {
        const { brand } = this.props;
        return (
            <>

                <div className="text-center">
                    <Image
                        src={brand.src}
                        alt={brand.name}
                        width={100}
                        height={100}
                        className="rounded-circle"
                    />
                    <h4 className="m-1">{brand.name}</h4>
                </div>
            </>
        );
    }
}

export default BrandCard