import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addToCart } from "../../app/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { NumericFormat } from "react-number-format";
import { GrAdd, GrSubtract } from "react-icons/gr";
import { motion } from "framer-motion";
import pb from "../../lib/pocketbase";
import "./single.css";

const Single = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { name } = useParams();

  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);

  // ** Single Product Data
  const { products } = useSelector((state) => state.product);
  const data = products.filter((product) => product.productName === name);
  const single = data[0];

  let dataImg = [];
  if (single) {
    dataImg = single.productImage.map((img) => {
      return pb.getFileUrl(single, img);
    });
  }

  const handleQtyChange = (e) => {
    const {
      target: { value },
    } = e;
    if (value < 0 || value === "") {
      setQty(1);
    } else {
      setQty(value);
    }
  };

  const handleSubtract = () => {
    if (qty >= 2) {
      setQty(qty - 1);
    } else {
      alert("need to provide quantity!");
    }
  };

  const addCart = () => {
    const quantity = parseInt(qty);
    if (qty > 100) {
      alert("Quantity must be less than 100, were short on products!:(");
      return;
    }
    const data = {
      id: single.id,
      name: single.productName,
      price: single.productPrice,
      qty: quantity,
      image: dataImg[0],
    };
    setLoading(true);
    dispatch(addToCart(data));
    setTimeout(() => {
      nav("/cart");
    }, 3500);
  };

  return (
    <>
      {products && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid gap-y-3 md:grid-cols-2 lg:grid-cols-2 md:place-items-center pb-4 md:pb-0"
        >
          <div className="block md:hidden">
            <img
              src={dataImg[0]}
              alt="Product"
              className="w-full object-contain"
            />
          </div>
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-1.5 place-items-center">
              {dataImg &&
                dataImg.map((item, index) => (
                  <img key={index} src={item} alt="Product" />
                ))}
            </div>
          </div>
          <div className="container">
            <h1 className="font-bold text-2xl">{single.productName}</h1>
            <p className="text-md font-medium pt-3 ml-1">
              {single.productDescription}
            </p>
            <NumericFormat
              value={single.productPrice}
              thousandSeparator={true}
              displayType="text"
              prefix="$"
              renderText={(value) => (
                <p className="pt-3 text-xl font-semibold">{value}</p>
              )}
            />
            <div className="pt-4">
              <p className="text-md pb-3">Quantity: </p>
              <div className="inline-flex border border-gray-300">
                <button className="ml-4" onClick={handleSubtract}>
                  <GrSubtract className="text-md" />
                </button>
                <input
                  value={qty || ""}
                  type="number"
                  className="w-5 h-10 focus:outline-none mx-4"
                  onChange={handleQtyChange}
                />
                <button className="mr-4" onClick={() => setQty(qty + 1)}>
                  <GrAdd className="text-md" />
                </button>
              </div>
              <div className="mt-6">
                <button
                  className={
                    loading ? "btn btn-block loading" : "btn btn-block"
                  }
                  onClick={addCart}
                >
                  {loading ? "" : "Add To cart"}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Single;
