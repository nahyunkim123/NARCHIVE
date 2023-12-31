import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import data from './../data/lang.json';
import './../index.css';
import { Fade } from 'react-reveal';

const Content = styled.div`
  width: 100%;
`;

const ContentWrap = styled.div`
  margin: 180px auto;
  text-align: center;
  width: 80%;
`;

const Title = styled.p`
  font-size: 8vw;
  font-weight: bold;
  font-family: 'Lexend', sans-serif;
`;

const ConUl = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const IMG = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 50% 50% 5px 5px;
  @media screen and (min-width: 641px) and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: 640px) {
    width: 200px;
    height: 200px;
  }
`;

const DescWrap = styled.div`
  &:nth-of-type(2) {
    padding-top: 20px;
  }
  h3 {
    font-size: 3.5vw;
    font-weight: bold;
    margin-bottom: 0;
    font-family: 'Lexend', sans-serif;
  }
  p {
    font-size: 20px;
    padding: 0px 17px;
    @media screen and (max-width: 640px) {
      font-size: 15px;
    }
  }
`;

function About() {
  const language = useSelector((state) => state.language);
  const [sources, setSources] = useState([]);

  useEffect(() => {
    setSources(data.info);
  }, []);

  return (
    <>
      <Content>
        {sources.map((e, i) => {
          return (
            <ContentWrap key={i}>
              <Title>{e.title}</Title>
              <ConUl>
                <IMG src={e.img} alt='mainprofile' />
                <Fade bottom delay={200}>
                  <DescWrap>
                    <h3># {e.subtitle1}</h3>
                    <p>
                      {language === 'ko' && e.ko_desc1}
                      {language === 'en' && e.en_desc1}
                      {language === 'cn' && e.cn_desc1}
                      {language === 'jp' && e.jp_desc1}
                    </p>
                  </DescWrap>
                </Fade>
                <Fade bottom cascade delay={1000}>
                  <DescWrap>
                    <h3># {e.subtitle2}</h3>
                    <p>
                      {language === 'ko' && e.ko_desc2}
                      {language === 'en' && e.en_desc2}
                      {language === 'cn' && e.cn_desc2}
                      {language === 'jp' && e.jp_desc2}
                    </p>
                  </DescWrap>
                </Fade>
                <Fade bottom cascade delay={2000}>
                  <DescWrap>
                    <h3># {e.subtitle3}</h3>
                    <p>
                      {language === 'ko' && e.ko_desc3}
                      {language === 'en' && e.en_desc3}
                      {language === 'cn' && e.cn_desc3}
                      {language === 'jp' && e.jp_desc3}
                    </p>
                  </DescWrap>
                </Fade>
              </ConUl>
            </ContentWrap>
          );
        })}
      </Content>
    </>
  );
}

export default About;
