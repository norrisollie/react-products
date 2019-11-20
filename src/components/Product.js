import React from "react"

function Product(props) {

    const colours = props.colours.map((productColour) => {
        return <div className="colour" key={productColour.id}>{productColour.colour}</div>
    })

    const { name, price, desc, isNewProduct } = props

    return (
        <div className="product-wrapper">
            <div className="new-product">{isNewProduct ? "NEW" : ""}</div>
            <div className="product-title">{name}</div>
            <div>{desc}</div>
            <div>{colours}</div>
            <div className="product-price">{price.toLocaleString("gb", { style: "currency", currency: "GBP" })}</div>
        </div>
    )

}

export default Product