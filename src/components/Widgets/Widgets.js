import React from "react";
import {
  TwitterTimelineEmbed,
  // TwitterShareButton,
  // TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widget.css";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <SearchIcon className="search-icon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widget-container">
        <h2>What's Happening</h2>
        {/* <TwitterTweetEmbed /> */}
        <TwitterTimelineEmbed
          className="tweet-embed"
          sourceType="profile"
          screenName="chethanbn30"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
