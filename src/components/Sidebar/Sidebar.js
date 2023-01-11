import React from "react";
import SidebarOptions from "./SidebarOptions";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PortraitIcon from "@mui/icons-material/Portrait";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter Icon */}
      <TwitterIcon />

      {/* Sidebar Options */}
      <SidebarOptions text={"Home"} Icon={HomeIcon} active={true} />
      <SidebarOptions text={"Explore"} Icon={TagIcon} />
      <SidebarOptions text={"Notifications"} Icon={NotificationsIcon} />
      <SidebarOptions text={"Messages"} Icon={MailOutlineIcon} />
      <SidebarOptions text={"Profile"} Icon={PortraitIcon} />
      <SidebarOptions text={"More"} Icon={MoreHorizIcon} />

      {/* Tweet Button */}
      <Button variant="outlined" className="sidebar-tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
