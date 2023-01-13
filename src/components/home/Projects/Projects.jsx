import React from "react";
import styled from "styled-components";
import Project from "./Project";
import constellation from './assets/constellation.JPG'
import solar from './assets/solar.jpg'
import constellationDescription from "./utils/constellation";
import solarTracker from "./utils/solarTracker";
export default function Projects() {
  return (
    <div>
      <Title>Projects</Title>

      <Project img_url={constellation} title="Constellation Projector Lamp" desc={constellationDescription()}/>
      <Project img_url={solar} title="Solar Tracker" desc={solarTracker()}/>
      <Project img_url={constellation} title="ABCD" desc={"No description as of now"}/>
    </div>
  );
}

const Title = styled.div`
  font-size: 60px;
  position: relative;
  max-width: 500px;
  margin: 100px auto;
  text-align: center;
  color: white;
  &:before {
    content: " ";
    height: 2px;
    width: 130px;
    background: red;
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
  }
  &:after {
    content: " ";
    height: 2px;
    width: 130px;
    background: red;
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
  }
`;
