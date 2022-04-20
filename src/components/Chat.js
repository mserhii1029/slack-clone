import React from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import Header from "./Header";
import { selectRoomId } from "../features/appSlice";
import { useSelector } from "react-redux";
import ChatInput from "./ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../Firebase";
import Messages from "./Messages";
import { useRef, useEffect } from "react";
import Welcome from "./Welcome";

function Chat() {
  const roomId = useSelector(selectRoomId);
  const chatRef = useRef(null);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView();
  }, [roomId, loading]);

  return (
    <ChatContainer>
      {roomDetails && roomMessages ? (
        <>
          <ChatHeader>
            <HeaderLeft>
              <h4>#{roomDetails?.data().name}</h4>
              <StarBorderOutlinedIcon />
            </HeaderLeft>
            <HeaderRight>
              <InfoOutlinedIcon />
              <h4>Details</h4>
            </HeaderRight>
          </ChatHeader>
          <ChatMessages>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();

              return (
                <Messages
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}
          </ChatMessages>
          <ChatBottom ref={chatRef} />
          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      ) : (
        <Welcome />
      )}
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex: 0.75;
  max-width: calc(0.7+250px);
  overflow-y: scroll;
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const ChatMessages = styled.div``;

const ChatBottom = styled.div`
  padding: 200px;
`;
