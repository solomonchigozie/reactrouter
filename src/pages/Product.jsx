import React from 'react'
import {Link, useParams } from 'react-router-dom'

function Product() {
    const  {productId} = useParams()

    return (
        <div>
            Product ID : {productId}

        </div>
    )
    
}

export default Product