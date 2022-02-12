import styled from "styled-components";

export const PagPrincipal = styled.div`
  body {
    margin-right: auto;
    margin-left: auto;
    background: #ecf0f3;
    display: flex;
    justify-content: center;
    place-items: center;
  
  }

  .container {
    margin: 0.5rem;
    display: inline-table;
    position: relative;
    width: 100%;
    height: 97vh;
    border-radius: 10px;
    padding: 40px;
    box-sizing: border-box;
    background: #ecf0f3;
    box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
  }
  p {
    margin-top: -15px;
    margin-bottom: 59px;
    width: 70px;
    border-radius: 10px;
    font-weight: 900;
    font-size: 20px;
    color: #ec5c36;
    box-shadow: 14px 14px 16px #cbced1, -14px -14px 40px #e0dddd;
    text-align: center;
    display: -ms-flexbox;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
  }

   ul {
    display: flex;
   }

   li {
    margin: 9px;
   }
   ul li {
    border-radius: 10px;
    padding: 4px;
    color: #ec5c36;
    list-style-type: none;
    margin-top: -30px;
    box-shadow: 14px 14px 16px #cbced1, -14px -14px 40px white;
   }
   hr {
    background: #ec5c36;
    margin: 5px;
   }

  .brand-title {
    margin-top: 2px;
    font-weight: 900;
    font-size: 1.8rem;
    color: #1DA1F2;
    letter-spacing: 1px;
  }
  .brand-title p {
    margin: 0;
  }

  label, input, button {
    display: block;
    width: 100%;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
  }

  label {
    margin-bottom: 4px;
  }

  label:nth-of-type(2) {
    margin-top: 12px;
  }

  input::placeholder {
    color: gray;
  }

  input {
    margin-bottom: 52px;
    margin-top: -69px;
    color: #ec5c36;
    margin-right: 20px;
    margin-inline-start: auto;
    width: 14rem;
    background: #ecf0f3;
    padding: 15px;
    padding-left: 19px;
    height: 36px;
    font-size: 14px;
    border-radius: 13px;
    box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  }

  input:hover {
    box-sizing: border-box;
    box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px white;
  }
  
  button {
    margin-right: 7px;
    font-size: 9px;
    margin-left: 7px;
    display: inline;
    width: 70px;
    margin-top: 42px;
    background: #1DA1F2;
    height: 35px;
    border-radius: 13px;
    cursor: pointer;
    font-weight: 900;
    box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
    transition: 0.5s;
  }
  
  button:hover {
    font-size: 11px;
    box-shadow: none;
    background-color: #5984bd;
    width: 85px;
    height: 50px;
  }
  main {
    height: 430px;
  }

  footer {
    display: flex;
    height: 50px;
    align-items: center;
  }


`;