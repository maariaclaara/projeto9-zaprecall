import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Home({ zapRecall }) {
  return (
    <ContainerHome>
      <ImageHome src={logo} alt={logo} />
      <TitleHome>ZapRecall</TitleHome>
      <Button onClick={() => zapRecall()}>Iniciar Recall!</Button>
    </ContainerHome>
  );
}

const ContainerHome = styled.div`
  height: 317px;
  width: 100%;
  margin-top: 148px;
  margin-bottom: 202px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageHome = styled.img`
  width: 136px;
  height: 161px;
`;

const TitleHome = styled.h1`
width: 257px;
height: 59px;
font-family: 'Righteous';
font-weight: 400;
font-size: 36px;
line-height: 45px;
letter-spacing: -0.012em;
color: #FFFFFF;
margin-top: 13px;
text-align: center;
`;

const Button = styled.button`
width: 246px;
height: 54px;
background: #FFFFFF;
border: 1px solid #D70900;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
border-radius: 5px;
font-family: 'Recursive', sans-serif;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #D70900;
text-align: center;
margin-top: 30px;
`;