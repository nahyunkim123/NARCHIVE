import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import data from './../data/lang.json';
import './../index.css';
import { Fade } from 'react-reveal';



const Content = styled.div`
  width: 100%;
    overflow-x: hidden;

`;

const ContentWrap = styled.div`
  margin: 70px auto;
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
  display: flex; 
  flex-wrap: wrap;
  align-items: center; 
  justify-content: center; 
`;


const IMG = styled.img`
    width: 500px;
    height: 500px;
    object-fit: cover;
    border-radius: 50px;
  
`



const DescWrap = styled.div`
   &:nth-of-type(2){
    padding-top: 20px;
   }
    h3{
        font-size: 3.5vw;
        font-weight: bold;
        margin-bottom: 0;
        font-family: 'Lexend', sans-serif;
    }
    p{
        font-size: 2vw;
        padding: 0px 17px;
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
              <Fade top>
                <Title>{e.title}</Title>
              </Fade>
              <ConUl>
                <Fade bottom>
                    <IMG src={e.img} alt="mainprofile" />
                </Fade>
           
                <Fade bottom>
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
                <Fade bottom cascade delay={500}>
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
                <Fade bottom cascade delay={1000}> 
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
