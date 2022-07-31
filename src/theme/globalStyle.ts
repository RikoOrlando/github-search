import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body{
    background-color: #F3F6FA;
    overflow-x: hidden;
  }
  * {
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans JP', sans-serif;
    box-sizing: border-box;
    transition: all ease .3s;
  }
  a{
    text-decoration: none;
    :hover{
      text-decoration: none;
    }
    :visited{
      text-decoration: none;
    }
    color: #246EE5;
  }
`;

export default GlobalStyle;
