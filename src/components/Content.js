import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsStars } from "react-icons/bs";
import { colors } from "../styles/Variable";
import { Tweetbox } from "./Tweetbox";
import { db } from "../firebase";
import { Feedlist } from "./Feedlist";

export const Feed = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    db.collection("feed")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setTweets(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <StyledMain>
      <header className="header">
        <h3>Home</h3>
        <BsStars></BsStars>
      </header>
      <Tweetbox></Tweetbox>
      <Feedlist tweets={tweets}></Feedlist>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  flex: 1;
  border: 1px solid ${colors.colorExtraExtraLightGray};

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    padding: 1rem;
    border-bottom: 1px solid ${colors.colorExtraExtraLightGray};
    background-color: white;
    z-index: 10;

    h3 {
      font-size: 1.2em;
    }

    svg {
      font-size: 1.5em;
    }
  }
`;
