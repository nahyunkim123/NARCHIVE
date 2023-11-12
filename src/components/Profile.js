import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { styled } from 'styled-components'
import data from "./../data/lang.json";
import './../index.css'
import Type from './Type';
import { Reveal } from 'react-reveal';



const Content = styled.div`
    width: 100vw;
    height: 100vh;
    margin-top: 30vh;
    color: ${(props) => props.theme.colors.Color};
    
`
const Title = styled.h3`
  margin-bottom: 1px;
  font-size:15vw;
  
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
                               <Reveal effect="fadeInUp">
                                <Title>
                                {language === "ko" && e.ko_title}
                                {language === "en" && e.en_title}
                                {language === "cn" && e.cn_title}
                                {language === "jp" && e.jp_title}
                                </Title>
                                  <Type language={language} 
                                koDesc= {e.ko_desc1} enDesc= {e.en_desc1} cnDesc = { e.cn_desc1} jpDesc={e.jp_desc1}
                                  />
                                </Reveal>
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
