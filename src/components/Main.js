import React from "react"
import Product from "./Product"
import productsData from "../ProductsData"

class Main extends React.Component {

    constructor() {
        super()

        this.state = {
            products: productsData,
            comparedProducts: []
        }
    }

    handleCompareChange = (e) => {

        const productID = parseInt(e.target.dataset.productId)

        this.setState(prevState => {

            const comparedProducts = prevState.products.map(product => {
                // console.log(product)
                if (product.id === productID) {
                    // console.log(product.id, productID)
                    product.isCompared = true
                    console.log(product.isCompared)
                }
                // return product.isCompared
            })

            return comparedProducts.isCompared
        })
    }

    handleColourClick = (e) => {
        e.persist()

        const colourID = parseInt(e.target.dataset.key)
        const productID = parseInt(e.target.dataset.productId)

        this.setState(prevState => {

            const updatedProducts = prevState.products.map(updatedProduct => {
                if (updatedProduct.id === productID) {
                    const colours = updatedProduct.colours.map(updatedColour => {
                        updatedColour.default = false;
                        if (updatedColour.id === colourID) {
                            updatedColour.default = true
                        }
                        return updatedColour
                    })
                    return updatedProduct.colours = colours
                }
                return updatedProduct.colours
            })
            return updatedProducts
        })
    }

    render() {

        console.log(this.state)

        const productComponents = this.state.products.map((productData) => {
            return <Product key={productData.id} products={this.state.products} handleColourClick={this.handleColourClick} {...productData} handleCompareChange={this.handleCompareChange} />
        })

        return (
            <div className="main" >
                {productComponents}
            </div>
        )
    }

}

export default Main