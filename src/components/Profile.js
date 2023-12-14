import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import data from './../data/lang.json';
import './../index.css';
import Type from './Type';

const Content = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.Color};
`;
const ContainerWrap = styled.div`
  width: 80%;
  margin: 0px auto;
  max-width: 1280px;
  padding-top: 140px;
`;
const Title = styled.h3`
  margin-bottom: 1px;
  font-size: 5em;
  @media screen and (min-width: 640px) {
    font-size: 9em;
  }
`;

const Intro = styled.div``;

function About() {
  const [sources, setSources] = useState([]);
  const language = useSelector((state) => state.language);

  useEffect(() => {
    setSources(data.main);
  }, []);

  return (
    <>
      <Content>
        <ContainerWrap>
          {sources.map((e, i) => {
            return (
              <Intro key={i}>
                <Title>
                  {language === 'ko' && e.ko_title}
                  {language === 'en' && e.en_title}
                  {language === 'cn' && e.cn_title}
                  {language === 'jp' && e.jp_title}
                </Title>
                <Type
                  language={language}
                  koDesc={e.ko_desc1}
                  enDesc={e.en_desc1}
                  cnDesc={e.cn_desc1}
                  jpDesc={e.jp_desc1}
                />
              </Intro>
            );
          })}
        </ContainerWrap>
      </Content>
    </>
  );
}

export default About;
