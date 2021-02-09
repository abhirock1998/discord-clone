import { Avatar } from "@material-ui/core";

import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import "./message.css";

function Message({ message, timestamp,id, user,pressed}) {
  return (
    <div className="message">
      <Avatar src={user?.photoURL} />
      <div class="message_info">
        <h4>
          {user?.displayName}
          <span className="message_timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
      <div onClick={() => pressed(id)} className="message_icon">
        <DeleteOutlineIcon   fontSize="small" />
      </div>
    </div>
  );
}

export default Message;
