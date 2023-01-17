import React from "react";
import styled from "styled-components";
import Member from "./Member";
import Navbar from "../home/Navbar";
import aneesh from './assets/aneesh.jpeg'

export default function Team() {
  return (
    <>
      <Navbar />
      <div style={{paddingBottom:"20px"}}>
        <Title>Our Team</Title>

        <div
          style={{ display: "flex", marginTop: "60px",justifyContent:"space-around", 
          marginBottom: "60px",flexWrap:"wrap",padding:"15px"}}
        >
          <Member img_url={aneesh}/>
          <Member img_url={aneesh}/>
        </div>

        <div style={{ display: "flex",justifyContent:"space-around", marginTop: "60px",flexWrap:"wrap",padding:"15px"}}>
          <Member img_url={aneesh}/>
          <Member img_url={aneesh}/>
          <Member img_url={aneesh}/>
        </div>
      </div>
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
  font-size: 40px;
  margin: 8px 0px;
`;
