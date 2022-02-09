import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/Variable";
import { EmojiIcon, Gificon, ImageIcon, PollIcon, ScheduleIcon } from "../icon/icon";
import {AiOutlineGlobal} from 'react-icons/ai'
import {db} from "../firebase";
import firebase from 'firebase/compat/app';


export const Tweetbox = () => {

    const [content,setContent]=useState()

    const sendTweet = () => {
        if(content !==''){
            db.collection('feed').add({
                avatar:'https://pbs.twimg.com/profile_images/56108060/3_1024x768_normal.jpg',
                displayName:'abdulkadir mete',
                username:'shigaki',
                content,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                
            })
        }
    }

  return (
    <StyledDiv>
      <div className="content">
        <img
          src="https://pbs.twimg.com/profile_images/56108060/3_1024x768_normal.jpg"
          alt="Profile"
        />
        <div className="group">
          <textarea value={content} onChange={(e) => {setContent(e.target.value)}} placeholder="What's Happening"/>
          <div className="send">
            <div className="icons">
                <ImageIcon></ImageIcon>
                <Gificon></Gificon>
                <PollIcon></PollIcon>
                <ScheduleIcon></ScheduleIcon>
                <EmojiIcon></EmojiIcon>
                
            </div>
            <button type="button" onClick={sendTweet} className="btn">Tweet</button>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  .content {
    padding: 1rem;
    display: flex;
    border: 1px solid ${colors.colorExtraExtraLightGray};

  }

  .group {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    margin-top: .8rem;
    width: 100%;

    textarea{
        border: none;
        resize:none;      
        overflow: auto;  
        font-size: 1.2rem;
        margin-bottom: 1rem;
        overflow: hidden;
        border-bottom: 1px solid ${colors.colorExtraLightGray};
        position: relative;

        &:focus{
            outline:none;
        }
        
    }

    

    .send{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .icons{

            svg{
                margin-right: .8rem;
                width: 24px !important;
                height:24px !important;
                fill:${colors.colorBlue} !important;
            }
            
        }

        button{
            padding: .6rem 1rem;
        }

    }
  }

  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }
`;
