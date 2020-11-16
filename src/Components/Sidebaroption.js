import React from "react";
import { useHistory } from "react-router-dom";
import db from "../firbase";
import "./Sidebaroption.css";

function Sidebaroption(props) {
  const history = useHistory();

  const selectchannel = () => {
    if (props.id) {
      history.push(`/room/${props.id}`);
    } else {
      history.push(props.title);
    }
  };

  const addchannel = () => {
    const channelName = prompt("Please enter the channel name ?");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebaroption"
      onClick={props.Addchannel ? addchannel : selectchannel}
    >
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
