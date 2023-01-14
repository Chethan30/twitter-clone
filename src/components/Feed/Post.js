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
        <Avatar src={avatar}></Avatar>
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-header-text">
            <h3>
              {displayName}
              <span>{verified && <VerifiedIcon className="post-badge" />}</span>
            </h3>
            <span className="post-username">@{username}</span>
            <span className="post-time"> · 14h</span>
          </div>
          <div className="header-desc">
            <p>{text}</p>
          </div>
          <img src={image} alt="" />
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
