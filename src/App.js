import "./App.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(["Item 1", "Item 2"]);

 

  function addItem() {
    const newItem = `Item ${items.length + 1}`;
    setItems((prevState) => [...prevState, newItem]);
  }

   const item = items.map((item) => <p key={item}>{item}</p>);

  return (
    <>
      <div className="app">
        <button className="btn-submit" onClick={addItem}>
          Add items
        </button>
        <div className="items-heading">
          {item}
        </div>
      </div>
    </>
  );
}

export default App;
