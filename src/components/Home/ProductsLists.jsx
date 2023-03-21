import { Link } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import ClassNames from "classnames";
import pb from "../../lib/pocketbase";
import "../../pages/Home/home.css";

const ProductsLists = ({ product, index }) => {
  const imgProducts = pb.getFileUrl(product, product.productImage[0]);

  const imgContainer = ClassNames("pb-0.5", {
    "col-start-2 col-end-3": index === 0,
    "": index === 1,
    "w-[64.5%]": index === 2,
    "col-start-1 col-end-3 justify-self-end self-end": index === 3,
    "col-start-3 col-end-6": index === 4,
    "col-start-1 col-end-3 justify-self-end": index === 5,
    "col-start-3": index === 6,
    "col-start-4 w-[64.4%]": index === 7,
    "col-start-1 col-end-3 justify-self-end self-end ": index === 8,
    "col-start-3 col-end-5": index === 9,
  });

  return (
    <>
      <div className={imgContainer}>
        <div className="image-container relative hover:opacity-70">
          <img src={imgProducts} alt="test" />
          <button className="details-hover inset-0">
            <Link to={`/${product.productName}`}>See Details</Link>
          </button>
        </div>
        <div
          className={
            index === 4
              ? "border-b border-b-black flex justify-between w-[93%] pt-2"
              : "border-b border-b-black flex justify-between pt-2" &&
                index === 9
              ? "border-b border-b-black flex justify-between w-[95%] pt-2"
              : "border-b border-b-black flex justify-between pt-2"
          }
        >
          <p className="font-extrabold cursor-pointer">{product.productName}</p>
          <NumericFormat
            value={product.productPrice}
            prefix="$"
            displayType="text"
          />
        </div>
      </div>
    </>
  );
};

export default ProductsLists;
