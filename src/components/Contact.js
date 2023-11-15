import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'


const ContentWrap= styled.div`
    width: 100%;
    padding-bottom: 100px;
`
const Content = styled.div`
    width: 80%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: start;
`
const MainAd = styled.h2`
    font-family: 'Lexend', sans-serif;
    font-size: 4vw;    
    margin-top: 5px;
    margin-bottom: 0;
   
`

const Channel = styled.div`
    display: flex; 
    justify-content: start;
    margin-top: 20px;
    margin-right: 50px;
    div{
        padding: 8px 10px;
        margin-right: 5px;
        cursor: pointer;
        border: 1px solid ${(props) => props.theme.colors.Color};
        transition: 0.5s;
        &:hover{
            background: ${(props) => props.theme.colors.Color};
            color: ${(props) => props.theme.colors.Secondary};
        }
    }
`

const TitleWrap = styled.div`
    font-family: 'Lexend', sans-serif;
    font-size: 3em;
    border-bottom: 1px solid ${(props) => props.theme.colors.Color};
    font-weight: bold;

`

function Contact() {
    const handleOpen = (url) => {
        window.open(url, "_blank", "noopener, noreferrer");
      };

  return (
    <>
        <ContentWrap>
            <Content>
                <TitleWrap>CONTACT</TitleWrap>
                <MainAd>developernarong@gmail.com</MainAd>
                <Channel>
                    <div onClick={() => handleOpen("https://www.notion.so/knhbank/HELLO-NAHYUN-WORLD-04205e48c2964560a1e3dbc24fe95cfa")}>
                       
                            NOTION 
                  
                    </div>
                    <div onClick={() => handleOpen("https://github.com/nahyunkim123")}>
                            GITHUB
                    </div>
                </Channel>
            </Content>
        </ContentWrap>
    </>
  )
}

export default Contact