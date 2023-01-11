import React from "react";
import Hero from "./Hero";
import Sigs from "./Sigs/Sigs";
import Projects from "./Projects/Projects";
import Navbar from "./Navbar";
import styled from "styled-components";
import bg from "../../assets/hero/bg.svg";
function home() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Sigs />
      <Projects />
    </Container>
  );
}
const Container = styled.div`
  min-height: 100vh;
  background-image: url("${bg}");
`;
export default home;
