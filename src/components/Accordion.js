import React, {useState} from "react";

export const Accordion = ({ items }) => {

    const [activeindex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    const renderItems = items.map((item, index) => {

        const active = index === activeindex ? "active" : "";

      return(
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={(e) => onTitleClick(index)}>
           <i className="dropdown icon"></i>
           {item.title}
        </div>
        <div className={`content ${active}`}>
           <p>{item.content}</p>
        </div>
      </React.Fragment>
      );
    });

    return (
        <div className="ui styled accordion">
          {renderItems}
        </div>
    )
};

export default Accordion;