import { Avatar, Button } from "@mui/material";
import React from "react";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweet-box">
      <form action="">
        <div className="tweetBox-input">
          <Avatar src="https://pbs.twimg.com/profile_images/1611146767545819138/3E124W3n_400x400.jpg" />
          <input type="text" placeholder="What's happeneing?" />
        </div>
        <Button className="tweetBox-tweet ">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
