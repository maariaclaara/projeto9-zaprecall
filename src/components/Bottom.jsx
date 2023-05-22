import React from 'react';
import styled from "styled-components";


export default function Bottom({ counter }) {

    return (
    <ContainerCount>
        <Divcounter>
            <Concluded data-test="footer"> {counter}/8 CONCLUÍDOS </Concluded>
        </Divcounter>
    </ContainerCount>
    );
}

const ContainerCount = styled.div `
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    top: auto;
    z-index: 2;
`;

const Divcounter = styled.div `
    width: 200px;
    height: 22px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Concluded = styled.h1 `
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333; 
`;
