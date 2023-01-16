import React from "react";
import styled from "styled-components";
import Event from "./Event";
import Navbar from "../home/Navbar";
import bg from "../../assets/hero/bg.svg";
import Line from "../utilityComponents/Line";
import e1 from './assets/images.png'

export default function Events() {
  return (
    <>
    <Wrap>
      <Navbar />
      <div>
        <Title>Future Events</Title>
        <Line/>
        <Title>Previous Events</Title>
        <div style={{ display: "flex", justifyContent: "space-around",
        paddingBottom:"20px",flexWrap:"wrap",padding:"8px" }}>
          <Event img_url={e1}/>
          <Event img_url={e1}/>
        </div>
      </div>
      </Wrap>
    </>
  );
}

const Title = styled.div`
  font-size: 55px;
  position: relative;
  max-width: 500px;
  margin: 100px auto;
  text-align: center;
  color:white;
  font-family: "Josefin Sans", sans-serif;
  &:before {
    content: " ";
    height: 2px;
    width: 50px;
    background: red;
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    @media (max-width: 500px) {
      display:none;
    }
  }
  &:after {
    content: " ";
    height: 2px;
    width: 50px;
    background: red;
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    @media (max-width: 500px) {
      display:none;
    }
  }
`;
const Wrap = styled.div`
  min-height: 100vh;
  background-image: url("${bg}");
`;