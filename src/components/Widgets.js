import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { colors } from "../styles/Variable";
import { Timeline } from "react-twitter-widgets";

export const Aside = () => {
  return (
    <StyledAside>
      <div className="search">
        <AiOutlineSearch className="icon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="timeline">
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "shigaki",
          }}
          options={{
            height: "700px",
          }}
        />
      </div>
    </StyledAside>
  );
};

// prettier-ignore

const StyledAside = styled.aside`
  width: 350px;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  .search {
    display: flex;
    padding: .8rem;
    background-color: ${colors.colorExtraLightGray};
    border-radius:5rem;
    max-height: 40px;
    align-items: center;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .3);

    &:focus-within{
      border: 1px solid ${colors.colorBlue};

      .icon{
        color:${colors.colorBlue}
      }
    }

    .icon {
      font-size: 1.5em;
      color:${colors.colorLightGray}
    }

    input{
      margin-left: 1rem;
      border: none;
      background-color: ${colors.colorExtraLightGray};

      &:focus{
        outline:none;

      }
    }

  }
    

  .timeline{
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
      
`;
