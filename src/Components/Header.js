import React from "react";
import close from "./icon-remove.svg";

const Header = ({ keywords, removeKeyword, removeAllKeywords }) => {
  return (
    <div className="filter-container">
      <ul>
        {keywords.map((ele) => (
          <li key={ele}>
            {ele}

            <button onClick={() => removeKeyword(ele)} className="removeBtn">
              <img src={close} alt="close" />
            </button>
          </li>
        ))}
        
      </ul>
      <button onClick={removeAllKeywords} className="clearBtn">Clear</button>
    </div>
  );
};

export default Header;
