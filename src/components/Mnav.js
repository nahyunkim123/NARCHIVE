import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { useSelector } from "react-redux";
import data from "./../data/lang.json";
import MLang from '../components/MLang';
import UseAnimations from "react-useanimations";
import menu2 from 'react-useanimations/lib/menu2';



const Nav = styled.div`
  position: fixed;
  top: 0;
  right: 0px;
  height: 100%;
  z-index: 1000;
  padding-left: 10px;
  width: 0;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12px);
  overflow: none;
  transition: 0.5s;
  display: flex;


`;
const NavLi = styled.div`

    font-size: 2rem;
    font-weight: bold;
    display: flex;



  img{
    width: 25px;
    height: 25px;
    margin-bottom: 10px;
  }
  &:nth-child(1){
    bottom: 0;
  }


   
`


const NavContent = styled.div`
  flex-basis: 80%;
  display: flex;
  padding-top: 70px;
  padding-left: 10px;
  flex-wrap: wrap;
  
`;

const HamWrap = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 50000;
`

const Hamburger = styled.div` 
 
  border: 1px solid #000;
  width: 40px;
  height: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  position: relative;
  cursor: pointer;

  
`;

const Line = styled.div`
    width: 60%;
    height: 2px;
    margin-left: 7px;
    background-color: #000;
    position: absolute;
    border-radius: 10px;
    transform-origin: 50%;
    transition: all 0.4s ease-in-out,
    transform 0.4s ease-in-out 0.4s;

&:nth-child(1) {
  top: 12px;
  transform: ${props => props.navOpen ? 'translateY(7px) rotate(405deg)' : 'translate(0, 0) rotate(0)'};

}

&:nth-child(2) {  
  top: 18px;
  opacity: ${props => props.navOpen ? '0' : '1'};
}

&:nth-child(3) {
  top: 25px;
  transform: ${props => props.navOpen ? 'translateY(-6px) rotate(-405deg)' : 'translate(0, 0) rotate(0)'};
}
`;





const Kor = styled.div``;

const Eng = styled.div``;

const Rus = styled.div``;

function Mnav ({toggleNav,setNavOpen,navOpen}) {
 



  const [sources, setSources] = useState([]);
  const language = useSelector((state) => state.language);
  
  useEffect(() => {
    setSources(data.Nav);
  }, []);
  

  return (
    <>

    <HamWrap>
        <Hamburger onClick={toggleNav} >
            
          <Line navOpen={navOpen}></Line>
          <Line navOpen={navOpen}></Line>
          <Line navOpen={navOpen}></Line>
        
        </Hamburger>
      </HamWrap>
      <Nav style={{ width: navOpen ? "40%" : "0" }}>
         

        <NavContent>
        
          
          {
            sources.map((e,i)=>{
                return(
                    <NavLi key={i} >
                        <Link to={e.link}>
                            {language === "ko" && e.ko_nav}
                            {language === "en" && e.en_nav}
                            {language === "cn" && e.cn_nav}
                            {language === "jp" && e.jp_nav}
                    <img src={`images/arrow_up_right_icon.png`} alt="arrow" />
                   </Link>
                    </NavLi>
                )
            })
        }
         
        <MLang/>
        </NavContent>
      </Nav>
    </>
  );
};

export default Mnav;
