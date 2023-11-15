import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import data from "./../data/lang.json";
import MLang from '../components/MLang';
import { styled } from "styled-components";




const Nav = styled.div`
  position: fixed;
  top: 0;
  right: 0px;
  height: 100vh;
  z-index: 100000000;
  padding-left: 12px;
  width: ${(props)=> props.navOpen ? '40vw':'0px'};
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12px);
  overflow: none;
  transition: 0.5s;

  @media screen and (max-width:640px){
    width: ${(props)=> props.navOpen ? '100vw':'0px'};
  }


`;
const NavLi = styled.div`
    width:200px;
    white-space: nowrap; 
    font-size: 2.5em;
    font-weight: bold;
    margin-left: 20px;
    margin-top: 30px;
    @media screen and (max-width:640px){
      font-size: 4em;
 
  }
    
  img{
    width: 25px;
    height: 25px;
    margin-bottom: 10px;
    @media screen and (max-width:640px){
      
      width: 50px;
      height: 50px;
      margin-bottom: 10px;
    }
  }
   
`
const LangOp =styled.div`
  margin-top: 5vh;
`


const NavContent = styled.div`
  flex-basis: 80%;
  padding-top: 15vh;
  padding-left: 10px;
  position: relative;
  
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
  transition-delay: ${props => (props.navOpen ? "0s" : "0.6s")};
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
      <Nav navOpen={navOpen}>
         

        <NavContent>
        
          
          {
            sources.map((e,i)=>{
                return(
                    <NavLi key={i} >
                        <Link to={e.link} onClick={()=>setNavOpen(false)}>
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
        <LangOp>
          <MLang/>
        </LangOp>
        </NavContent>
      </Nav>
    </>
  );
};

export default Mnav;
