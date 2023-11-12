import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import data from "./../data/lang.json";
import { useSelector } from 'react-redux';

const Content = styled.div`
  
  margin: 70px auto;
  overflow-x: none;
  
`

const Title = styled.h3`
    
        font-size: 50px;



`

const SubTitle = styled.h4`
  font-size: 35px;
`
const ContentWrap = styled.div`
  margin: 60px auto;
  max-width: 1280px;
`
const TextWrap = styled.div`
  margin-top: 50px;
  text-align: center;
  flex-basis: 60%;

`

const ImgWrap = styled.div`

  align-items: center;
  flex-wrap: wrap;
  transform: translateY(20px);
  transition: opacity 0.5s, transform 1s;


  @media screen and (max-width: 640px){
    flex-wrap: wrap;
    img{
    width: 300px; 
    height: 300px;
  }
  }
`


function Myself() {


  const [elements, setElements] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const imgWrapElements = document.querySelectorAll('.ImgWrap');

      imgWrapElements.forEach((imgWrap) => {
        const imgWrapPosition = imgWrap.getBoundingClientRect().top;

        if (imgWrapPosition < windowHeight) {
          imgWrap.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [sources, setSources] = useState([]);
  const [sources2, setSources2] = useState([]);
  const language = useSelector((state) => state.language);
  
  useEffect(() => {
    setSources(data.Myself);
    setSources2(data.MyselfDesc)
  }, []);
  

  return (
    <Content>
      <ContentWrap>
        <TextWrap>

          {
                        sources.map((e,i)=>{

                            return(
                                <div key={i}>
                                    <Title>
                                    {language === "ko" && e.ko_title}
                                    {language === "en" && e.en_title}
                                    {language === "cn" && e.cn_title}
                                    {language === "jp" && e.jp_title}
                                    </Title>
                                    <SubTitle>
                                    {language === "ko" && e.ko_subtitle}
                                    {language === "en" && e.en_subtitle}
                                    {language === "cn" && e.cn_subtitle}
                                    {language === "jp" && e.jp_subtitle}
                                    </SubTitle>
                                   
                                </div>
                                )
                        })
                    }

            <ImgWrap className="ImgWrap">

            {
                        sources2.map((e,i)=>{

                            return(
                              <ImgWrap key={i}>
                                   
                         
                                <TextWrap>
                                        <h3>
                                    {language === "ko" && e.ko_title}
                                    {language === "en" && e.en_title}
                                    {language === "cn" && e.cn_title}
                                    {language === "jp" && e.jp_title}
                                    </h3>
                               <h4>
                                    {language === "ko" && e.ko_desc}
                                    {language === "en" && e.en_desc}
                                    {language === "cn" && e.cn_desc}
                                    {language === "jp" && e.jp_desc}
                                    </h4>
                                </TextWrap>

                                  
                              </ImgWrap>
                                )
                        })
                      
                    }
          
            
       
            </ImgWrap>
        </TextWrap>

        </ContentWrap>
    </Content>
  )
}

export default Myself