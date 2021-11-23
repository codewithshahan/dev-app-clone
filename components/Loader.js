import React from "react";

function Loader({ show }) {
  return show ? (
    <div className="loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : null;
}

export default Loader;
