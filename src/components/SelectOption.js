import React, { useContext, memo } from "react";
import { QueriesContext } from "../contexts/Queries.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default memo(function SelectOption({ imgsrc, alt, id, selected }) {
  const { isSelected } = useContext(QueriesContext);
  const checkIcon = (
    <FontAwesomeIcon className="faIcon" icon={faCheck} color="white" />
  );

  return (
    <div className={`SelectOption ${selected ? "selected" : ""}`}>
      <div
        className="test1"
        onClick={() => {
          isSelected(id);
        }}
      >
        {/* <img src={require("../img/logo512.png")} alt={alt} /> */}
        <img className="test2" src={require(`${imgsrc}`)} alt={alt} />
        {/* <img src={imgsrc} alt={alt} /> */}
        {selected && checkIcon}
      </div>
    </div>
  );
});
