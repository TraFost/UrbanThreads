import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  incrementTotalPrice,
  decrementTotalPrice,
  deleteFromCart,
} from "../../app/productSlice";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { VscTrash } from "react-icons/vsc";
import { NumericFormat } from "react-number-format";

const CartList = ({ item, price, index }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.qty);
  const [totalPrice, setTotalPrice] = useState(item.price * item.qty);

  const handleAddQty = () => {
    if (quantity > 0) {
      setQuantity(quantity + 1);
      setTotalPrice(item.price * (quantity + 1));
      dispatch(
        incrementTotalPrice({
          id: item.id,
          qty: quantity + 1,
          price: item.price,
          totalPrice: totalPrice,
        })
      );
    }
  };

  const handleSubtractQty = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setTotalPrice(item.price * (quantity - 1));
      dispatch(
        decrementTotalPrice({
          id: item.id,
          qty: quantity - 1,
          price: item.price,
          totalPrice: totalPrice,
        })
      );
    }
  };

  return (
    <>
      {item && (
        <div className="">
          <div className="flex items-center flex-wrap sm:flex-nowrap  justify-around">
            <picture className="w-[15%] lg:w-[20%]">
              <img
                src={item.image}
                alt="product Image"
                className="w-[70%] md:w-full h-full object-cover rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg"
              />
            </picture>
            <h2>{item.name}</h2>
            <div className="flex items-center gap-1.5">
              <p>{quantity}</p>
              <div className="flex flex-col">
                <button onClick={handleAddQty}>
                  <FiChevronUp />
                </button>
                <button
                  onClick={handleSubtractQty}
                  disabled={quantity < 2 ? true : ""}
                >
                  <FiChevronDown />
                </button>
              </div>
            </div>
            {price && (
              <NumericFormat
                value={totalPrice}
                thousandSeparator={true}
                displayType="text"
                prefix="$"
                renderText={(value) => <p className="font-bold">{value}</p>}
              />
            )}
            <button
              onClick={() =>
                dispatch(
                  deleteFromCart({
                    id: item.id,
                    qty: quantity,
                    totalPrice: totalPrice,
                  })
                )
              }
            >
              <VscTrash />
            </button>
          </div>
          <div className="divider mb-[0.1rem]" />
        </div>
      )}
    </>
  );
};

export default CartList;
