import React from "react"

function Product(props) {

    const colours = props.colours.map((productColour) => {
        const colourForClass = productColour.colour.replace(" ", "-").toLowerCase();
        return <div className={colourForClass + " colour"} key={productColour.id} data-colour={productColour.colour} onClick={ () => {  handleClick()} }></div>
    })

    const { name, price, desc, isNewProduct } = props

    function handleClick() {
        console.log("clicked")
    }

    return (
        <div className="product-wrapper">
            <div className="new-product">{isNewProduct ? "NEW" : ""}</div>
            <div className="product-title">{name}</div>
            <div>{desc}</div>
            <div className="colours-wrapper">{colours}</div>
            <div className="product-price">{price.toLocaleString("gb", { style: "currency", currency: "GBP" })}</div>
        </div>
    )

}

export default Product