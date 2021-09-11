import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #262D31;
  }
`;
export const LeftMenuDiv = styled.div`
  display: flex;
  width: 30%;
  height: 100vh;
  flex-direction: column;
  position: absolute;
  align-items: center;
  background-color: white;
  overflow-y: scroll;

  ::-webkit-scrollbar{
width: 6px;
height: 13px;
}
::-webkit-scrollbar-thumb{
background: #202020;
border-radius: 0px;
}
::-webkit-scrollbar-thumb:hover{
background: #404040;
}
::-webkit-scrollbar-track{
background: #F0F0F0;
border-radius: 0px;
box-shadow: inset 0px 0px 0px 0px #F0F0F0;
}
`;
export const MainDiv = styled.div`
  position: absolute;
  width: 70%;
  margin-left: 30%;
  height: 100%;
  top: 0;
  background-color: #0D1418;
`;
export const ContentDiv = styled.div`
  display: flex;
  width: 100%;
`;

export const User = styled.img`
  width: 40px;
  margin-left: 30px;
  border-radius: 50%;
`;
export const Smile = styled.img`
  width: 25px;
  margin: 0 30px;
  border-radius: 50%;
  filter: invert(100%);
`;
export const Search = styled.img`
  color: white;
  filter: invert(100%);
  width: 20px;
  margin-left: 70%;
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  width: 100%;
  background-color: #2A2F32;

    h1 {
      font-size: 15pt;
      color: white;
      margin-left: 20px;
    }
    h5 {
      font-size: 10pt;
      color: #CCC;
      margin-left: 20px;
    }
`;
export const Message = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: center;
  width: 100%;
  bottom: 0;
  padding: 5px 10px;
  background-color: #181f23;

  input {
    height: 40px;
    width: 600px;
    border-radius: 20px;
    outline: 0;
    padding-left: 20px;
    border: 1px solid white;
    background-color: #33383b;

    &:focus {
      color: white;
      background-color: #202020;
    }
    img {
      position: absolute;
      margin-left: 60px;
      z-index: 999;
    }
  }
`;
export const AddNewMessage = styled.button`
  width: 100%;
  color: turquoise;
  background-color: #2A2F32;
  height: 60px;
  border: none;
  margin-bottom: 10px;
  padding: 25px;

  &:active {
    background-color: #2A2F85;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const UserMessage = styled.div`
  width: 100%;
  padding: 20px;
  color: white;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  background-color: tomato;

  &:active{
    background-color: turquoise;
  }
`;
export const UserNameH1 = styled.h1`
  color: white;
  font-size: 6pt;
`;


export const Button = styled.button`
  background: ${props => props.primary ? "tomato" : "transparent"};
  color: ${props => props.primary ? "white" : "tomato"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid tomato;
  border-radius: 3px;
  cursor: pointer;
`;