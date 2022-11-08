import { Header } from "../../components/header/index";
import { Footer } from "../../components/footer/index";
import foto from '../../utils/imagens/logosite.png';
import { Container } from "./styled";
export function Home() {



  return(
    <div>
      <Header/>
      <Container>
        <h1> Bem-vindo ao sistema de gerenciamento de E-commerce do grupo 1</h1>
        <img src={foto} alt="Produtos"/>
      </Container>
      <Footer/>
    </div>
  )
}
