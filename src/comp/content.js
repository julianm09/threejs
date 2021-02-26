import React, { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import styled from 'styled-components';
import {useSpring, a} from 'react-spring/three';






const ContentContainer = styled.div`


display: flex;
align-items:center;

font-size: 100px;
color: white;

position: fixed;
top:calc(50%);
left:calc(100vw-50%);
z-index:300;
&:hover{
    color: red;
}

`

export const Content = ({text, hoverLink}) => {


    return (
        <ContentContainer>{hoverLink}</ContentContainer>
    )
}