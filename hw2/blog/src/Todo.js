import React, { useState } from "react";

export default function Todo({ title, content, author }) {

  const dateCreated = new Date(Date.now()).toUTCString();
  const [completed, setCompleted] = useState(false);

  // function handleComplete(evt) {
  //   if ({ completed }) {
  //     console.log("set to true")
  //     setCompleted(true)
  //   } else {
  //     console.log("set to false")
  //     setCompleted(false)
  //   }
  // }


  const toggleChecked = () => setCompleted(value => !value);

  return (
    <div>
      <h3>{title}</h3>

      <div>Created by: {author}</div>
      <div>Description: {content}</div>

      <div>Date created: {dateCreated}</div>

      <div>Date completed: {completed && new Date(Date.now()).toUTCString()}</div>
      <br />

      <div>Complete? <input type="checkbox" onChange={toggleChecked} /> </div>

    </div>
  )
}
