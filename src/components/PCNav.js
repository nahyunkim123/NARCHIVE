import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import data from './../data/lang.json';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid #eee;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12px);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000000;
  transition: all 0.3s;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const ContainerWrap = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  flex-basis: 33%;
  cursor: pointer;
  a {
    color: ${(props) => props.theme.colors.Color};
  }
`;

const NavList = styled.div`
  display: flex;
  flex-basis: 66%;
  justify-content: space-around;
  a {
    color: ${(props) => props.theme.colors.Color};
  }
`;

function PCNav() {
  const [sources, setSources] = useState([]);
  const language = useSelector((state) => state.language);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setSources(data.Nav);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

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
          <Content style={{ fontSize: isActive ? '20px' : '40px' }}>
            <Link to='/'>NARCHIVE</Link>
          </Content>

          {sources.map((e, i) => {
            return (
              <NavList key={i}>
                <Link to={e.link}>
                  {language === 'ko' && e.ko_nav}
                  {language === 'en' && e.en_nav}
                  {language === 'cn' && e.cn_nav}
                  {language === 'jp' && e.jp_nav}
                </Link>
              </NavList>
            );
          })}
        </ContainerWrap>
      </NavWrap>
    </>
  );
}

export default PCNav;
