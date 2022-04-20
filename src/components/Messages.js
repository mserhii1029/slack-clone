import React from "react";
import styled from "styled-components";

function Messages({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <img src={userImage} />
      <MessageInfo>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Messages;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  /* flex: 0.75; */
  /* padding: 10px; */
  margin-left: 20px;
  /* background-color: pink; */
  > img {
    height: 50px;
    object-fit: contain;
    border-radius: 8px;
    position: relative;
    bottom: 10px;
  }
`;
const MessageInfo = styled.div`
  padding-left: 10px;
  display: flex;
  /* background-color: yellow; */
  flex-direction: column;
  justify-content: center;

  > h4 {
  }
  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 10px;
    font-size: 10px;
  }
  > p {
    position: relative;
    bottom: 35px;
  }
`;
