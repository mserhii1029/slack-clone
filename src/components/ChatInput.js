import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { db, auth } from "../Firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatInput({ channelId, channelName, chatRef }) {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Udit Takkar",
      userImage: user.photoURL,
    });

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button onClick={sendMessage} hidden type="submit">
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  margin-bottom: 0px;
  > form {
    display: flex;
    justify-content: center;
    position: relative;
    > input {
      width: 60%;
      position: fixed;
      bottom: 30px;
      padding: 20px;
      border: 1px solid lightgray;
      outline: none;
    }
    > Button {
      display: none !important;
    }
  }
`;
