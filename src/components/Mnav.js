import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import data from "./../data/lang.json";
import MLang from '../components/MLang';
import { styled } from "styled-components";


const NavWrap = styled.div`
  width: 100vw;
  border-bottom: 1px solid #eee;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12px);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10000000;
  transition: all 0.3s; 

  @media screen and (min-width:640px){
    display: none;
  }
  
`
const ContainerWrap = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;


`

const Content = styled.div`
  cursor: pointer;
  a{
    color: ${(props) => props.theme.colors.Color};
  }

`;

const Nav = styled.div`
  position: fixed;
  top: 0;
  right: -20px;
  height: 100%;
  z-index: 1000000;
  width: ${(props)=> props.navOpen ? '50vw':'0vw'};
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12px);
  transition: 0.5s;

  @media screen and (max-width:640px){
    padding: 10px;
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
      margin-left: 50px;
      font-size: 3em;
 
  }
    
  img{
    width: 25px;
    height: 25px;
    margin-bottom: 10px;
    @media screen and (max-width:640px){
      
      width: 30px;
      height: 30px;
      margin-bottom: 10px;
    }
  }
   
`
const LangOp =styled.div`
  margin-top: 70px;
  font-size: 1em;
  margin-left: 20px;
`


const NavContent = styled.div`
  flex-basis: 100%;
  padding-top: 15vh;
  padding-left: 10px;
  position: relative;
  
`;

const HamWrap = styled.div`

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
  justify-content: center;
  
  
`;

const Line = styled.div`
    width: 60%;
    height: 2px;
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
  const [isActive, setIsActive] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsActive(true);
    } else {
      setIsActive(false); 
    }
  };

  useEffect(() => {
    setSources(data.Nav);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

  return (
    <>
    <NavWrap style={{ height: isActive ? '50px' : '90px' }}>
      <ContainerWrap>
          <Content  style={{ fontSize: isActive ? '20px' : '40px' }}>
            <Link to="/">NARCHIVE</Link>
          </Content>
          <HamWrap>
              <Hamburger onClick={toggleNav} >
                  
                <Line navOpen={navOpen}></Line>
                <Line navOpen={navOpen}></Line>
                <Line navOpen={navOpen}></Line>
              
              </Hamburger>
          </HamWrap>
      </ContainerWrap>
     </NavWrap>

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
