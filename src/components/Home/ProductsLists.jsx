import { Link } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import ClassNames from "classnames";
import pb from "../../lib/pocketbase";
import "../../pages/Home/home.css";

const ProductsLists = ({ product, index }) => {
  const imgProducts = pb.getFileUrl(product, product.productImage[0]);

  const imgContainer = ClassNames("pb-0.5", {
    "md:justify-self-end lg:col-start-2 lg:col-end-3": index === 0,
    "md:justify-self-start self-end lg:self-start": index === 1,
    "md:justify-self-end lg:justify-self-start lg:w-[64.5%]": index === 2,
    "md:justify-self-start self-end lg:col-start-1 lg:col-end-3 lg:justify-self-end lg:self-end":
      index === 3,
    "md:justify-self-end self-end lg:self-start lg:justify-self-start lg:col-start-3 lg:col-end-6":
      index === 4,
    "md:justify-self-start self-end lg:self-start lg:col-start-1 lg:col-end-3 lg:justify-self-end":
      index === 5,
    "md:justify-self-end self-end lg:justify-self-start lg:self-start lg:col-start-3":
      index === 6,
    "md:justify-self-start lg:col-start-4 lg:w-[64.4%]": index === 7,
    "md:justify-self-end lg:col-start-1 lg:col-end-3 lg:justify-self-end lg:self-end ":
      index === 8,
    "md:justify-self-start self-end lg:self-start lg:col-start-3 lg:col-end-5":
      index === 9,
  });

  return (
    <>
      <div className={imgContainer}>
        <div className="image-container relative hover:opacity-70 flex justify-center items-center md:flex-none">
          <img
            src={imgProducts}
            alt="test"
            className="w-1/2 md:w-[12.688rem] lg:w-full"
          />
          <button className="details-hover inset-0">
            <Link to={`/${product.productName}`}>
              See Details
            </Link>
          </button>
        </div>
        <div className="border-b border-b-black flex justify-between pt-2 pb-0.5 lg:pt-3.5 m-auto">
          <div className="">
            <p className="font-extrabold cursor-pointer">
              {product.productName}
            </p>
          </div>
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
