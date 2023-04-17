import React, { useState, useCallback } from "react";
import Toolbar from "./Toolbar";
import Grid from "./Grid";
import "./App.css";
import Header from "./Header";

const App = () => {
  const [items, setItems] = useState([]);
  const [toolbarHeight, setToolbarHeight] = useState(0);

  const memoizedSetToolbarHeight = useCallback((height) => {
    setToolbarHeight(height);
  }, []);

  const handleAddItem = (newItem) => {
    const itemExists = items.some(
      (item) => item.image && newItem.image && item.image === newItem.image
    );

    if (itemExists) {
      alert("Exact image file already uploaded.");
    } else {
      setItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const handleDeleteItem = (index) => {
    setItems((prevItems) => prevItems.filter((item, i) => i !== index));
  };

  return (
    <>
      <Header />
      <Toolbar
        handleAddItem={handleAddItem}
        setToolbarHeight={memoizedSetToolbarHeight}
      />
      <div
        className="container"
        style={{ marginTop: `calc(${toolbarHeight}px + 7vh)` }}
      >
        <Grid
          data={items}
          handleDelete={handleDeleteItem}
          toolbarHeight={toolbarHeight}
        />
      </div>
    </>
  );
};

export default App;
