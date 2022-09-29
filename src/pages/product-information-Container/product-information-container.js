import "./product-information-container.scss";
import "../../sass/_variables.scss";

const PIC = ({ item, handleAddToCartAmount, product, group }) => {
  let numberOfItems2 = 0;

  const handleIncreaseButton = (event) => {
    product.canBeSold && event.target.value <= 5
      ? (numberOfItems2 = +event.target.value)
      : (numberOfItems2 = 5) && alert(`You can add Max ${5} items`);
  };

  const handleAddToCart = () => {
    handleAddToCartAmount(numberOfItems2);
    console.log({
      item: item,
      code: numberOfItems2,
    });
  };

  const { price, name, pricePreFix, canBeSold, imageUrl } = product;

  return (
    <>
      <div className="container-PIC">
        <div>
          <div>
            <h1 className="productName-PIC">
              <span> Product :</span> {name}
            </h1>
          </div>
          <br />
          <div>
            <h2>
              <p className="productPrice-PIC">
                {group.name} : group {group.id}
              </p>
            </h2>
          </div>
          <br />
          <br />
          <h2 className="productPrice-PIC">
            <span>Price({pricePreFix}) :</span> {price}
          </h2>
          {canBeSold ? (
            <div className="productAvailability-PIC">Available</div>
          ) : (
            <div> Unavailable </div>
          )}
          <br />
          <br />
          <div className="input-btn-container-PIC">
            <input
              className="counter-PIC"
              type="number"
              onChange={handleIncreaseButton}
              placeholder="0"
              min={0}
            />
            {canBeSold ? (
              <button className="btn-addToCart" onClick={handleAddToCart}>
                Add to cart +
              </button>
            ) : (
              <button
                className="btn-addToCart-disabled"
                onClick={handleAddToCart}
                disable
              >
                Add to cart +
              </button>
            )}
          </div>
        </div>

        <div className="wrapper-image-PIC">
          <img src={imageUrl} alt="product-image" className="image-PIC" />
        </div>
      </div>
      <div>
        <p className="image-PIC"></p>
      </div>
    </>
  );
};

export default PIC;

// const productsArr = Object.keys(product);
// const key = productsArr[0];

//***render***:
// product[key] ? product[key].name : "Loading...."
