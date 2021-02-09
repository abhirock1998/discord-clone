import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Chat from "./Chat";
import { selectuser, login } from "./features/userSlice";
import Sidebar from "./Sidebar";
import Login from "./Login";
import DropDownAssembler from "./dropdown-assemble";
import { auth } from "./firbase";
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectuser);
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          verified: user.emailVerified,
          uid:user.uid,
          photoURL:user.photoURL
        })
      );
    });
  }, [dispatch]);
  return (
    <div className="app">
      {user ? (
        <>
          {" "}
          <DropDownAssembler show={show} toggle={toggle} />
          <Sidebar onclick={toggle} />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
