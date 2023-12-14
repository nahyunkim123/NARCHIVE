import React from 'react';
import { styled } from 'styled-components';

const ContentWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  text-align: center;
  align-items: center;
`;

const Content = styled.div`
  margin: 160px auto;
  width: 60%;
  height: 300px;
  font-size: 60px;
  span {
    font-size: 40px;
  }
  p {
    font-weight: bold;
    margin-top: 0;
  }
  a {
    width: 100px;
    height: 60px;
    color: white;
    background: #000;
    font-size: 20px;
  }
`;
function NotFound() {
  return (
    <ContentWrap>
      <Content>
        <span>
          친구 집에 초대받은 개발자가 친구 집을 찾을 수 없었던 이유는?
        </span>
        <p>정답 : 404호 라서!</p>
        <a href='/'>메인으로</a>
      </Content>
    </ContentWrap>
  );
}

export default NotFound;
