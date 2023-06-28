function AddToCart({ product }) {
  const productInCart = false;

  const handleRemoveFromCart = () => {
    console.log("handle remove to cart");
  };
  const handleAddToCart = () => {
    console.log("handle add to cart");
  };

  if (!productInCart) {
    return (
      <div className="add-to-cart" onClick={handleAddToCart}>
        Add To Cart{" "}
      </div>
    );
  } else {
    return (
      <div className="add-to-cart-container">
        <div className="add" onClick={handleRemoveFromCart}>
          -
        </div>
        <div className="quantity">{productInCart.quantity}</div>
        <div className="add" onClick={handleAddToCart}>
          +
        </div>
      </div>
    );
  }
}

export default AddToCart;
