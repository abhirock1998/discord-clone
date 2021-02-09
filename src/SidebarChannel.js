import React from "react";
import { useDispatch } from "react-redux";
import { setChannelId } from "./features/appSlice";
import "./sidebarChannel.css";
function SidebarChannel({ id, channel }) {
  const dispatch = useDispatch();

  const clicked = () => {
    dispatch(
      setChannelId({
        channelId: id,
        channelName: channel,
      })
    );
  };

  return (
    <div onClick={clicked} className="sidebarChannel">
      <h4>
        <span className="sidebarChannel_hash">#</span>
        {channel}
      </h4>
    </div>
  );
}

export default SidebarChannel;
