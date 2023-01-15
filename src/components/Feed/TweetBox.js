import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import db from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

function TweetBox() {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const sendTweet = async (event) => {
    // event.preventDefault();
    if (image.length === 0 && message.length === 0) {
      return;
    }

    var date = new Date();

    let tweet = {
      displayName: "Stranger",
      username: "get-to-know-me",
      verified: "true",
      time: String(date.getHours()),
      text: message,
      avatar:
        "https://i.pinimg.com/564x/67/e5/bb/67e5bba8b7e5d23c035bb7b0595581d0.jpg",
      image: image,
    };
    await addDoc(collection(db, "posts"), tweet);

    setMessage("");
    setImage("");
  };

  return (
    <div className="tweet-box">
      <form action="">
        <div className="tweetBox-container">
          <div className="tweetBox-input">
            <a
              href="https://twitter.com/chethanbn30"
              target="_blank"
              rel="noreferrer"
            >
              <Avatar src="https://pbs.twimg.com/profile_images/1611146767545819138/3E124W3n_400x400.jpg" />
            </a>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="What's happeneing?"
            />
          </div>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Have a GIF? Paste URL Here"
          />
        </div>
        <Button onClick={sendTweet} className="tweetBox-tweet ">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
