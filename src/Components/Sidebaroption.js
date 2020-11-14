import React from "react";
import "./Sidebaroption.css";

function Sidebaroption(props) {
  return (
    <div className="sidebaroption">
      {props.Icon && <props.Icon className="sidebaroption_icon" />}
      {props.Icon ? (
        <h3>{props.title}</h3>
      ) : (
        <h3 className="sidebaroption_channelname">
          <span className="sidebaroption_hash">#</span> {props.title}
        </h3>
      )}
    </div>
  );
}

export default Sidebaroption;
