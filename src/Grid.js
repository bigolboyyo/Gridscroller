import { useState, useEffect } from "react";

const Grid = ({ data, toolbarHeight }) => {
  const [items, setItems] = useState(data);
  const [fullScreenIndex, setFullScreenIndex] = useState(null);

  useEffect(() => {
    setItems(data);
  }, [data]);

  const handleDelete = (index) => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.splice(index, 1);
      return newItems;
    });
  };

  const handleImageClick = (index) => {
    if (index === fullScreenIndex) {
      setFullScreenIndex(null);
      document.body.classList.remove("fullscreen");
    } else {
      setFullScreenIndex(index);
      document.body.classList.add("fullscreen");
    }
  };

  return (
    <div className="grid-container">
      <div className="grid">
        {items.map((item, index) => (
          <div
            className={`grid-item ${
              fullScreenIndex === index ? "full-screen" : ""
            }`}
            key={index}
            onClick={() => handleImageClick(index)}
          >
            <img
              style={{
                marginTop:
                  fullScreenIndex === index
                    ? `calc(${toolbarHeight}px + 7vh)`
                    : 0,
              }}
              src={item.image}
              alt={item.title}
            />
            <div className="item-details">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(index);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
