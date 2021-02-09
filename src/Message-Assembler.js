import React from "react";
import MessageComponents from "./styled-message";
import DeleteIcon from "@material-ui/icons/Delete";
import { Avatar } from "@material-ui/core";
function MessageAssembler({
  timestamp,
  user,
  message,
  direction,
  handleDeleted,
}) {
  return (
    <MessageComponents direction={direction}>
      <Avatar src={user.photoURL} />
      <MessageComponents.MessageInfo>
        <MessageComponents.Header>
          {user.displayName}
          <MessageComponents.Span>
            {new Date(timestamp?.toDate()).toUTCString()}
          </MessageComponents.Span>
        </MessageComponents.Header>
        <MessageComponents.Message>{message}</MessageComponents.Message>
      </MessageComponents.MessageInfo>
      <MessageComponents.DeleteIcon >
        <DeleteIcon   />
      </MessageComponents.DeleteIcon>
    </MessageComponents>
  );
}

export default MessageAssembler;
