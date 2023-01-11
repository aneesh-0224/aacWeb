import React from "react";
import styled from "styled-components";
import Project from "./Project";
import p1 from './assets/constellation.JPG'

export default function Projects() {
  return (
    <div>
      <Title>Projects</Title>

      <Project img_url={p1}/>
      <Project img_url={p1}/>
      <Project img_url={p1}/>
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
