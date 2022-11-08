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
  }

  button{
        width: 14%;
        justify-content: center;
        margin-top: 1rem;
        border-radius: 8px;
        border: 0;
        font-size: 20px;
        background-color: #0000dd;
        color: white;
        transition: background-color 0.5s;
    }

    button:hover{
        background: #0D6AE7;
    }

  

  #cliente{
    font-size: 15px;
  }

  #conteudo{
    font-weight: bold;

  }


`;


export const Dados = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-decoration: none;

  h2{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  ul{
    margin-bottom: 20px;
    list-style-type: none;
  }
    
    button {
        padding: 1rem 1.5rem;
        margin-top: 1rem;
        border-radius: 8px;
        border: 0;
        font-size: 20px;
        background-color: #0000dd;
        color: white;
        transition: background-color 0.5s;
    }

    button:hover{
        background: #0D6AE7;
    }

  
`;