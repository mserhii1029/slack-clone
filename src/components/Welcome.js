import React from "react";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function Welcome() {
  return (
    <WelcomeContainer>
      <h1>Welcome</h1>
      <WelcomeCenterContainer>
        <h3>How To use?</h3>
        <WelcomeInstructions>
          <p>Click on your Avator Icon on Top Left to Sign Out </p>
          <p>
            Click on Channel's name to go to that channel chat
            <br />
            <span style={{ fontSize: "13px" }}>
              {" "}
              For Example:- Click on #Javascript Guys to visit that channel{" "}
            </span>
          </p>
          <p>
            Click on <AddIcon style={{ position: "relative", top: "5px" }} />{" "}
            Add Channel To Create a Channel
          </p>
          <p>
            Click on{" "}
            <ExpandLessIcon style={{ position: "relative", top: "5px" }} />{" "}
            Channels to toggle channels name
          </p>
        </WelcomeInstructions>
      </WelcomeCenterContainer>
    </WelcomeContainer>
  );
}

export default Welcome;

const WelcomeContainer = styled.div`
  margin-top: 100px;

  > h1 {
    text-align: center;
    color: #3f0f40;
    text-transform: uppercase;
    font-size: 40px;
  }
`;

const WelcomeCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WelcomeInstructions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
