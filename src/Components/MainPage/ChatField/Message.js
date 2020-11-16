import React from "react";
import "./Message.css";

function Message(props) {
  return (
    <div className="message">
      <img src={props.detail.userimage} />
      <div className="message_info">
        <h4>
          {props.detail.user}{" "}
          <span className="message_timestamp">
            {new Date(props.detail.timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{props.detail.message}</p>
      </div>
    </div>
  );
}

export default Message;
