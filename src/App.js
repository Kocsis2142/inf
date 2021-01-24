import logo from './logo.svg';
import React from 'react';
import './App.css';
import {AddPlatform, AddAction} from './sample-data';
import {data} from './sample-data'
import facebookIcon from './icons/facebookicon.png'
import twitterIcon from './icons/twittericn.png'
import instagramIcon from './icons/instagramicon.png'
import youtubeIcon from './icons/youtubeicon.png'

function App() {
  
  return (
    <div className="container">
      <div className="header">
      <h1>Social Media Dashboard</h1>
      <p>Dark Mode</p> <img></img>
      </div>
      <h4>Total Followers: {data.platforms[0].facebook.followers + data.platforms[1].twitter.followers + data.platforms[2].instagram.followers + data.platforms[3].youtube.followers}</h4>
      <div className="followers">
      <div className="follower-box">
      <AddPlatform 
      name={data.platforms[0].facebook.name} 
      followers={data.platforms[0].facebook.followers}
      diff={data.platforms[0].facebook.difference}
      subtype={"FOLLOWERS"}
      logo={facebookIcon}/>
      </div>
      <div className="follower-box">
      <AddPlatform 
      name={data.platforms[1].twitter.name} 
      followers={data.platforms[1].twitter.followers}
      diff={data.platforms[1].twitter.difference}
      subtype={"FOLLOWERS"}
      logo={twitterIcon}/>
      </div>
      <div className="follower-box">
      <AddPlatform 
      name={data.platforms[2].instagram.name} 
      followers={data.platforms[2].instagram.followers}
      diff={data.platforms[2].instagram.difference}
      subtype={"FOLLOWERS"}
      logo={instagramIcon}/>
      </div>
      <div className="follower-box">
      <AddPlatform 
      name={data.platforms[3].youtube.name} 
      followers={data.platforms[3].youtube.followers}
      diff={data.platforms[3].youtube.difference}
      subtype={"SUBSCRIBERS"}
      logo={youtubeIcon}/>
      </div>
      </div>
      <h1 className="overview-title">Overview - Today</h1>
      <div className="actions">
      {data.events.map(actual =>
      <AddAction 
      logo={actual.platform === "facebook" ? facebookIcon
      : actual.platform === "twitter" ? twitterIcon 
      : actual.platform === "instagram" ? instagramIcon
      : actual.platform === "youtube" ? youtubeIcon : ""}
      type={actual.type}
      amount={actual.amount}
      diff={actual.modifier}/>)}
      </div>
    </div>
  );
}

export default App;
