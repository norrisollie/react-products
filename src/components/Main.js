import React from "react"
import Product from "./Product"
import productsData from "../ProductsData"
import ComparedProducts from "./ComparedProducts"

class Main extends React.Component {

    constructor() {
        super()

        this.state = {
            products: productsData,
            numberCompared: 0
        }
    }

    handleCompareChange = (e) => {
        e.persist()

        const productID = parseInt(e.target.dataset.productId)

        this.setState(prevState => {
            prevState.products.map((updatedComparedProduct) => {
                if (updatedComparedProduct.id === productID) {
                    updatedComparedProduct.compared.map((updated) => {
                        updated.isProductCompared = !updated.isProductCompared
                    })
                }
            })
            return prevState
        })
    }

    handleColourClick = (e) => {
        e.persist()

        const colourID = parseInt(e.target.dataset.key)
        const productID = parseInt(e.target.dataset.productId)

        this.setState(prevState => {

            prevState.products.map((updatedProduct) => {
                if (updatedProduct.id === productID) {
                    updatedProduct.colours.map((colour) => {
                        colour.default = false
                        if (colour.id === colourID) {
                            colour.default = true
                        }
                    })
                }
            })
            return prevState
        })
    }

    render() {

        console.log(this.state)

        const productComponents = this.state.products.map((productData) => {
            return <Product key={productData.id} products={this.state.products} handleColourClick={this.handleColourClick} {...productData} handleCompareChange={this.handleCompareChange} />
        })

        return (
            <div className="main" >
                <ComparedProducts numberCompared={this.state.numberCompared} />
                {productComponents}
            </div>
        )
    }

}

export default Main