import React, { useState, useEffect } from 'react'
import './Feed.css'

import FlipMove from 'react-flip-move'
import TweetBox from '../feed/tweet-box/TweetBox'
import Post from './posts/Post'
import db from '../../firebase'

// const tweet = {      
//     displayName: "Khattak01",
//     username: "mskhattak",
//     verified: true,
//     text: "Hey there is a dummy tweet",
//     image: "https://pbs.twimg.com/media/EnQnZK_XUAI-dV6?format=jpg&name=medium",
//     avatar:
//     "https://i.stack.imgur.com/4ziLT.jpg?s=48&g=1",
// }
const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    console.log(posts)
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            <FlipMove>
                {posts.map((post,i) => (
                    <Post
                        key={i}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />
                ))}
            </FlipMove>
            {/* <Post 
            displayName={tweet.displayName}
            username={tweet.username}
            verified={tweet.verified}
            text={tweet.text}
            image={tweet.image}
            avatar={tweet.avatar}
            /> */}
        </div>
    )
}

export default Feed
