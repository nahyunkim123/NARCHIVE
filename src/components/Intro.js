import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { styled } from 'styled-components'
import data from "./../data/lang.json";
import YearBook from '../components/YearBook';
import Myself from '../components/Myself';
import './../index.css'

import Type from './Type';


const Content = styled.div`
    width: 100%;
    overflow-x: none;
    
`

const ContentWrap = styled.div`
    margin:0px auto;
    max-width: 1280px;
    text-align: center;

    
`

const Profile = styled.div`
    width: 90%;
    margin: 60px auto;

    display: flex;
    align-items: center;
    justify-content: center;
    >img{
      
        margin: 0 auto;
        width: 430px;
        height: 500px;
        object-fit: contain;
    }
    @media screen and (max-width: 768px){
        flex-wrap: wrap;
        text-align: center;
     
    }
`

const TextWrap = styled.ul`
 
    font-size: 20px;
    line-height: 45px;
    
`

const TitleWrap = styled.div`
    >p{
        font-size: 2em;
    }
`

const Title = styled.h3`
    
        font-size: 50px;

        transition: 0.3s;
        &:hover {
    transform: scaleY(0.5); 
  }

`

const TypeWrap = styled.div`
    width: 100%;
    height: 70px;

`



function About() {

    const [isActive, setIsActive] = useState(false);
  const language = useSelector((state) => state.language);
  const [sources, setSources] = useState([]);

  useEffect(() => {
    setSources(data.main);
  }, []);




  return (
    <>
    
    <Content>
        <ContentWrap>
            <div>
            {
                        sources.map((e,i)=>{

                            return(
                                <>
                                
                                <TitleWrap key={i}>
                                    <Title>
                                    {language === "ko" && e.ko_title}
                                    {language === "en" && e.en_title}
                                    {language === "cn" && e.cn_title}
                                    {language === "jp" && e.jp_title}
                                    </Title>
                                    <TypeWrap>

                                    <Type 
                                        language={language}
                                        koDesc={e.ko_desc1}
                                        enDesc={e.en_desc1}
                                        cnDesc={e.cn_desc1}
                                        jpDesc={e.jp_desc1}
                                        /> 
                                        </TypeWrap>
                               
                            </TitleWrap>
                            </>
                                )
                        })
                    }
            </div>
       
            <Profile>
                {/* <img src={`images/mainprofile.jpeg`} alt="mainprofile" /> */}

                    {
                        sources.map((e,i)=>{

                            return(
                                <>
                                
                                <TextWrap key={i}>
                    
                                <li >
                                {language === "ko" && e.ko_desc2}
                                {language === "en" && e.en_desc2}
                                {language === "cn" && e.cn_desc2}
                                {language === "jp" && e.jp_desc2}
                                
                                  </li>
                                <li>
                                {language === "ko" && e.ko_desc3}
                                {language === "en" && e.en_desc3}
                                {language === "cn" && e.cn_desc3}
                                {language === "jp" && e.jp_desc3}
                                
                                  </li>
                                <li>
                                {language === "ko" && e.ko_desc4}
                                {language === "en" && e.en_desc4}
                                {language === "cn" && e.cn_desc4}
                                {language === "jp" && e.jp_desc4}
                                
                                  </li>
                                  {language === "en" && 
                                  <li>{language === "en" && e.en_desc5}</li>
                                  }
                                  {language === "ko" && 
                                  <li>{language === "ko" && e.ko_desc5}</li>
                                  }
                            </TextWrap>
                            </>
                                )
                        })
                    }
            </Profile>
            <Myself/>
        </ContentWrap>  
    </Content>
            <YearBook/>

            </>
  )
}

export default About