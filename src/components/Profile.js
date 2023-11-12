import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { styled } from 'styled-components'
import data from "./../data/lang.json";
import './../index.css'
import Type from './Type';



const Content = styled.div`
    width: 100%;
    margin-top: 30vh;
    background:  ${(props) => props.theme.colors.BgColor};
  color: ${(props) => props.theme.colors.Color};
    
`
const Title = styled.h3`
margin-bottom: 1px;
  font-size:11vw;
  
`
const ContainerWrap = styled.div`
  width: 80%;
  margin: 120px auto;
  max-width: 1280px;


`


const Intro = styled.div`
  height: 200px;
`







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
                   {
                    sources.map((e,i)=>{
                        return(
                            <Intro key={i}>
                                <Title>
                                {language === "ko" && e.ko_title}
                                {language === "en" && e.en_title}
                                {language === "cn" && e.cn_title}
                                {language === "jp" && e.jp_title}
                                </Title>
                                  <Type language={language} 
                                koDesc= {e.ko_desc1} enDesc= {e.en_desc1} cnDesc = { e.cn_desc1} jpDesc={e.jp_desc1}
                                  />
                            </Intro>
                        )
                    })
                   }
      </ContainerWrap>
    </Content>
     

            </>
  )
}

export default About
