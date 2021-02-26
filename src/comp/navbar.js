import React, { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import styled from 'styled-components';
import {useSpring, a} from 'react-spring/three';






const NavContainer = styled.div`

width: 80vw;
height: 100px;
display: flex;
align-items:center;
justify-content: space-between;
font-size: 100px;
color: white;
position:fixed;
top: 0;
z-index: 200;

`

const Logo= styled.div`




font-size: 24px;
color: white;


`

const NavLink= styled.div`

display: flex;



`

const Link= styled.div`



font-size: 16px;
margin: 0px 10px ;
cursor: pointer;
&:hover{
    
}


`

export const Nav = () => {


    return (
        <NavContainer>
            <Logo>Julian Mayes</Logo>
            <NavLink>
                <Link>about</Link>
                <Link>contact</Link>

            </NavLink>

        </NavContainer>
    )
}