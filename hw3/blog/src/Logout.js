import React from "react";

export default function Logout({ user, dispatchUser }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); dispatchUser({ type: 'LOGOUT' }) }}>
      Loggin in as: <b>{user}</b>
      <input type="submit" value="Logout" />
    </form>
  );
}
