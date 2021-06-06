import React from "react";

const Post = ({ title, body }) => (
  <div className={"post-wrapper"}>
    <h3>{title}</h3>
    <p>{body}</p>
  </div>
);

export const MemoPost = React.memo(Post);
