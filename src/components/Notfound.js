import React from 'react'
import styled from 'styled-components'
// import image from './../images/error-404.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faHome } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 10000;
  width: 100%;
  height:100%;
    

`
const ContentWrap = styled.div`
    max-width: 780px;
    margin: 100px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    >img{
      width: 300px;
      height: 300px;
      
    }
    @media screen and (max-width: 480px){
      >img{
      width: 180px;
      height: 180px;
      
    }
   
  }
   
`
const TextWrap = styled.div`
    display: flex;
    width: 380px;
    flex-wrap: wrap;
    margin-left: 20px;
    text-align: center;
    >span{
      display: flex;
      font-size: 37px;
      color: #494949;
      font-weight: bold;
      align-items: center;

      >p{
        padding-right: 20px;
        font-size: 100px;
        color: #ffffff;
        text-shadow: -2px 0  #58d89c, 0 1px  #58d89c, 7px 0  #58d89c, 0 -2px  #58d89c;

      }
    }
    span:nth-child(2){
      font-size: 27px;
      color: #6d6d6d;
     
    }
    @media screen and (max-width: 480px){
      
      span:nth-child(2){
        font-size: 20px;
        margin-left: 60px;
      }
      
    }

`

const ButtonWrap = styled.div`
max-width: 480px;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
flex-basis: 100%;

`
const Button = styled.button`
  padding: 20px 20px;
  flex-basis: 40%;
  border: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #fff;
  margin-right: 10px;
  border-radius: 3px;
  cursor: pointer;
  >p{
    margin-left: 10px;

  }
  
  @media screen and (max-width: 480px){
    flex-basis: 100%;
    margin-left: 10px;
    margin-bottom: 15px;
  
   
  }
`

function Notfound() {
  const navigate = useNavigate();

  return (
    <>
      <Background>
        <ContentWrap>
            
            <TextWrap>
              <span><p>404</p>NOT FOUND</span>
              <span>페이지를 찾을 수 없습니다</span>
              <span onClick={navigate(-1)}>BACK TO HOME</span>
            </TextWrap>
        </ContentWrap> 
       
     </Background>   
    </>
  )
}

export default Notfound