import React from "react";
import styled from "styled-components";
import { LikeIcon, ReplyIcon, ReTweetIcon, ShareIcon } from "../icon/icon";
import { colors } from "../styles/Variable";

export const FeedItem = ({
  avatar,
  displayName,
  username,
  content,
  timestamp,
  image,
}) => {
  return (
    <StyledFeedItem>
      <img className="profile" src={avatar} alt="" />
      <div className="right">
        <div className="head">
          <h4>{displayName}</h4>
          <span>@{username}</span>
          <div className="time-group">
            <div className="dot" />
            <span> {timestamp?.toDate().toLocaleTimeString("tr-TR")}</span>
          </div>
        </div>
        <p className="content">{content}</p>
        {image && <img className="image-content" src={image}></img>}
        <ul>
          <li>
            <div className="group">
              <div className="icon">
                <ReplyIcon />
              </div>
              <span>7</span>
            </div>
          </li>

          <li>
            <div className="group">
              <div className="icon">
                <ReTweetIcon />
              </div>
              <span>7</span>
            </div>
          </li>

          <li>
            <div className="group">
              <div className="icon">
                <LikeIcon />
              </div>
              <span>7</span>
            </div>
          </li>

          <li>
            <div className="group">
              <div className="icon">
                <ShareIcon />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </StyledFeedItem>
  );
};

const StyledFeedItem = styled.article`
  padding: 1rem;
  display: flex;
  border-bottom: 5px solid ${colors.colorExtraExtraLightGray};

  .right {
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;

    .head {
      display: flex;
      align-items: center;

      * {
        margin-left: 0.5rem;
      }

      span {
        color: ${colors.colorLightGray};
      }
    }
  }

  .time-group {
    display: flex;
    margin: auto;
    .dot {
      margin: auto;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: grey;
      margin-left: 0.5rem;
    }
  }

  .content {
    padding-left: 0.5rem;
    color: ${colors.colorDarkGray};
  }

  .image-content {
    border-radius: 8px;
    max-height: 350px;
  }

  ul {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    max-width: 440px;

    .group {
      display: flex;
      align-items: center;

      span {
        color: ${colors.colorLightGray};
      }
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;

      svg {
        fill: ${colors.colorLightGray} !important;
      }

      &:hover {
        background-color: ${colors.colorExtraExtraLightGray};

        svg {
          fill: ${colors.colorBlue} !important;
        }
      }
    }
  }
`;
