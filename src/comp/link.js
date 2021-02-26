import React, { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import styled from 'styled-components';
import {useSpring, a} from 'react-spring/three';






const LinkContainer = styled.div`


display: flex;
align-items:center;
justify-content: center;
font-size: 12px;
color: white;
position: fixed;

top: 50vh;
cursor: pointer;
z-index: 300;


`

export const Link = ({text, hoverLink, setHoverLink, align}) => {


    return (
        <LinkContainer style={align} onMouseLeave={()=> setHoverLink('')} onMouseOver={()=> setHoverLink(text)}><p>{text}</p></LinkContainer>
    )
}