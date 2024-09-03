import React from 'react'
import { useParams } from "react-router-dom";

const ProductSingle = () => {
    const { productId } = useParams()

    return (
        <div>ProductSingle {productId}</div>
    )
}

export default ProductSingle