import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #5C0D76;
  padding: 1em;

  img{
    width: 100px;
    height: 80px;
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