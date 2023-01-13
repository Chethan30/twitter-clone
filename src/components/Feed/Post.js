import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar src="https://pbs.twimg.com/profile_images/1611146767545819138/3E124W3n_400x400.jpg"></Avatar>
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-header-text">
            <h3>
              Chethan
              <span>
                <VerifiedIcon className="post-badge" />
              </span>
            </h3>
            <span className="post-username">@Chethan</span>
            <span className="post-time"> · 14h</span>
          </div>
          <div className="header-desc">
            <p>Text goes here!</p>
          </div>
          <img
            src="https://media0.giphy.com/media/qaaSZMnWkufRu/giphy.gif?cid=ecf05e47feu6632wxcjhy41he2nk7ac8f6l4ejnmu313b808&rid=giphy.gif&ct=g"
            alt=""
          />
        </div>
        <div className="post-footer">
          <SignalCellularAltOutlinedIcon fontSize="small" />
          <ModeCommentOutlinedIcon fontSize="small" />
          <RepeatOutlinedIcon fontSize="small" />
          <FavoriteBorderOutlinedIcon fontSize="small" />
          <IosShareOutlinedIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
