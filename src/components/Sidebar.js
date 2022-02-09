import React from "react";
import styled from "styled-components";
import { colors } from "../styles/Variable";
import twitterLogo from "../images/logo.svg";

import {
  HomeIcon,
  SearchIcon,
  NotificationsIcon,
  MessagesIcon,
  ProfileIcon,
  MoreIcon,
} from "../icon/icon";
import { SideLink } from "./SideLink";
import { UserBox } from "./UserBox";

const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: SearchIcon,
  },
  {
    name: "Notifications",
    icon: NotificationsIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Bookmarks",
    icon: HomeIcon,
  },
  {
    name: "Lists",
    icon: HomeIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];

export const Sidebar = () => {
  return (
    <Wrapper>
      <div>
        <div className="img-container">
          <img src={twitterLogo} alt="logo" />
        </div>
        <nav>
          <ul>
            {sideLinks.map(({ name, icon }) => {
              return <SideLink key={name} name={name} Icon={icon} />;
            })}
          </ul>

          <button className="btn btn-tweet">Tweet</button>
        </nav>
      </div>
      <UserBox>alt taraf</UserBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 275px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0.5rem;
  position: sticky;
  top: 0;

  .img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    margin-top: 0.3rem;
    margin-bottom: 1rem;
    margin-left: 0.3rem;
    border-radius: 50%;
    img {
      width: 36px;
    }

    &:hover {
      background-color: ${colors.colorExtraExtraLightGray};
    }
  }

  .btn-tweet {
    margin-top: 1rem;
    width: 90%;
  }
`;
