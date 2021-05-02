import React from "react";

function Post({ author, date, text }) {
  return (
    <div className="uicontainercomments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            {author}
          </a>
          <div className="metadata">
            <span className="date">{date}</span>
          </div>
          <div className="text">{text}</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
