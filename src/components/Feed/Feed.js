import React, { useEffect, useState } from "react";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   // db.collection("posts").onSnapshot((snapshot) => {
  //   //   // setPosts(snapshot.docs.map((doc) => doc.data()));
  //   //   console.log(snapshot);
  //   // });
  // }, []);
  const getPosts = async () => {
    await getDocs(collection(db, "posts")).then((snapshot) =>
      setPosts(snapshot.docs)
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>
      </div>

      {/* Tweet Box */}
      <TweetBox />

      {/* Posts on Feed */}
      {console.log("posts", [...posts])}
      {[...posts].reverse().map((post, index) => (
        <Post
          key={index}
          displayName={post.data().displayName}
          username={post.data().username}
          verified={post.data().verified}
          text={post.data().text}
          avatar={post.data().avatar}
          image={post.data().image}
          time={post.data().time}
        />
      ))}
      {/* <Post
        displayName="Chethan"
        username="chethanbn30"
        verified={true}
        text="text goes here"
        avatar="https://pbs.twimg.com/profile_images/1611146767545819138/3E124W3n_400x400.jpg"
        image="https://media0.giphy.com/media/qaaSZMnWkufRu/giphy.gif?cid=ecf05e47feu6632wxcjhy41he2nk7ac8f6l4ejnmu313b808&rid=giphy.gif&ct=g"
      /> */}

      {/* Posts on Feed */}
      {/* Posts on Feed */}
      {/* Posts on Feed */}
      {/* Posts on Feed */}
      {/* Posts on Feed */}
    </div>
  );
}

export default Feed;
