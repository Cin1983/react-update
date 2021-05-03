import React from "react";

const Post =props => {
  return (
    <div className="fullComment">
      <a href="/"> 
        <img alt="/" src="/"></img> {props.name} 
      </a><span> {props.date}</span>
      <div className="comment">{props.text}</div>
     
    </div>
  );
};

export default Post;
