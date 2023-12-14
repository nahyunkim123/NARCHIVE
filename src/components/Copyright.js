import React from 'react';
import { styled } from 'styled-components';

const TxtWrap = styled.div`
  width: 100vw;
  height: 30px;
  position: relative;
  background: ${(props) => props.theme.colors.BgColor};
  color: ${(props) => props.theme.colors.Color};
`;

const Txt = styled.div`
  padding-bottom: 10px;
  text-align: center;
`;
function Copyright() {
  return (
    <TxtWrap>
      <Txt>©2023 Nahyun Kim All rights reserved</Txt>
    </TxtWrap>
  );
}

export default Copyright;
