import React from "react";
import styled from "styled-components";
import firebase from "firebase";
import { db } from "../Firebase";
import { useDispatch } from "react-redux";
import { selectId } from "../features/appSlice";

function SidebarOption({ Icon, title, addChannelOption, id, toggleChannels }) {
  const dispatch = useDispatch();

  const addChannel = () => {
    const ChannelName = prompt("Please add a channel name");

    db.collection("rooms").add({
      name: ChannelName,
    });
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        selectId({
          roomId: id,
        })
      );
    }
  };

  return (
    <SidebarOptionContainer
      onClick={
        addChannelOption
          ? addChannel
          : toggleChannels
          ? () => toggleChannels()
          : selectChannel
      }
    >
      {Icon && (
        <Icon onClick={toggleChannels ? () => toggleChannels() : null} />
      )}
      {Icon ? (
        <h1 onClick={toggleChannels ? () => toggleChannels() : null}>
          {title}
        </h1>
      ) : (
        <h1>
          <span>#</span>
          {title}
        </h1>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 6px;
  cursor: pointer;
  > h1 {
    margin-left: 8px;
    font-weight: 350;
    > span {
      margin-right: 8px;
    }
  }
`;
