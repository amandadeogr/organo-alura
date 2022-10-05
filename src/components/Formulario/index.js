import { useState } from "react";
import Botao from "../botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {

  const times = [
    'Programação',
    'Front-end',
    'Data Science',
    'Devops',
    'UX e UI',
    'Mobile',
    'Inovação e Gestão'
  ]

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
  }

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('')

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
         <h2>Preencha os dados para criar os nossos cards</h2>
        <CampoTexto 
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite o seu nome" 
          valor={nome}
          aoAlterar={valor => setNome(valor)}
        />

        <CampoTexto 
          obrigatorio={true}  
          label="Cargo" 
          placeholder="Digite o seu cargo"
          valor={cargo}
          aoAlterar={valor => setCargo(valor)}
        />

        <CampoTexto 
          label="Imagem" 
          placeholder="Digite o endereço da imagem" 
          valor={imagem}
          aoAlterar={valor => setImagem(valor)}
        />

        <ListaSuspensa 
          obrigatorio={true}  
          label="Times" 
          itens={times}
          valor={time}
          aoAlterar={valor => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
