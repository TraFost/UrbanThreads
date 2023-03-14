import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../../app/productSlice";
import pb from "../../lib/pocketbase";
import Button from "../Button";
import ImgList from "./ImgList";

const Modal = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productName: "",
      productDescription: "",
      productPrice: 0,
      qty: 0,
    },
  });

  useEffect(() => {
    document.body.classList.add("overflow-x-hidden");
    return () => {
      document.body.classList.remove("overflow-x-hidden");
    };
  }, []);

  const listImg = watch("productImage");

  const imgName = listImg && [...listImg];

  const errMsg = {
    productName: errors.productName?.message,
    productDescription: errors.productDescription?.message,
    productPrice: errors.productPrice?.message,
    qty: errors.qty?.message,
    productImage: errors.productImage?.message,
  };

  const productData = async (data) => {
    const formData = new FormData();
    const fileInput = listImg;
    const convertedQty = parseInt(data.qty);
    const convertedPrice = parseInt(data.productPrice);

    formData.append("productName", data.productName);
    formData.append("productPrice", convertedPrice);
    formData.append("productDescription", data.productDescription);
    for (let file of fileInput) {
      formData.append("productImage", file);
    }
    formData.append("qty", convertedQty);

    // ** create record to pocketbase
    const record = await pb.collection("products").create(formData);

    // ** converted to json and parsed to object and push it to redux store
    const convertedProduct = JSON.stringify(record);
    const parsedProduct = JSON.parse(convertedProduct);

    dispatch(addProduct(parsedProduct));

    return record;
  };

  return createPortal(
    <div className=" min-h-screen absolute inset-52 bg-gradient-to-r from-gray-500 to-black overflow-y-auto">
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form onSubmit={handleSubmit(productData)} className="py-6 px-9">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Product Name:
              </label>
              <input
                {...register("productName", {
                  required: "Please enter your product name!",
                })}
                type="text"
                placeholder="Enter your product name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              {errors.productName && (
                <p className="text-red-500 text-center">{errMsg.productName}</p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Product Description:
              </label>
              <input
                {...register("productDescription", {
                  required: "Please enter your product description",
                })}
                type="text"
                placeholder="Enter your product description"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              {errors.productDescription && (
                <p className="text-red-500 text-center">
                  {errMsg.productDescription}
                </p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Product Price:
              </label>
              <input
                {...register("productPrice", {
                  required: "Please enter your product price!",
                  min: {
                    value: 1,
                    message: "Price must be greater than 0 !",
                  },
                  setValueAs: (value) => Number(value),
                })}
                type="number"
                placeholder="Enter Your Produt Price"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              {errors.productPrice && (
                <p className="text-red-500 text-center">
                  {errMsg.productPrice}
                </p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Qty:
              </label>
              <input
                {...register("qty", {
                  required: "Please enter your product quantity!",
                  min: {
                    value: 1,
                    message: "Quantity must be greater than 0 !",
                  },
                  max: {
                    value: 100,
                    message: "Quantity must be less than 100 !",
                  },
                })}
                type="number"
                placeholder="Enter How Much Quantity You Have"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              {errors.qty && (
                <p className="text-red-500 text-center">{errMsg.qty}</p>
              )}
            </div>
            <div className="mb-6 pt-4">
              <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                Upload File
              </label>
              <div className="mb-8">
                <input
                  {...register("productImage", {
                    required: "Please upload your product image!",
                    min: {
                      value: 1,
                      message: "Please upload your product image!",
                    },
                    max: {
                      value: 5,
                      message: "You can upload maximum 5 images!",
                    },
                  })}
                  type="file"
                  multiple
                  accept="image"
                />
                {errors.productImage && (
                  <p className="text-red-500 text-center pt-2">
                    {errMsg.productImage}
                  </p>
                )}
              </div>
              {imgName
                ? imgName.map((item) => {
                    return <ImgList key={item.name} img={item} />;
                  })
                : null}
            </div>
            <div>
              <Button
                className="btn btn-block hover:bg-white hover:text-black"
                disabled={
                  errors.productName
                    ? "disabled"
                    : "" || errors.productDescription
                    ? "disabled"
                    : "" || errors.productPrice
                    ? "disabled"
                    : "" || errors.qty
                    ? "disabled"
                    : "" || errors.productImage
                    ? "disabled"
                    : ""
                }
              >
                Send File
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-dashboard")
  );
};

export default Modal;
