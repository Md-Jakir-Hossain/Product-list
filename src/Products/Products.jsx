import React from "react";
import { RiChatDeleteFill } from "react-icons/ri";
const Products = ({ item, del }) => {
  const { id, name, quantity, price } = item;
  return (
    <>
      <tbody>
        <tr className="product-table-row">
          <td>{id}</td>
          <td>{name}</td>
          <td>{quantity}</td>
          <td>{price}</td>

          <td onClick={() => del(id)}>
            <RiChatDeleteFill color="red" />
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Products;
