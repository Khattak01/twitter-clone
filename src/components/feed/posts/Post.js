import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar, IconButton } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

//forwardRef for react-flip-move
const Post = forwardRef(
    ({ displayName, username, verified, text, image, avatar }, ref) => {
        return (
            <div className="post" ref={ref}>
                <div className="post__avatar">
                    <Avatar src={avatar} />
                </div>
                <div className="post__body">
                    <div className="post__header">
                        <div className="post__headerText">
                            <h3>
                                {displayName}{" "}
                                <span className="post__headerSpecial">
                                    {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                                </span>
                            </h3>
                        </div>
                        <div className="post__headerDescription">
                            <p>{text}</p>
                        </div>
                    </div>
                    <img src={image} alt="" />
                    <div className="post__footer">
                        <IconButton>
                            <ChatBubbleOutlineIcon fontSize="small" />
                        </IconButton>
                        <IconButton>
                            <RepeatIcon fontSize="small" />
                        </IconButton>
                        <IconButton>
                            <FavoriteBorderIcon fontSize="small" />
                        </IconButton>
                        <IconButton>
                            <PublishIcon fontSize="small" />
                        </IconButton>
                    </div>
                </div>
            </div>
        );
    }
);

export default Post;