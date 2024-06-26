import React from "react";
import Product from "./Product";
import ComparedProducts from "./ComparedProducts";
import ComparedProduct from "./ComparedProduct";

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      isLoading: true,
      numberCompared: 0,
    };
  }

  handleCompareChange = (e) => {
    e.persist();

    const clickedProductID = parseInt(e.target.dataset.productId);

    this.setState((prevState) => {
      const newProductData = prevState.products.map((product) => {
        if (product.id === clickedProductID) {
          return {
            ...product,
            isProductCompared: e.target.checked,
          };
        }
        return product;
      });

      return { ...prevState, products: newProductData };
    });
  };

  componentDidMount() {
    fetch("products.json")
      .then((response) => response.json())
      .then((products) => {
        this.setState({ products: [...products], isLoading: false });
      })
      .catch((error) => console.error("Error:", error));
  }

  handleColourClick = (e) => {
    e.persist();

    const clickedColourID = parseInt(e.target.dataset.colourId);
    const clickedProductID = parseInt(e.target.dataset.productId);

    this.setState((prevState) => {
      const newProductData = prevState.products.map((product) => {
        if (product.id === clickedProductID) {
          const newColourData = product.productColours.map((colour) => {
            return {
              ...colour,
              isProductDefault: colour.colourID === clickedColourID,
            };
          });
          return {
            ...product,
            productColours: newColourData,
          };
        }
        return product;
      });

      return { ...prevState, products: newProductData };
    });
  };

  render() {
    const productComponents = this.state.products.map((productData) => {
      return (
        <Product
          key={productData.id}
          handleColourClick={this.handleColourClick}
          handleCompareChange={this.handleCompareChange}
          {...productData}
        />
      );
    });

    const productsToCompare = this.state.products.filter(
      (productData) => productData.isProductCompared
    );

    const comparedProducts = productsToCompare.map((productData) => {
      return <ComparedProduct {...productData} />;
    });

    return (
      <div className="main">
        <div className="main__product-container grid grid-gap-lg">
          <ComparedProducts numberCompared={this.state.numberCompared} />
          {this.state.products.length !== 0 && !this.state.isLoading
            ? productComponents
            : "Products loading..."}
        </div>
        <div className="main__compared-container">{comparedProducts}</div>
      </div>
    );
  }
}

export default Main;
