import React from 'react';
import { styled } from 'styled-components';

const Content = styled.div`
  text-align: center;
  font-family: 'Lexend', sans-serif;
  font-size: 8vw;
  font-weight: bold;
`;

function Title({ text }) {
  return (
    <>
      <Content>{text}</Content>
    </>
  );
}

export default Title;
