import Botao from "../botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const times = [
    'Programação',
    'Front-end',
    'Data Science',
    'Devops',
    'UX e UI',
    'Mobile',
    'Inovação e Gestão'
  ]

  return (
    <section className="formulario">
      <form>
         <h2>Preencha os dados para criar os nossos cards</h2>
        <CampoTexto label="Nome" placeholder="Digite o seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite o seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa label="Times" itens={times}/>
        <Botao texto="Criar Card"/>
      </form>
    </section>
  );
};

export default Formulario;
