import React from "react";
import "./Gallery.css";
import styled from "styled-components";
import Navbar from "../home/Navbar";
import bg from "../../assets/hero/bg.svg";

import i1 from './assets/1.jpeg'
import i2 from './assets/2.jpeg'
import i3 from './assets/3.jpeg'
import i4 from './assets/4.jpeg'
import i5 from './assets/5.jpeg'
import i6 from './assets/6.jpeg'

export default function Gallery() {
  return (
    <>
    <Wrap>
      <Navbar />
      <div style={{paddingBottom:"15px"}}>
        <Title>Images from Astrophotography Sig</Title>
        <div className="row">
          <div className="column">
            <img src={i1} style={{ border: "thick solid white" }} alt="pics from astrophotography"/>
            <img src={i2} style={{ border: "thick solid white" }} alt="pics from astrophotography"/>
            <img src={i3} style={{ border: "thick solid white" }} alt="pics from astrophotography"/>
            <img src={i4} style={{ border: "thick solid white" }} alt="pics from astrophotography"/>
            <img src={i5} style={{ border: "thick solid white" }} alt="pics from astrophotography"/>
            <img src={i6} style={{ border: "thick solid white" }} alt="pics from astrophotography"/>
            <img src={i1} style={{ border: "thick solid white" }} alt="pics from astrophotography"/>
          </div>
          <div className="column">
            <img src={i2} style={{ border: "thick solid white" }} alt="pics from astrophotography"/>
            <img src={i3} style={{ border: "thick solid white" }} alt="pics from astrophotography"/>
            <img src={i4} style={{ border: "thick solid white" }} alt="pics from astrophotography"/>
            <img src={i5} style={{ border: "thick solid white" }} alt="pics from astrophotography"/>
            <img src={i6} style={{ border: "thick solid white" }} alt="pics from astrophotography"/>
            <img src={i1} style={{ border: "thick solid white" }} alt="pics from astrophotography"/>
          </div>
        </div>
      </div>
      </Wrap>
    </>
  );
}
const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px;
  border-left: 2px solid grey;
  font-family: "Righteous", cursive;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 32px;
  margin: 8px 0px;
  color:white
`;
const Wrap = styled.div`
  min-height: 100vh;
  background-image: url("${bg}");
`;