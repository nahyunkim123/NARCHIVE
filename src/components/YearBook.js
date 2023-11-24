import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import data from "./../data/lang.json";
import { useSelector } from 'react-redux';


const Content = styled.div`
    max-width: 1280px;
    margin: 200px auto;
    text-align: center;
    position: relative;
    z-index: 10;
`;
const MessageWrap = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`
const Message = styled.div`
    flex-basis: 49.5%;
    border: 1px solid black;
    margin-bottom: 5px;
    text-align: center;
    transition: all 0.3s ease;
    padding: 15px 0px;
    position: relative;
    &:nth-child(3) {
        flex-basis: 100%;
   
    }
    @media screen and (max-width: 640px){
        flex-basis: 100%;
    }
  
`;
const MWrapper = styled.div`
    padding: 15px 30px;

    p{
        &:nth-of-type(1){
            font-weight: bold;
            font-size: 1.2em;
            margin-bottom: 7px;

        }
        &:nth-of-type(2){
            padding: 5px 8px;
        }
     
    }
    
    img {
      width: 90px;
      height: 90px;
      object-fit: cover;
      margin-bottom: 0;
    }
`


const TitleWrap = styled.div`
    margin-bottom: 50px;
`;

const Title = styled.div`
    font-size: 8vw;
    font-family: 'Lexend', sans-serif;
    font-weight: bold;
`;

const TitleDesc = styled.p`
    font-size: 2em;
`

const Year = styled.p`
    position: absolute;
    left: 25%;
    top: -250px;
    z-index: -1;
    color:  ${(props) => props.theme.colors.BgColor};
    text-shadow: 0 0 1px ${(props) => props.theme.colors.Color};
    font-size: 10rem;
    font-weight: 800;
    font-family: 'Lexend', sans-serif;
`;

function YearBook() {
    const [sources, setSources] = useState([]);
    const [sources2, setSources2] = useState([]);
    const language = useSelector((state) => state.language);

    useEffect(() => {
        setSources(data.message);
        setSources2(data.yearbook);
    }, []);

    return (
        <Content>
        
                <TitleWrap>
                    {sources2.map((e, i) => {
                        return (
                            <>
                                <Title>
                                    <Year>2023</Year>
                                    {language === "ko" && e.ko_title}
                                    {language === "en" && e.en_title}
                                    {language === "cn" && e.cn_title}
                                    {language === "jp" && e.jp_title}
                                </Title>
                                <TitleDesc>
                                    {language === "ko" && e.ko_desc}
                                    {language === "en" && e.en_desc}
                                    {language === "cn" && e.cn_desc}
                                    {language === "jp" && e.jp_desc}
                                </TitleDesc>
                            </>
                        );
                    })}
                </TitleWrap>
          
            <MessageWrap>
            {sources.map((e, i) => {
                return (
                    <Message key={i}>
                        <MWrapper>
                          <img src={e.img} alt={e.name} />
                          <p>{e.team}, {e.nickname}</p>
                          <p>{e.content}</p>
                        </MWrapper>
                    </Message>
                );
            })}
            </MessageWrap>
        </Content>
    );
}

export default YearBook;
