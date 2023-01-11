import React from "react";
import "./Project.css";
import styled from "styled-components";

export default function Project2({img_url}) {
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
            <Title>John Doe</Title>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates et sit, optio vel illum nesciunt quos minus neque,
              pariatur quidem esse harum maxime. Enim incidunt quibusdam eveniet
              ducimus, nemo praesentium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Odio similique voluptatibus cupiditate dolores
              sequi neque in ipsam error nam provident, illum hic asperiores,
              quas sit aliquam quo facilis totam nostrum. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Exercitationem architecto hic
              quam officiis libero sint dolorum velit veniam magnam eum, sed
              fuga tempore mollitia voluptatum, vel voluptatem ab saepe rem?
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
