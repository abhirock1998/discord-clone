import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Avatar } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import CallIcon from "@material-ui/icons/Call";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SidebarChannel from "./SidebarChannel";
import { useDispatch, useSelector } from "react-redux";
import { selectuser,logout } from "./features/userSlice";
import {setChannelId} from './features/appSlice';
import db, { auth } from "./firbase";
function Sidebar({ onclick }) {
  const [channelId, setChannelID] = useState([]);
  const dispatch =useDispatch();
  const user = useSelector(selectuser);
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

  const handeAddChannel = () => {
    const channelName = prompt("Enter channel Name");
    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };

const handleUserSignOut = (e) => {
  e.preventDefault();
  dispatch(logout({user:null}));
  dispatch(setChannelId({
    channelId:null,
    channelName:null
  }))
  auth.signOut();
}

  return (
    <div className="sidebar_container">
      <div className="sidebar_top">
        <h3> Web developer</h3>
        <ExpandMoreIcon
          className="sidebar_channel_name_dropdown"
          onClick={onclick}
        />
      </div>
      <div className="sidebar_channel">
        <div className="sidebar_channel_name">
          <div className="channel_name">
            <ExpandMoreIcon />
            <h4>Youtube</h4>
          </div>
          <AddIcon onClick={handeAddChannel} className="channel_abb_btn" />
        </div>
        {channelId?.map(({ id, channel }) => {
          return (
            <SidebarChannel id={id} key={id} channel={channel.channelName} />
          );
        })}
      </div>
      <div className="sidebar_voice">
        <SignalCellularAltIcon className="sidebar_voiceIcon" fontSize="large" />
        <div className="sidebar_voiceInfo">
          <h3>Voice</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar_voiceIcon">
          <CallIcon />
          <HelpOutlineIcon />
        </div>
      </div>
      <div className="sidebar_profile">
        <span title="Click me for Log out" className="profile_avatar">
          <Avatar onClick={handleUserSignOut} src={user?.photoURL} />
        </span>
        <div className="sidebar_profileInfo">
          <h3>{user?.displayName}</h3>
          <p>#{user?.uid?.substring(0, 5)}</p>
        </div>
        <div className="sidebar_profileIcon">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
