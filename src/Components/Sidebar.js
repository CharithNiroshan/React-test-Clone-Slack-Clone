import CreateIcon from "@material-ui/icons/Create";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { FiberManualRecord } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import Sidebaroption from "./Sidebaroption";
import db from "../firbase";

function Sidebar() {
  const [channels, setchannels] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setchannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Clever Programmer</h2>
          <h3>
            <FiberManualRecord className="onlineicon" />
            Clever_qazi
          </h3>
        </div>
        <CreateIcon />
      </div>
      <Sidebaroption Icon={InsertCommentIcon} title="Threads" />
      <Sidebaroption Icon={InboxIcon} title="Mentions & Reactions" />
      <Sidebaroption Icon={DraftsIcon} title="Saved Items" />
      <Sidebaroption Icon={BookmarksIcon} title="Channel Browser" />
      <Sidebaroption Icon={PeopleAltIcon} title="People & User Groups" />
      <Sidebaroption Icon={AppsIcon} title="Apps" />
      <Sidebaroption Icon={FileCopyIcon} title="File Browser" />
      <Sidebaroption Icon={ExpandLessIcon} title="Show Less" />
      <hr />
      <Sidebaroption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <Sidebaroption Icon={AddIcon} title="Add Channel" />
      {channels.map((channel) => {
        return <Sidebaroption title={channel.name} key={channel.id} />;
      })}
    </div>
  );
}

export default Sidebar;
