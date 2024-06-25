import React from "react";
import Product from "./Product";
import productsData from "../ProductsData";
// import ComparedProducts from "./ComparedProducts";

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      products: productsData,
      numberCompared: 0,
    };
  }

  // handleCompareChange = (e) => {
  //   e.persist();

  //   const clickedProductID = parseInt(e.target.dataset.productID);

  //   this.setState((prevState) => {
  //     prevState.products.map((updatedComparedProduct) => {
  //       if (updatedComparedProduct.id === clickedProductID) {
  //         updatedComparedProduct.compared.map((updated) => {
  //           updated.isProductCompared = !updated.isProductCompared;
  //         });
  //       }
  //     });
  //     return prevState;
  //   });
  // };

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

      return { products: newProductData };
    });
  };

  render() {
    const productComponents = this.state.products.map((productData) => {
      return (
        <Product
          key={productData.id}
          products={this.state.products}
          handleColourClick={this.handleColourClick}
          handleCompareChange={this.handleCompareChange}
          {...productData}
        />
      );
    });

    return (
      <div className="main">
        {/* <ComparedProducts numberCompared={this.state.numberCompared} /> */}
        {productComponents}
      </div>
    );
  }
}

export default Main;
