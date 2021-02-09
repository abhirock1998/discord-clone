import React, { useEffect, useState } from "react";
import DropDown from "./Dropdown";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import db from "./firbase";
import SidebarChannel from "./SidebarChannel";
export default function DropDownAssembler({ show, toggle }) {
  const [channelId, setChannelID] = useState([]);
  useEffect(() => {
    db.collection("channels").onSnapshot((snap) => {
      setChannelID(
        snap.docs.map((e) => {
          return {
            id: e.id,
            channel: e.data(),
          };
        })
      );
    });
  }, []);

  return (
    <DropDown show={show}>
      <DropDown.Title>Clever Programmer</DropDown.Title>
      <ExpandMoreIcon onClick={toggle} />
      {channelId?.map((channel) => {
        return (
          <SidebarChannel className='custom'
            id={channel.id}
            key={channel.id}
            channel={channel.channel.channelName}
          />
        );
      })}
    </DropDown>
  );
}
