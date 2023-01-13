import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>
      </div>

      {/* Tweet Box */}
      <TweetBox />

      {/* Posts on Feed */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      {/* Posts on Feed */}
      {/* Posts on Feed */}
      {/* Posts on Feed */}
      {/* Posts on Feed */}
      {/* Posts on Feed */}
    </div>
  );
}

export default Feed;
