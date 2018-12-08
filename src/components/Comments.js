import React, { Component } from "react";

class Comments extends Component {
  render() {
    const comments = this.props.comments[this.props.page] || [];
    return (
      <div>
        {comments.map((comment, i) => {
          return (
            <div key={i}>
              {comment.text}
              <br />
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Comments;
