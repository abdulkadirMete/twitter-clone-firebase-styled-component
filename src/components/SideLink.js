import React from "react";
import styled from "styled-components";
import { colors } from "../styles/Variable";

export const SideLink = ({ name, Icon }) => {
  return (
    <StyledLi>
      <a href={name.toLowerCase()}>
        <div className="inline">
          <div className="group">
            <span className="icon">
              <Icon></Icon>
            </span>
            <span className="name">{name}</span>
          </div>
        </div>
      </a>
    </StyledLi>
  );
};

const StyledLi = styled.li`
  .inline {
    border-radius: 1rem;
    margin-bottom: 1rem;
    padding: 0.2rem 0.4rem;
    &:hover {
      background-color: ${colors.colorExtraExtraLightGray};

      .icon svg path {
        fill: ${colors.colorBlue};
        stroke: ${colors.colorBlue};
      }

      a {
        color: ${colors.colorBlue};
      }
    }
  }

  .group {
    display: flex;
    align-items: center;
    justify-content: center;

    .name {
      margin-left: 1rem;
      font-size: 1.2em;
    }
  }

  .inline {
    display: inline-block;
  }
`;
