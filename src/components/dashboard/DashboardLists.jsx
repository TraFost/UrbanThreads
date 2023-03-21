import { useState } from "react";
import { NumericFormat } from "react-number-format";
import { useDispatch } from "react-redux";
import { deleteProduct, editProduct } from "../../app/productSlice";
import pb from "../../lib/pocketbase";
import Button from "../Button";

const DashboardLists = ({ product }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [dataNumber, setDataNumber] = useState({
    qty: product.qty || 0,
    productPrice: product.productPrice || 0,
  });
  const [dataString, setDataString] = useState({
    productName: product.productName || "",
    productDescription: product.productDescription || "",
  });
  const dispatch = useDispatch();

  const imgProduct = pb.getFileUrl(product, product.productImage[0]);

  const handleDelete = async () => {
    dispatch(deleteProduct(product));

    await pb.collection("products").delete(product.id);
  };

  const handleEditData = async () => {
    const { qty, productPrice } = dataNumber;
    const { productName, productDescription } = dataString;

    const data = {
      id: product.id,
      productName,
      productDescription,
      productPrice,
      qty,
    };

    await pb.collection("products").update(product.id, data);
    dispatch(editProduct(data));

    setIsEdit(false);
  };

  return (
    <tr>
      <th></th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={imgProduct} alt="photo product" />
            </div>
          </div>
          <div>
            <div className="font-bold">
              {isEdit ? (
                <input
                  type="text"
                  defaultValue={product.productName}
                  onChange={({ target: { value } }) =>
                    setDataString({ ...dataString, productName: value })
                  }
                />
              ) : (
                product.productName
              )}
            </div>
            <div className="text-sm opacity-50">Indonesia</div>
          </div>
        </div>
      </td>
      <td>
        {isEdit ? (
          <input
            type="text"
            defaultValue={product.productDescription}
            onChange={({ target: { value } }) =>
              setDataString({
                ...dataString,
                productDescription: value,
              })
            }
          />
        ) : (
          product.productDescription
        )}
      </td>
      <td>
        <NumericFormat
          type="number"
          value={product.productPrice}
          thousandSeparator={isEdit ? false : true}
          displayType={isEdit ? "input" : "text"}
          prefix={isEdit ? "" : "$"}
          onValueChange={({ floatValue }) => {
            setDataNumber({ ...dataNumber, productPrice: floatValue });
          }}
        />
      </td>
      <td>
        <NumericFormat
          type="number"
          value={product.qty}
          displayType={isEdit ? "input" : "text"}
          thousandSeparator={isEdit ? false : true}
          onValueChange={({ floatValue }) => {
            setDataNumber({ ...dataNumber, qty: floatValue });
          }}
        />
      </td>
      <th onClick={() => setIsEdit(true)} className="flex justify-center">
        <Button>Edit</Button>
        {isEdit && (
          <Button onClick={handleEditData} className="ml-3">
            Submit
          </Button>
        )}
        {!isEdit && (
          <Button onClick={handleDelete} className="ml-3">
            Delete
          </Button>
        )}
      </th>
    </tr>
  );
};

export default DashboardLists;
