import React, { useEffect, useState } from "react";
import "./chat.css";
import ChatHeader from "./ChatHeader";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { selectuser } from "./features/userSlice";
import { useSelector } from "react-redux";
import { selectChannelName, selectChannelId } from "./features/appSlice";
import db from "./firbase";
import firebase from "firebase";
import Message from "./Message";

function Chat() {
  const channelID = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const user = useSelector(selectuser);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);

  useEffect(() => {
    if (channelID) {
      db.collection("channels")
        .doc(channelID)
        .collection("message")
        .orderBy("timestamp", "desc")
        .onSnapshot((snap) => {
          setMessage(snap.docs.map((e) => e.data()));
        });
    }
  }, [channelID]);

  const randomID = () => {
    var randomString =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = "";
    for (var i = 0; i < 20; i++)
      result += randomString[Math.floor(Math.random() * randomString.length)];
    return result;
  };

  const sendMessage = (e) => {
    e.preventDefault();
    test();
  };

  const test = () => {
    const rand = randomID();
    db.collection("channels")
      .doc(channelID)
      .collection("message")
      .doc(rand)
      .set({
        message: input,
        docid: rand,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user,
      });
    setInput("");
  };

  const pressed = (e) => {
    db.collection("channels")
      .doc(channelID)
      .collection("message")
      .doc(e)
      .update({
        message: "this message has been deleted",
        docid: e,

        user: user,
      });
  };

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <div className="chat_message">
        {message?.map((message) => {
          return (
            <Message
              key={message?.docid}
              message={message.message}
              user={message.user}
              timestamp={message.timestamp}
              id={message?.docid}
              pressed={pressed}
            />
          );
        })}
      </div>
      <div class="chat_input">
        <AddCircleIcon />
        <form>
          <input
            value={input}
            disabled={!channelID}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage} className="chat_inputButton">
            Send Message
          </button>
        </form>
        <div className="chat_inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;

// return user.uid === message.user.uid ? (
//   <MessageAssembler
//     direction="row"
//     message={message.message}
//     user={message.user}
//     timestamp={message.timestamp}
//     key={message.docid}
//   />
// ) : (
//   <MessageAssembler
//     direction="row-reverse"
//     message={message.message}
//     user={message.user}
//     timestamp={message.timestamp}
//     key={message.docid}
//   />
// );
