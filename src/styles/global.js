import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing:border-box;
  }

  body{
    /* background: linear-gradient(180deg, #22202C, #402845) no-repeat center top; */
    background-image: linear-gradient(180deg, #22202C, #402845);
    background-attachment: fixed;
    /*background-repeat: no-repeat;*/

    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100%;
}

  body, input, button{
    color: #ffffff;
    font-family: "Helvetica-Bold";
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;

  }

  input{
    flex: 1;
    background-color:#22202C;
    border: 1px solid #22202C;
    padding: 10px 15px;
    border-radius: 4px;
    font-size:16px;
  }

  button{
    border: 0px;
    padding: 10px 15px;
    border-radius: 4px;
    background: #f94d6a;
  }

  #root {
    max-width: 1020px;
    /*min-height: 100%;*/
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }

`;
