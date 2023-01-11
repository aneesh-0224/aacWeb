import React from "react";
import "./Member.css";
export default function Member({img_url}) {
  return (
    <div class="cardM">
      <img src={img_url} alt="John" style={{backgroundSize:"cover"}}/>
      <h2>Aneesh Kulkarni</h2>
      <p class="titleM">Website Coordinator</p>
      <a href="#" style={{ marginRight: "20px" }}>
        <i class="fa fa-instagram"></i>
      </a>
      <a href="#">
        <i class="fa fa-linkedin"></i>
      </a>
    </div>
  );
}
