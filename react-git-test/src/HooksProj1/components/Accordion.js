import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(null);

  const onTitleClick = (index) => {
    if (activeItemIndex === index) {
      setActiveItemIndex(null);
    } else {
      setActiveItemIndex(index);
    }
  };

  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${activeItemIndex === index ? "active" : ""}`}
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${activeItemIndex === index ? "active" : ""}`}>
          <p>{item.contents}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
