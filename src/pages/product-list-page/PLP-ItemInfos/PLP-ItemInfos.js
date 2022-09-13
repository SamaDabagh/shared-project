import "./PLP-ItemInfos.scss";
import { Link } from "react-router-dom";

const PLPItemInfos = ({
  nameOfItem,
  PriceOfItem,
  imageOfItem,
  handleOnMouseOver,
}) => {
  return (
    <Link
      className="card-content-ItemInfos"
      to="/products/:id"
      onMouseOver={handleOnMouseOver}
    >
      <div className="card-body-ItemInfos">
        <div>
          <h3>{nameOfItem}</h3>
        </div>
        <div>
          <p>Price : {PriceOfItem}</p>
        </div>
      </div>
      <img
        className="card-image-ItemInfos"
        src={imageOfItem}
        alt="product-Image"
      />
    </Link>
  );
};

export default PLPItemInfos;
