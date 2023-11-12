import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { styled } from "styled-components";


const Wrap = styled.div`
  position: fixed;
  bottom: 10px;
  right: 24px;
  align-items: center;
  z-index: 500;
  opacity: ${(props) => (props ? "1" : "0")}; 
  transition: opacity 3s ease;
  @media screen and (max-width:640px){
    display: none;
  }
`;


const ContentWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

`

const Content = styled.li`
  width: 26px;
  height: 26px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.5);
  color: ${(props) => props.theme.colors.Color};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(12px);
  margin-bottom: 10px;
  text-align: center;
  cursor: pointer;
  font-size: 1.2em;
  img {
    width: 23px;
    height:23px;
  }
  
  
  svg{
    color: ${(props) => props.theme.colors.Color};

  }
  
  
`;


function Aside() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const isActiveClick = () => {
      if (window.scrollY > 350) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener("scroll", isActiveClick);
    return () => {
      window.removeEventListener("scroll", isActiveClick); 
    };
  }, []);




  const moveToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });



  return (
    <>
        <Wrap isActive={isActive}>
          {isActive && 
            <ContentWrap>
              <Content onClick={moveToTop}>
                <FontAwesomeIcon icon={faChevronUp} />
              </Content>
            </ContentWrap>
            }
        </Wrap>
    </>
  );
}

export default Aside;