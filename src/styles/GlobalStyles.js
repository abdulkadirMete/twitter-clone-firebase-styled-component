// globalStyles.js
import { createGlobalStyle } from "styled-components";
import { colors } from "./Variable";


const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Roboto', sans-serif;
}

.container{
    max-width: 1265px;
    min-height: 100vh;
    margin:0 auto;
    display: flex;

}

ul{
    list-style: none;
}

a{
    text-decoration: none;
    color: black;
}

/* Buttons */

.btn{

    background-color: ${colors.colorBlue};
    border: none;
    color: white;
    border-radius:9rem;
    padding: .8rem 2rem;
    font-weight: bold;
    letter-spacing: 1.5px;
    


    box-shadow: 0 0 1px black;

    &:hover{
        background-color: ${colors.colorDarkerBlue};
    }

}

/* Profile Img */
.profile{
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }



`;

export default GlobalStyle;
