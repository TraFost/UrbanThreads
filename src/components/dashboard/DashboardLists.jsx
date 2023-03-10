import { useState } from "react";
import { NumericFormat } from "react-number-format";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../app/productSlice";
import pb from "../../lib/pocketbase";
import Button from "../Button";

const DashboardLists = ({ product }) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const imgProduct = pb.getFileUrl(product, product.productImage);

  const handleDelete = () => {
    dispatch(deleteProduct(product));
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  console.log(product.productPrice, product.qty);

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
            <div className="font-bold">{product.productName}</div>
            <div className="text-sm opacity-50">Indonesia</div>
          </div>
        </div>
      </td>
      <td>{product.productDescription}</td>
      <td>
        <NumericFormat
          value={product.productPrice}
          displayType="text"
          prefix="$"
        />
      </td>
      <td>{product.qty}</td>
      <th onClick={handleEdit} className="flex justify-center">
        <Button>Edit</Button>
        {isEdit && <Button className="ml-3">Submit</Button>}
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
