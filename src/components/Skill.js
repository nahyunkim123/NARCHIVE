import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import data from "./../data/lang.json";
import './../index.css'
import { Fade } from 'react-reveal';



const Content = styled.div`
    width: 100%;
    margin-top: 160px;
    padding-top:  0px 60px;
  
    color: ${(props) => props.theme.colors.Color};
    
`

const ContentWrap = styled.div`
    margin: 0 auto;
    max-width: 1280px;
    width: 80%;
    >span{
        font-size: 34px;
        font-weight: bold;
    }
`

const TitleWrap = styled.div`
    text-align: center;
    font-family: 'Lexend', sans-serif;
    font-size: 8vw;
    font-weight: bold;
    
`


const SkillContent = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    p{
        line-height: 40px;
        font-size: 17px;
    }
`


const LeftCon = styled.div`
    flex-basis: 49.5%;
    >h3{
        font-size: 20px;
        border-bottom: 1px solid ${(props) => props.theme.colors.Color};
        padding-bottom: 3px;
    }   
    @media screen and (max-width: 640px){
        flex-basis: 100%; 
    }
`
const RightCon = styled.div`
    flex-basis: 49.5%;
    >h3{
        font-size: 20px;
        border-bottom: 1px solid ${(props) => props.theme.colors.Color};
        padding-bottom: 3px;
    }   
    @media screen and (max-width: 640px){
        flex-basis: 100%; 
    }
`
const Keyword = styled.div`
  width: 100%;
  h3 {
    font-family: 'Lexend', sans-serif;
    font-size: 2em;
  }
`;

const KeywordWrap = styled.div`
  width: 100%;
  font-size: 1em;
  display: flex;
  justify-content: center;
  column-gap: 5px;
  @media screen and (max-width: 768px) {
        flex-wrap: wrap;
    }
  ul {
    flex-basis: 20%;
    text-align: center;

  
    @media screen and (max-width: 640px) {
      flex-basis: 100%;
    }
    li {
      padding: 7px;
      border-radius: 13px;
      border: 1px solid #555;
      font-weight: bold;
      background: rgba(255, 255, 255, 0.5);
    }
  }
`;


function About() {

    const [sources, setSources] = useState([]);
    const [sources2, setSources2] = useState([]);
    const [sources3, setSources3] = useState([]);
    const [sources4, setSources4] = useState([]);
    const [sources5, setSources5] = useState([]);
      
  
    useEffect(() => {
      setSources(data.Skill[0].Frontend);
      setSources2(data.Skill[0].Backend);
      setSources3(data.Skill[0].Tools);
      setSources4(data.Skill[0].Database);
      setSources5(data.Skill[0].Interest);
    }, []);

  return (
    <>
        <Content>
        <ContentWrap>
            <Fade bottom cascade>
                <TitleWrap>SKILL</TitleWrap>
            </Fade>
            <SkillContent>
                <LeftCon>
                    <h3>Frontend</h3>
                 
                   {
                    sources.map((e,i)=>{
                        return(
                            <div key={i}>
                                <p>{e.name}</p>
                            </div>
                        )
                    })
                   }
                </LeftCon>
                <RightCon>
                <h3>Backend</h3>
                {
                    sources2.map((e,i)=>{
                        return(
                            <div key={i}>
                                <p>{e.name}</p>
                            </div>
                        )
                    })
                   }
                    <h3>Database</h3>
                   {
                    sources4.map((e,i)=>{
                        return(
                            <div key={i}>
                                <p>{e.name}</p>
                            </div>
                        )
                    })
                   }
                   <h3>Tools</h3>
                   {
                    sources3.map((e,i)=>{
                        return(
                            <div key={i}>
                                <p>{e.name}</p>
                            </div>
                        )
                    })
                   }
                   

                </RightCon>
                <Keyword>
                    <h3>Interest</h3>
                    <KeywordWrap>
                        {
                            sources5.map((e,i)=>{
                                return(
                                    <ul key={i}>
                                        <li>{e.name}</li>
                                    </ul>
                                )
                            })
                        }
                    </KeywordWrap>
                </Keyword>
            </SkillContent>          
  
        </ContentWrap>  
    </Content>
     

            </>
  )
}

export default About
