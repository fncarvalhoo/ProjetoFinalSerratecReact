import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #222;
  padding: 1em;

  img{
    width: 40px;
    height: 40px;
  }
  ul{
    display: flex;
    list-style: none;
    align-items: center;

    li{
      margin-right: 1em;
      
      a{
        font-size: 1.2em;
        color: #fff;
        &:hover {
           color: #ffbb33;
         }
      }
    }
  }

`;

export const Navbar = styled.div`


`;