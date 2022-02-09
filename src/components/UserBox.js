import React from "react";
import styled from "styled-components";
import { colors } from "../styles/Variable";

export const UserBox = () => {
  return (
    <StyledDiv>
      <img
        className="profile"
        src="https://pbs.twimg.com/profile_images/56108060/3_1024x768_normal.jpg"
        alt="Profile"
      />
      <div className="info">
        <span>Kadir Mete</span>
        <span>akadirmete@...</span>
      </div>

      <div className="dots">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.5rem 0.3rem;
  margin-bottom: 2rem;

  &:hover {
    background-color: ${colors.colorExtraExtraLightGray};
    border-radius: 2rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
  }

  .dots {
    display: flex;

    .item {
      width: 4px;
      height: 4px;
      background: black;
      border-radius: 50%;
      margin-left: 0.2rem;
    }
  }
`;
