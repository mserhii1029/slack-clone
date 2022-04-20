import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../Firebase";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { selectRoomId } from "../features/appSlice";
import { useSelector } from "react-redux";

function Header() {
  const [user] = useAuthState(auth);

  return (
    <>
      <HeaderContainer>
        <HeaderLeft>
          <HeaderAvatar
            style={{ cursor: "pointer" }}
            onClick={() => auth.signOut()}
            src={user?.photoURL}
          />
          <AccessTimeIcon style={{ color: "white", marginRight: "10px" }} />
        </HeaderLeft>
        <HeaderSearch>
          <SearchIcon />
          <input placeholder="Search" />
        </HeaderSearch>
        <HeaderRight>
          <HelpOutlineIcon />
        </HeaderRight>
      </HeaderContainer>
    </>
  );
}

export default Header;

const HeaderContainer = styled.div`
  padding-bottom: 5px;
  display: flex;
  background-color: #3f0f40;
  align-items: center;
  position: sticky;
  position: -webkit-sticky;
  z-index: 1;
  top: 0; /* required */
`;

const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  justify-content: space-between;
`;

const HeaderAvatar = styled(Avatar)`
  margin-left: 5px;
`;

const HeaderSearch = styled.div`
  display: flex;
  flex: 0.4;
  align-items: center;
  padding: 0 50px;
  border: 1px solid gray;
  border-radius: 5px;
  color: white;

  > input {
    background-color: transparent;
    outline: 0;
    border: none;
    align-items: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: white;
    width: 100%;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  color: white;
  flex-direction: flex-end;
  margin-left: auto;
  margin-right: 20px;
`;

// --slack-color: #3f0f40;
//  #421f44
