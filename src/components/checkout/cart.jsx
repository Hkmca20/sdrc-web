import React, { useState, useEffect } from "react";
import "./style.css";

// get localStorage data
const getLocalData = () => {
  const cartList = localStorage.getItem("myCartList");
  if (cartList) {
    return JSON.parse(cartList);
  } else {
    return [];
  }
};
const Cart = () => {
  const [inputData, setinputData] = useState("");
  const [items, setitems] = useState(getLocalData());
  const [isEditItem, setisEditItem] = useState("");
  const [toggleEditBtn, settoggleEditBtn] = useState(false);

  //  add item funtion
  const addItem = () => {
    if (!inputData) {
      alert("please select a product");
    } else if (inputData && toggleEditBtn) {
      setitems(
        items.map((currItem) => {
          if (currItem.id === isEditItem) {
            return { ...currItem, name: inputData };
          }
          return currItem;
        })
      );
      setinputData("");
      setisEditItem(null);
      settoggleEditBtn(false);
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setitems([...items, newItem]);
      setinputData("");
    }
  };
  //update item funtion
  const editItem = (id) => {
    const updatedItem = items.find((currItem) => {
      return currItem.id === id;
    });
    setinputData(updatedItem.name);
    setisEditItem(id);
    settoggleEditBtn(true);
  };
  //delete item funtion
  const deleteItem = (id) => {
    const updatedItems = items.filter((currItem) => {
      return currItem.id !== id;
    });
    setitems(updatedItems);
  };
  //remove all item funtion
  const removeAllItems = () => {
    setitems([]);
  };
  // update items to local storage
  useEffect(() => {
    localStorage.setItem("myCartList", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/banner1.jpeg" alt="todologo" />
            <figcaption>Add product here✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              className="form-control"
              type="text"
              placeholder="✍ Add Item ✔"
              value={inputData}
              onChange={(event) => setinputData(event.target.value)}
            />
            {toggleEditBtn ? (
              <i className="fa fa-edit add-btn" onClick={() => addItem()} />
            ) : (
              <i className="fa fa-plus add-btn" onClick={() => addItem()} />
            )}
          </div>

          {/* show our items */}
          <div className="showItems">
            {items.map((item, index) => {
              return (
                <div className="eachItem" key={item.id}>
                  <h3>{item.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(item.id)}
                    />
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(item.id)}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* remove all button */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="ORDER NOW"
              onClick={() => removeAllItems()}
            >
              <span>CHECKOUT</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
