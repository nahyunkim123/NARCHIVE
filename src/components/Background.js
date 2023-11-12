import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 12%;
  transition: opacity 3s ease;
  opacity: ${(props) => (props.isActive ? "0" : "1")};
  right: 5%;
  justify-content: center;
  align-items: center;
  font-size: 15vw;
  font-weight: bold;
  @media screen and (max-width:640px){
      display: none;
  }
`;

const Txt = styled.p`
  color: ${(props) => props.theme.colors.Secondary};
  font-family: 'Lexend', sans-serif;

`;

function Background() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2500) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Content isActive={isActive}>
      <Txt>THIS IS  NARCHIVE</Txt>
    </Content>
  );
}

export default Background;
