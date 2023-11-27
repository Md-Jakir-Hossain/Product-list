import React from "react";
import { RiChatDeleteFill } from "react-icons/ri";
const Products = ({ product, del }) => {
  const { id, name, quantity, price, description } = product;
  return (
    <>
      <tbody>
        <tr className="product-table-row">
          <td>{id}</td>
          <td>{name}</td>
          <td>{quantity}</td>
          <td>{price}</td>
          <td>{description}</td>

          <td onClick={() => del(id)}>
            <RiChatDeleteFill color="red" />
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Products;
