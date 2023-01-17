import React from "react";
import "./Event.css";
export default function Event({img_url}) {
  return (
    <div className="event">
      <div className="card">
        <img src={img_url} alt="Avatar" style={{ width: "100%" }} />
        <div className="container-event">
          <h4>
            <b>AstroCommittee</b>
          </h4>
        </div>
      </div>
    </div>
  );
}
