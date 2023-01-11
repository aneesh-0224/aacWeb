import React from "react";
import "./Project.css";
import styled from "styled-components";

export default function Project2({img_url,title,desc}) {
  return (
    <div className="wrap">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={img_url}
              alt="Avatar"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="flip-card-back">
            <Title>{title}</Title>
            <Text>
              {desc}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
const Title = styled.div`
  font-family: "Righteous", cursive;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 48px;
  margin: 8px 0px;
  color: white;
`;
const Text = styled.div`
  font-size: 24px;
  font-family: "Josefin Sans", sans-serif;
  color: white;
  padding: 12px 48px;
  text-align: start;
`;
