import React from "react";
import styled from "styled-components";

const InputsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;
const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  background-color: #e5ddd5;
  background-size: cover;
  background-position: center;
  background-color: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
`;
const InputMsg = styled.input`
  padding: 2px 8px;
  margin: 0 8px 0;
  border: 1px black;
  border-radius: 25px;
  flex-grow: 1;
`;

const InputNome = styled.input`
  padding: 2px 8px;
  margin: 0 8px 0;
  border: 1px black;
  border-radius: 25px;
  flex-grow: 0;
  width: 15%;
`;

const Button = styled.button`
  padding: 2px 8px;
  margin: 0 8px 0;
  border: 1px black;
  border-radius: 25px;
`;
const NomeUsuario = styled.div`
  font-weight: bold;
`;

const MensagemContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Texto = styled.div` `;

const ContainerInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
`;

export default class Inputs extends React.Component {
  state = {
    mensagens: [],
    nome: '',
    msg: ' ',
  };

  /* Altera estado do valor nome */
  alteraNome = (e) => {
    this.setState({ nome: e.target.value });
  };

  /* Altera estado do valor mensagem */
  alteraMsg = (e) => {
    this.setState({ msg: e.target.value });
  };

  /* Limpa o input ao enviar a mensagem digitada */
  onClickAdd = () => {
    this.setState({
      nome: "",
      msg: "",
    });

    const NovasMensagens = [
      ...this.state.mensagens,
      {
        nome: this.state.nome,
        msg: this.state.msg,
      },
    ];

    this.setState({
      mensagens: NovasMensagens,
    });
  };

  render() {
    return (
      <InputsDiv>
        <ContainerBody>
          {this.state.mensagens.map((mensagem) => {
            return (
              <MensagemContainer>
                <NomeUsuario>{mensagem.nome}:</NomeUsuario>
                <Texto>{mensagem.msg}</Texto>
              </MensagemContainer>
            );
          })}
        </ContainerBody>
        <ContainerInput>
          <InputNome
            placeholder={"Nome"}
            value={this.state.nome}
            onChange={this.alteraNome}
          />
          <InputMsg
            placeholder={"Mensagem..."}
            value={this.state.msg}
            onChange={this.alteraMsg}
          />
          <Button onClick={this.onClickAdd}>ENVIAR</Button>
        </ContainerInput>
      </InputsDiv>
    );
  }
}