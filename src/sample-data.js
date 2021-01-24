import './App.css';

export const data = {
  platforms: [
    { facebook: { name: "nathanf", followers: 1987, difference: 12 } },
    { twitter: { name: "nathanf", followers: 1044, difference: 99 } },
    { instagram: { name: "realnathanf", followers: 11012, difference: 1099 } },
    { youtube: { name: "Nathan F.", followers: 8239, difference: -144 } },
  ],
  events: [
    { platform: "facebook", type: "Page views", amount: 87, modifier: 3 },
    { platform: "facebook", type: "Likes", amount: 52, modifier: -2 },
    { platform: "instagram", type: "Likes", amount: 5462, modifier: 2257 },
    { platform: "instagram", type: "Profile Views", amount: 52150, modifier: 1375 },
    { platform: "twitter", type: "Retweets", amount: 117, modifier: 303 },
    { platform: "twitter", type: "Likes", amoount: 507, modifier: 553 },
    { platform: "youtube", type: "Likes", amount: 107, modifier: -19 },
    { platform: "youtube", type: "Total Views", amount: 1407, modifier: -12 },
  ],
};

function AddPlatform({name, followers, diff, subtype, logo}) {
  return (
    <div className="follower-box-div">
      <div className="follower-top">
      <img src={logo} alt="logo" style={{width:"24px"}}></img>
      <p>{name}</p>
      </div>
      <p>{followers}</p>
      <p>{subtype}</p>
      <p>{diff} Today</p>
    </div>
  )
}

function AddAction({amount, diff, type, logo}) {
  return (
    <div className="actions-box-div">
    <div className="action-box-div-top">
    <p>{type}</p>
    <img src={logo} alt={"logo"} style={{width:"24px"}}></img>
    </div>
    <div className="action-box-div-bot">
    <p>{amount}</p>
    <p>{diff} %</p>
    </div>
    </div>
  )
}

export {
  AddPlatform,
  AddAction
}



data.events.forEach((item) => console.log(item));
