import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import "./App.css";

export const App = () => {
  const [products, setProducts] = useState([]);

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const clear = () => {
    setId("");
    setName("");
    setQuantity("");
    setPrice("");
    setDescription("");
  };

  const submitBtn = (e) => {
    console.log(e);
    e.preventDefault();
    const product = {
      id,
      name,
      quantity,
      price,
      description,
    };
    setProducts([...products, product]);
    clear();
  };

  const removeProduct = (id) => {
    console.log(id);
    const remove = products.filter((product) => product.id !== id);
    setProducts(remove);
  };
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <div className="wrapper">
      <h1>Product List</h1>

      <div className="main">
        <div className="form-container">
          <label htmlFor="">
            Color :
            <select>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </label>
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
            <label>Description :</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
              required
            ></input>
            <br></br>
            <button
              onClick={() => setProducts}
              type="submit"
              className="btn btn-success btn-md"
            >
              Add Product
            </button>
          </form>
        </div>

        <div className="view-container">
          {products.length > 0 && (
            <>
              <table className="table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                {products.map((product) => (
                  <Products product={product} del={removeProduct} />
                ))}
              </table>

              <button
                onClick={() => setProducts([])}
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
