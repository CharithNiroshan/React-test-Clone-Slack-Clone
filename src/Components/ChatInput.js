import React, { useState } from "react";
import "./ChatInput.css";
import { Button } from "@material-ui/core";
import { useStateValue } from "./stateprovider";
import db from "../firbase";
import firebase from "firebase";

function ChatInput(props) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();
    if (props.channelId) {
      db.collection("rooms").doc(props.channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userimage: user.photoURL,
      });
    }
  };

  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${props.channelName?.toString()}`}
        />
        <Button type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;
