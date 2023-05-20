import React from 'react';
import styled from "styled-components";
/*import Response from "./Response";*/

export default function Bottom({count}) {

    return (
    <ContainerCount>
        <Concluded> {count}/4 CONCLUÍDOS </Concluded>
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
    left: 0;
    z-index: 2;
`;

const Concluded = styled.h1 `
    background-color: #FFFFFF;
    width: 145px;
    height: 22px;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
`;
