import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";

export default () => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const comments = useSelector((state) => state);

  const submitForm = (e) => {
    e.preventDefault();
    setComment("");
    dispatch(actions.saveComment(comment));
  };

  const handleFetch = () => {
    dispatch(actions.fetchComments());
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <h4>comment</h4>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div>
          <button> submit comment</button>
        </div>
      </form>
      <button className="fetch-comments" onClick={handleFetch}>
        {"fetch comments"}
      </button>
    </div>
  );
};
