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
    font-size: 8vw;
    font-family: 'Lexend', sans-serif;
    font-weight: bold;
    
`

const SkillContent = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-wrap: wrap;
    p{
        line-height: 40px;
        font-size: 17px;
    }
`

const LeftCon = styled.div`
    flex-basis: 20%;
    margin-top: 40px;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 640px){
      display: none;
    }

`
const Circle = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background:  ${(props) => props.theme.colors.BgColor};
    border: 2px solid ${(props) => props.theme.colors.Color};
    position: relative;
    z-index: 1;

`

const Line = styled.div`
    position: absolute;
    top: 10px;
    left: 43%;
    width: 2px;
    height: 200px;
    background-color:${(props) => props.theme.colors.Color};
   
`
const RightCon = styled.div`
    flex-basis: 80%;
    float: left;
  
    p{
        &:nth-child(1){font-size: 1.3em;
        font-weight: bold;
        margin-bottom: 0;
        }
        &:nth-child(2){
        margin-top: 0;
        }
        &:nth-child(3){
        font-size: 0.9em;
        }
    }
  
    @media screen and (max-width: 640px){
        flex-basis:99%; 
        column-gap: 20px;
        border-bottom: 1px solid ${(props) => props.theme.colors.Color};
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
                                    <Circle>
                                        <Line style={{height:i===2 && '0px'}}></Line>
                                    </Circle>
                                </LeftCon>
                                <RightCon>
                                    <p>{e.title}</p>
                                    <p>{e.desc}</p>
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
