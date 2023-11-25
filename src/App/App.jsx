import React, { useState } from "react";
import Products from "../Products/Products";
import "./App.css";

export const App = () => {
  const [items, setItems] = useState([]);

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const clear = () => {
    setId("");
    setName("");
    setQuantity("");
    setPrice("");
  };

  const submitBtn = (e) => {
    console.log(e);
    e.preventDefault();
    const item = {
      id,
      name,
      quantity,
      price,
    };
    setItems([...items, item]);
    clear();
  };

  const removeItem = (id) => {
    console.log(id);
    const remove = items.filter((item) => item.id !== id);
    setItems(remove);
  };

  return (
    <div className="wrapper">
      <h1>Product List</h1>

      <div className="main">
        <div className="form-container">
          <form onSubmit={submitBtn} className="form-group">
            <label>Product Id :</label>
            <input
              type="number"
              value={id > 0 ? id : 0}
              onChange={(e) => setId(e.target.value)}
              className="form-control"
              required
            ></input>
            <br></br>
            <label>Product Name :</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              required
            ></input>
            <br></br>
            <label>Quantity :</label>
            <input
              type="number"
              value={quantity > 0 ? quantity : 0}
              onChange={(e) => setQuantity(e.target.value)}
              className="form-control"
              required
            ></input>
            <br></br>
            <label>Price :</label>
            <input
              type="number"
              value={price > 0 ? price : 0}
              onChange={(e) => setPrice(e.target.value)}
              className="form-control"
              required
            ></input>
            <br></br>
            <button
              onClick={() => setItems}
              type="submit"
              className="btn btn-success btn-md"
            >
              ADD
            </button>
          </form>
        </div>

        <div className="view-container">
          {items.length > 0 && (
            <>
              <table className="table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>

                {items.map((item) => (
                  <Products item={item} del={removeItem} />
                ))}
              </table>

              <button
                onClick={() => setItems([])}
                className="btn btn-danger btn-md"
              >
                Remove All
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
