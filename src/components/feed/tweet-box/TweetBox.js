import { Avatar,Button, Input } from '@material-ui/core'
import React,{useState} from 'react'
import './TweetBox.css'
import db from '../../../firebase'

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = (e) =>{
        e.preventDefault();

        db.collection("posts").add({
          displayName: "msKhattak",
          username: "Khattak01",
          verified: true,
          text: tweetMessage,
          image: tweetImage,
          avatar:
            "https://i.stack.imgur.com/4ziLT.jpg?s=48&g=1",
        });
        
        setTweetMessage("")
        setTweetImage("")
    }
    return (
        <div className="tweet-box">
            <form>
                <div className="tweet-box__input">
                    <Avatar className="tweet-box__avatar" src="https://i.stack.imgur.com/4ziLT.jpg?s=48&g=1"/>
                    <Input value={tweetMessage} onChange={e => setTweetMessage(e.target.value)} className="tweet-box__input-field" placeholder="what's happening" />
                </div>
                <Input value={tweetImage} onChange={e => setTweetImage(e.target.value)} className="tweet-box__input-field-image" placeholder="Optional: Enter image URL" />
                <Button onClick={sendTweet} className="tweet-box__tweet-button">Tweet</Button>
            </form>
        </div>
    )
}
export default TweetBox
