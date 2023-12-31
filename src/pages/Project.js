import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import data from './../data/lang.json';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MetaTag from '../components/MetaTag';

const BG = styled.div`
  width: 100;
  height: auto;
  overflow: hidden;
  background: ${(props) => props.theme.colors.BgColor};
  color: ${(props) => props.theme.colors.Color};
`;

const ContainerWrap = styled.div`
  width: 80%;
  margin: 120px auto;
  max-width: 1280px;
  background: ${(props) => props.theme.colors.BgColor};
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  column-gap: 5px;
`;

const Content = styled.div`
  margin-top: 5px;
  flex-basis: 32%;
  padding-top: 5px;
  margin-bottom: 20px;
  border-top: 1px dashed #999;
  box-sizing: border-box;
  position: relative;
  transition: 0.2s;
  cursor: pointer;
  color: ${(props) => props.theme.colors.Color};

  @media screen and (min-width: 641px) and (max-width: 768px) {
    flex-basis: 48%;
  }

  @media screen and (max-width: 640px) {
    flex-basis: 100%;
  }
`;

const HoverBg = styled.div`
  transition: 0.3s;
  height: 100%;
  &:hover {
    background-color: ${(props) => props.theme.colors.Secondary};
    border-radius: 5px;
  }
`;

const Num = styled.div`
  width: 100%;
  text-align: center;
  font-family: 'Actor', sans-serif;
  font-size: 40px;
  margin: 10px 0;
  color: ${(props) => props.theme.colors.Color};
`;

const MainColor = styled.div`
  width: 100%;
  height: 200px;
  background: ${(props) => props.background};
`;
const MainImg = styled.div`
  width: 100%;
  height: 200px;
  > img {
    object-fit: cover;
    width: 100%;
    height: 200px;
  }
`;

const Cate = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 20px;
  color: ${(props) => props.theme.colors.Color};
`;
const ContTitle = styled.h3`
  font-size: 1.5em;
  font-weight: 500;
  color: ${(props) => props.theme.colors.Color};
  margin-bottom: 4px;
  @media screen and (min-width: 641px) and (max-width: 768px) {
    font-size: 28px;
  }
`;

const DescWrap = styled.div`
  width: 90%;
`;

const Desc = styled.div`
  font-weight: 200;
  color: ${(props) => props.theme.colors.Color};
  margin-bottom: 30px;
`;
const Skill = styled.div`
  color: gray;
  text-align: end;
  font-size: 12px;
  position: absolute;
  bottom: 0;
`;
const CateWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ModeBtn = styled.button`
  flex-basis: 14%;
  background: none;
  border: 1px solid #eee;
  height: 40px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.Color};
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.colors.BgColor};
  }
`;
const CateUl = styled.ul`
  flex-basis: 33%;
  width: 100%;
  display: flex;
  column-gap: 4px;
  justify-content: space-between;
`;
const CateLi = styled.li`
  cursor: pointer;
  flex-basis: 25%;
`;

function Project({ setNavOpen }) {
  const [sources, setSources] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const language = useSelector((state) => state.language);
  const [selectedCategory, setSelectedCategory] = useState('TOTAL');
  useEffect(() => {
    setSources(data.project);
  }, []);

  const CateFilter = sources.filter((e) => e.option === selectedCategory);
  const filterCards = () => {
    if (selectedCategory === 'TOTAL') {
      return sources;
    } else {
      return CateFilter;
    }
  };

  const ShowImage = () => {
    setIsActive(!isActive);
  };

  return (
    <BG
      onClick={() => {
        setNavOpen(false);
      }}
    >
      <MetaTag
        title='Project'
        description='프론트엔드 개발자 김나현 프로젝트입니다'
        keywords='프론트엔드, 리액트, 개발자, 포트폴리오, 프론트엔드포트폴리오, 프론트엔드 프로젝트, 토이프로젝트, 팀프로젝트'
        lang='kr,en,cn,jp'
      />
      <ContainerWrap>
        <motion.div
          intial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <CateWrap>
            <CateUl>
              <CateLi
                onClick={() => setSelectedCategory('TOTAL')}
                style={{
                  fontWeight: selectedCategory === 'TOTAL' ? 'bold' : 'normal',
                }}
              >
                TOTAL
              </CateLi>
              <CateLi
                onClick={() => setSelectedCategory('TEAM PRPOJECT')}
                style={{
                  fontWeight:
                    selectedCategory === 'TEAM PRPOJECT' ? 'bold' : 'normal',
                }}
              >
                TEAM
              </CateLi>
              <CateLi
                onClick={() => setSelectedCategory('TOY PRPOJECT')}
                style={{
                  fontWeight:
                    selectedCategory === 'TOY PRPOJECT' ? 'bold' : 'normal',
                }}
              >
                TOY{' '}
              </CateLi>
            </CateUl>
            <ModeBtn onClick={ShowImage}>
              {isActive ? 'IMGMode' : 'TextMode'}
            </ModeBtn>
          </CateWrap>
          <Container>
            {filterCards().map((e, i) => {
              return (
                <Content key={i}>
                  <HoverBg>
                    <Link to={e.link}>
                      <Num>{filterCards().length - i}</Num>
                      {isActive ? (
                        <motion.div
                          intial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <MainColor background={`${e.main_color}`}></MainColor>
                        </motion.div>
                      ) : (
                        <motion.div
                          intial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <MainImg>
                            <img src={e.img} alt={e.ko_title} />
                          </MainImg>
                        </motion.div>
                      )}
                      <Cate>{e.option}</Cate>
                      <ContTitle>
                        {language === 'ko' && e.ko_title}
                        {language === 'en' && e.en_title}
                        {language === 'cn' && e.cn_title}
                        {language === 'jp' && e.jp_title}
                      </ContTitle>
                      <Desc>
                        {language === 'ko' && e.ko_desc}
                        {language === 'en' && e.en_desc}
                        {language === 'cn' && e.cn_desc}
                        {language === 'jp' && e.jp_desc}
                      </Desc>
                      <DescWrap>
                        <Skill>{e.skills}</Skill>
                      </DescWrap>
                    </Link>
                  </HoverBg>
                </Content>
              );
            })}
          </Container>
        </motion.div>
      </ContainerWrap>
    </BG>
  );
}

export default Project;
