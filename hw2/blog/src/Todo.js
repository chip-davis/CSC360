import React, { useState } from "react";

export default function Todo({ title, content, author }) {

  const dateCreated = new Date(Date.now()).toUTCString();
  const [completed, setCompleted] = useState(false);
  return (
    <div>
      <h3>{title}</h3>

      <div>Created by: {author}</div>
      <div>{content}</div>

      <div>Date created: {dateCreated}</div>

      <div>Date completed: {completed && new Date(Date.now()).toUTCString()}</div>
      <br />

      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />

    </div>
  )
}
