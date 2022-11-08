import styled from "styled-components";

export const Container = styled.div`


`;

export const Content = styled.div`
  border-bottom: 1px solid black;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 1.2rem;

  span{
    width: 14%;
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

.botao{
  flex-direction: column;
  button{
        width: 100%;
        justify-content: center;
        margin-top: 1rem;
        border-radius: 8px;
        border: 0;
        font-size: 20px;
        background-color: #5c0d76;
        color: white;
        transition: background-color 0.5s;
    }

    button:hover{
        background: #c001ff;
    }
  }
    div{
      width: 14%;
    img{
      width: 100px;
      height: auto;
      display: flex;
      margin-left: 60px;
      justify-content: center;
    }
    }

  #produto{
    font-size: 15px;
  }

  #conteudo{
    font-weight: bold;

  }


`;


export const Form = styled.form`
text-decoration: none;


    ul{
      list-style-type: none;
    }

    li{
      margin: 15px;
    }
    input{
      width: 100%;
      background-color: #5c0d76;
      border: none;
      border-radius: 5px;
      height: 20px;
      text-indent: 5px;
      color: white;
      border: none;
    }

    button{
      margin-bottom: 15px;
      background-color: #5c0d76;
      padding: 5px;
      border: none;
      border-radius: 5px;
      color: white;
    }
`;

export const Insertproducts = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;

  h1{
      margin-top: 20px;
      font-style: italic;
      color: #5c0d76;
      text-decoration: underline solid #c001ff;
  }

  button{
    margin-top: 20px;
    width: 20%;
    padding: 7px;
    border-radius: 8px;
        border: none;
        font-size: 20px;
        background-color: #5c0d76;
        color: white;
        transition: background-color 0.5s;
  }
  button:hover{
        background: #c001ff;
    }
`;