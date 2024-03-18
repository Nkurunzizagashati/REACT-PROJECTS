import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});

  function handleSingleSelection(id) {
    setSelected((prevSelected) => (prevSelected === id ? null : id));
  }

  function handleMultipleSelection(id) {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems[id]) {
        const { [id]: value, ...rest } = prevSelectedItems;
        return rest;
      } else {
        return { ...prevSelectedItems, [id]: true };
      }
    });
  }

  function handleClick(id) {
    if (enableMultipleSelection) {
      handleMultipleSelection(id);
    } else {
      handleSingleSelection(id);
    }
  }

  function enableMultipleSelectionMode() {
    setEnableMultipleSelection((prevMode) => {
      if (prevMode === false) {
        setSelected(null); // Clear single selection when entering multiple selection mode
        setSelectedItems({}); // Clear multiple selections when entering multiple selection mode
        return true;
      } else {
        setSelected(null); // Clear single selection when exiting multiple selection mode
        return false;
      }
    });
  }

  return (
    <div className="acc-wrapper">
      <span className="prompt-user" onClick={enableMultipleSelectionMode}>
        {enableMultipleSelection ? "Disable " : "Enable "} Multiple Selection
      </span>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={item.id}>
              <div className="title">
                <h3 onClick={() => handleClick(item.id)}>{item.question}</h3>
                <span>+</span>
              </div>
              {enableMultipleSelection
                ? selectedItems[item.id] && (
                    <div className="acc-content">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="acc-content">{item.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
