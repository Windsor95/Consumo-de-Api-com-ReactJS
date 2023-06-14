import { createGlobalStyle } from "styled-components";

 const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        outline: none;
        border: none;
        
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-size: 1.6rem;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        line-height: 1.7;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: 700;

    }
    
   `;


export default GlobalStyles