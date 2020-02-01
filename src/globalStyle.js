import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #004680;
`;

export const Header = styled.View`
  align-items: center;
  margin: 10px;
`;

export const Nav = styled.View`
  margin: 10px;
`;

export const Line = styled.View`
  margin: 5px 0px;
  flex-direction: row;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #ffffff;
`;

export const MostradorResult = styled.Text`
  text-align: right;
  color: #ffffff;
  font-size: 50px;
`;

export const MostradorCalc = styled.Text`
  text-align: right;
  color: #ffffff;
  font-size: 25px;
`;

export const Botao = styled.TouchableOpacity`
  margin: 0px 5px;
  width: 70px;
  height: 70px;
  border: solid 5px #ffffff;
  border-radius: 2px;
  align-items: center;
  font-size: 20px;
  background: #003159;
`;

export const BotaoSinal = styled.TouchableOpacity`
  margin: 0px 5px;
  width: 70px;
  height: 70px;
  border: solid 5px #ffffff;
  border-radius: 2px;
  align-items: center;
  font-size: 20px;
  background: #19588c;
`;

export const BotaoSinal2 = styled.TouchableOpacity`
  margin: 5px;
  width: 200px;
  height: 70px;
  border: solid 5px #ffffff;
  border-radius: 2px;
  align-items: center;
  font-size: 20px;
  background: #19588c;
`;

export const BotaoText = styled.Text`
  color: #ffffff;
  font-size: 30px;
  margin: auto 0;
`;
