import React, { useState } from "react";
import InputArea from "./InputsArea.jsx";

import Heading from "./Heading.jsx";
function App() {
  const [notes, setNotes] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    //añade el valor actual de "notes" al array "items"
    //al colocar la función "prevItems" dentro del setItems,
    //estamos accediendo al valor anterior del estado "items"
    //y luego usamos el spread operator "..." para copiar todos los elementos
    //del array anterior dentro de un nuevo array, y luego añadimos el nuevo elemento "notes" al final
    setItems((prevItems) => {
      return [...prevItems, notes];
    });

    setNotes("");
  }
  function handleChange(event) {
    const newValue = event.target.value;
    setNotes(newValue);
  }

  function handleEnter(event) {
    if (event.key === "Enter") {
      addItem();
      setNotes("");
    }
  }

  return (
    <div className="container">
      <Heading />
      <InputArea
        type="text"
        onChange={handleChange}
        value={notes}
        onKeyDown={handleEnter}
        onClick={addItem}
      />

      <div>
        <ul>
          {items.map((todoItem) => (
            <li key={todoItem}>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
