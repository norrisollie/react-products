import React from "react"
import Product from "./Product"
import productsData from "../ProductsData"

function Main() {

    const productComponents = productsData.map((productData) => {
        return <Product key={productData.id} {...productData} />
    })

    return (
        <div className="main">
            {productComponents}
        </div>
    )

}

export default Main