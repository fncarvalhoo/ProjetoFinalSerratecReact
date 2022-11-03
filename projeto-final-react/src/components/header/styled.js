import styled from "styled-components";


export const AreaHeader = styled.div`
  height: 60px;
  background-color: #323238;
  color: #e1e1e6;
`;

export const Container = styled.div`
  width: 100%;
  padding: 5px 20px;
  display: flex;
  align-items: center;

  .logo {
    flex: 1;
    margin-top: 4px;
    font-size: 30px;
  }

  nav {
    ul {
      display: flex;
    }

    li{
        list-style: none;
        margin-left: 60px;
        margin-top: 5px;
        a{
            text-decoration: none;
            color: #e1e1e6;
            font-size: 1.2rem;

            &:hover{
                color: white;
            }
        }
    }
  }
`;