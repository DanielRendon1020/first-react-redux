import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearList } from "../features/todoSlice";
import { useState } from "react";

export default function Todo() {
  const { items } = useSelector((state) => state.todo);
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  const [crossOut, setCrossOut] = useState(false)

  const crossOutItem = () => {
    setCrossOut(true)
  }

  const onSubmitItem = (e) => {
    e.preventDefault();
    e.target.reset();
    dispatch(addItem(item));
  };

  return (
    <div>
      <h2>To Do List</h2>
      <div id="todo-container">
        <ul id="list">
          {items.map((item, index) => {
            return (
              <li style={{textDecoration: crossOut ? 'line-through' : 'none'}} key={index}>
                <span>{item.text}</span>
                <div id="list-buttons">
                  <button onClick={crossOutItem}>Done</button>
                  <button
                    className="outline"
                    type="text"
                    onClick={(e) => {
                      dispatch(removeItem(item.text));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <form id="form" onSubmit={onSubmitItem}>
          <input type="text" onChange={(e) => setItem(e.target.value)} />
          <div className="button-container">
            <button type="submit">Add Item</button>
            <button type="button" onClick={() => dispatch(clearList())}>
              Clear List
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
