import React from "react";
import { Tweet } from "react-twitter-widgets";
import { FeedItem } from "./FeedItem";

export const Feedlist = ({ tweets }) => {
  return (
    <div>
      {tweets.map((tweet, index) => {
        return <FeedItem {...tweet} key={index}></FeedItem>;
      })}
    </div>
  );
};
