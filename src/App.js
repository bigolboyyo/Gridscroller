import React, { useState, useCallback } from "react";
import Toolbar from "./Toolbar";
import Grid from "./Grid";
import "./App.css";
import SearchBar from "./SearchBar";

const App = () => {
  const [items, setItems] = useState([]);
  const [toolbarHeight, setToolbarHeight] = useState(0);

  const memoizedSetToolbarHeight = useCallback((height) => {
    setToolbarHeight(height);
  }, []);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleDeleteItem = (index) => {
    setItems((prevItems) => prevItems.filter((item, i) => i !== index));
  };

  return (
    <>
      <SearchBar />
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
          handleDeleteItem={handleDeleteItem}
          toolbarHeight={toolbarHeight}
        />
      </div>
    </>
  );
};

export default App;
