import React from 'react';
import {Nav, MostradorCalc, MostradorResult} from './globalStyle';

export const VisorCalc = props => {
  const input = `${props.first} ${props.operator} ${props.second}`;

  return (
    <>
      <Nav>
        <MostradorCalc>
          {props.first === '0' && !props.operator ? 'Faça o Calculo' : input}
        </MostradorCalc>
      </Nav>
    </>
  );
};

export const VisorResult = props => {
  return (
    <>
      <Nav>
        <MostradorResult>{props.result}</MostradorResult>
      </Nav>
    </>
  );
};
