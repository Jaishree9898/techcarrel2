import React from "react";


function Socialmedia(props) {
  return (
    <>
      <div>
      <a href="https://www.facebook.com/profile.php?id=100063905210503"><img src={props.facebook}></img></a>
      <a href="https://www.instagram.com/techcarrelcompany/"><img src={props.instagram}></img></a>
      <a href="https://www.linkedin.com/company/techcarrel-llp/posts/?feedView=all"><img src={props.linkdin}></img></a>
      </div>
    </>
  )
  
}

export default Socialmedia;