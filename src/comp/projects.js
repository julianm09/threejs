import React, { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import styled from 'styled-components';
import {useSpring, a} from 'react-spring/three';

const Container = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100vw; 
height: 100vh;
display: flex;
align-items:center;
justify-content: center;


`

const ProjectGrid = styled.div`


width: 60vw; 
height: 200vh;
display: grid;
grid-template-columns: 2fr ;
grid-gap: 100px;


`


const ProjectContainer = styled.div`


display: flex;
align-items:center;
justify-content: center;
font-size: 40px;
color: black;
background: white;
cursor:pointer;
transition: 1s ease;

&:hover{
    transform:scale(1.2);
    transition: 1s ease;

`

export const Projects = ({message}) => {

const [hover, setHover] = useState(false);


    return (
        <Container>
        <ProjectGrid>
            <ProjectContainer></ProjectContainer>
            <ProjectContainer>hey</ProjectContainer>
            <ProjectContainer>hey</ProjectContainer>
            <ProjectContainer>hey</ProjectContainer>
            <ProjectContainer>hey</ProjectContainer>
            <ProjectContainer>hey</ProjectContainer>
        </ProjectGrid>
        </Container>
    )
}