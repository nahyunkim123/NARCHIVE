import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { styled } from 'styled-components'
import data from "./../data/lang.json";
import './../index.css'
import { Timeline } from 'antd';


const Content = styled.div`
    width: 100%;
    
    
`

const ContentWrap = styled.div`
    margin: 60px auto;
    max-width: 1280px;
    width: 80%;

   
`

const TitleWrap = styled.div`
    text-align: center;

  
        font-size: 3em;
        font-weight: bold;
    
`

const SkillContent = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    p{
        line-height: 40px;
        font-size: 17px;
    }
`

const LeftCon = styled.div`
    flex-basis: 20%;
    margin-top: 30px;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 640px){
      display: none;
    }

`
const Circle = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background:  ${(props) => props.theme.colors.BgColor};
    border: 2px solid ${(props) => props.theme.colors.Color};
    position: relative;

`
const RightCon = styled.div`
    flex-basis: 80%;
    float: left;
  
    p{
        &:nth-child(1){font-size: 1.5em;}
    }
  
    >h3{
        font-size: 20px;
        border-bottom: 1px solid ${(props) => props.theme.colors.Color};
        padding-bottom: 3px;
    }   
    @media screen and (max-width: 640px){
        flex-basis: 90%; 
        column-gap: 20px;
    }
`




function About() {

    const [sources, setSources] = useState([]);
      
  
    useEffect(() => {
      setSources(data.education);
    }, []);

  return (
    <>
        <Content>
        <ContentWrap>
             <TitleWrap>
                EDUCATION
            </TitleWrap>
            <SkillContent>
           
     
                   {
                    sources.map((e,i)=>{
                        return(
                            
                            <SkillContent key={i}>
                                <LeftCon>
                                    <Circle></Circle>
                                </LeftCon>
                                <RightCon>
                                    <p>{e.title}</p>
                                    <p>{e.date}</p>
                                </RightCon> 
                            </SkillContent>
                        )
                    })
                   }
        
          
            </SkillContent>          
  
        </ContentWrap>  
    </Content>
     

            </>
  )
}

export default About
