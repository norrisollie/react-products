import React from "react"

class Product extends React.Component {

    constructor() {
        super()
    }

    render() {

        const { id, name, price, desc, isNewProduct, handleColourClick } = this.props

        const colours = this.props.colours.map((productColour) => {
            const colourForClass = productColour.colour.replace(" ", "-").toLowerCase();
            return <div className={productColour.default ? colourForClass + " colour active" : colourForClass + " colour"} key={productColour.id} data-colour={productColour.colour} data-key={productColour.id} data-product-id={id} onClick={(e) =>handleColourClick(e)}></div>
        })

        const images = this.props.colours.map((productImages) => {
            const imageSrc = productImages.images
            return <img
            className={productImages.default ? "product-image active" : "product-image"}
            key={productImages.id}
            src={imageSrc}
            alt={name}/>
        })

        return (
            <div className="product-wrapper">
                <div className="new-product">{isNewProduct ? "NEW" : ""}</div>
                <div className="product-title">{name}</div>
                <div className="product-images">{images}</div>
                <div>{desc}</div>
                <div className="colours-wrapper">{colours}</div>
                <div className="product-price">{price.toLocaleString("gb", { style: "currency", currency: "GBP" })}</div>
            </div>
        )
    }

}

export default Product