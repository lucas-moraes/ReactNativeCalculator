import React from 'react';
import {Botao, BotaoSinal, BotaoSinal2, BotaoText} from './globalStyle';

export const Button = props => {
  return (
    <>
      <Botao onPress={() => props.handleButtonPress(props.operator)}>
        <BotaoText>{props.operator}</BotaoText>
      </Botao>
    </>
  );
};

export const ButtonSinal = props => {
  return (
    <>
      <BotaoSinal onPress={() => props.handleButtonPress(props.operator)}>
        <BotaoText>{props.operator}</BotaoText>
      </BotaoSinal>
    </>
  );
};

export const ButtonSinal2 = props => {
  return (
    <>
      <BotaoSinal2 onPress={() => props.handleButtonPress(props.operator)}>
        <BotaoText>{props.operator}</BotaoText>
      </BotaoSinal2>
    </>
  );
};
