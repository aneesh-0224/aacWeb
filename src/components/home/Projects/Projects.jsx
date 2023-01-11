import React from "react";
import styled from "styled-components";
import Project from "./Project";
import constellation from './assets/constellation.JPG'
import solar from './assets/solar.jpg'

export default function Projects() {
  return (
    <div>
      <Title>Projects</Title>

      <Project img_url={constellation} title="Constellation Projector Lamp" desc={" Aim is To assemble a Projector Lamp that projects constellations of your choice onto a surface via an app connected to a microcontroller in the lamp assembly through a bluetooth module.\n Duration - 1 Sem● Participants - 5-6 Juniors"}/>
      <Project img_url={solar} title="Solar Tracker" desc="This project intends to develop a solar tracker so that the solar panel or heat receiving surface is always aligned towards the sun. This aligning can easily lead to atleast 20 - 30% extra energy absorption and hence more efficient usage of solar energy"/>
      <Project img_url={constellation} title="ABCD" desc="Description to be given"/>
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
