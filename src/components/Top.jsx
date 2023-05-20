import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Top() {

    return (
        <ContainerTop>
            <Image src={logo} alt={logo} />
            <Title>ZapRecall</Title>
        </ContainerTop>
    );
}

const ContainerTop = styled.div`
    height: 153px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`  
    width: 52px;
    height: 60px;
    margin-right: 10px;
`;

const Title = styled.h1`
    width: 203px;
    height: 44px;
    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;
    color: #FFFFFF;
    transform: rotate(0.58deg);
    text-align: center;
`;
