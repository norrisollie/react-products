import React from "react";
class Product extends React.Component {
  render() {
    const {
      id,
      productName,
      productPrice,
      productDescription,
      isNewProduct,
      handleColourClick,
      // handleCompareChange,
      productColours,
    } = this.props;

    const colours = productColours.map((productColour) => {
      const colourForClass = productColour.colourName
        .replace(" ", "-")
        .toLowerCase();
      return (
        <button
          className={
            "colours__colour colours__colour--" +
            colourForClass +
            (productColour.isProductDefault ? " colours__colour--active" : "")
          }
          data-product-id={id}
          data-colour-id={productColour.colourID}
          onClick={(e) => handleColourClick(e)}
        ></button>
      );
    });

    const images = productColours.map((productImages) => {
      return (
        <img
          className={
            productImages.isProductDefault
              ? "product__image product__image--active"
              : "product__image"
          }
          key={productImages.id}
          src={productImages.colourImagePath}
          alt={productName}
        />
      );
    });

    return (
      <div className="product__wrapper">
        {isNewProduct && <div className="product__new">NEW</div>}
        <div className="product__title">{productName}</div>
        <div className="product__images">{images}</div>
        <div className="product__description">{productDescription}</div>
        <div className="colours__wrapper">{colours}</div>
        <div className="product__price">
          {productPrice.toLocaleString("gb", {
            style: "currency",
            currency: "GBP",
          })}
        </div>
        {/* <div className="checkbox__wrapper">
          <label className="label__wrapper">
            <input
              onChange={(e) => {
                handleCompareChange(e);
              }}
              type="checkbox"
              data-product-id={id}
            />
            Compare Item
          </label>
        </div> */}
      </div>
    );
  }
}

export default Product;
