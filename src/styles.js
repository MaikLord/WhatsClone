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
  position: absolute;
  background-color: white;
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