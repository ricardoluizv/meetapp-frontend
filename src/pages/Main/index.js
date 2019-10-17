import React from 'react';

import { Content, Form } from './styles';
import logo from '../../assets/images/logo.svg';

export default function Main() {
  return (
    <Content>
      <Form>
        <img src={logo} alt="Meetapp" />
        <input type="textbox" placeholder="Digite seu email" />
        <input type="textbox" placeholder="Sua senha secreta" />
        <button type="button" value="Entrar">
          <label>Entrar</label>
        </button>
        <a href="#">Criar conta grátis</a>
      </Form>
    </Content>
  );
}
