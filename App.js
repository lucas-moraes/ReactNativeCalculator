import React from 'react';
import {Button, ButtonSinal, ButtonSinal2} from './src/Button';
import {Container, Header, Line, Title} from './src/globalStyle';
import {VisorCalc, VisorResult} from './src/Views';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      first: '0',
      second: '',
      operator: '',
      result: 0,
      isResult: false,
    };

    this.refresh = this.refresh.bind(this);
    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.getResult = this.getResult.bind(this);
  }

  getResult() {
    const {first, second, operator} = this.state;

    const parsedFirst = parseFloat(first);
    const parsedSecond = parseFloat(second);
    let result = 0;

    switch (operator) {
      case '+':
        result = parsedFirst + parsedSecond;
        break;
      case '-':
        result = parsedFirst - parsedSecond;
        break;
      case 'x':
        result = parsedFirst * parsedSecond;
        break;
      case '÷':
        if (!parsedSecond || parsedSecond === 0) {
          result = 'Error';
        } else {
          result = parseFloat(parsedFirst / parsedSecond).toFixed(8);
        }
        break;
      default:
    }

    this.setState({
      result,
      isResult: true,
    });
  }

  refresh() {
    this.setState({
      first: '0',
      second: '',
      operator: '',
      result: 0,
    });
  }

  handleButtonPress(button) {
    const {isResult} = this.state;
    let {first, second, operator} = this.state;

    switch (button) {
      case '0':
        if (!isResult) {
          if (!operator) {
            if (first[0] !== '0' || first.length !== 1) {
              first += '0';
            }
          } else if (second[0] !== '0' || second.length !== 1) {
            second += '0';
          } else {
            second = '0';
          }

          this.setState({first, second, operator});
        } else {
          this.setState({
            first: '0',
            second: '',
            operator: '',
            result: 0,
            isResult: false,
          });
        }

        break;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (!isResult) {
          if (!operator) {
            if (first[0] === '0' && first.length === 1) {
              first = button;
            } else {
              first += button;
            }
          } else if (second[0] === '0' && second.length === 1) {
            second = button;
          } else {
            second += button;
          }

          this.setState({first, second, operator});
        } else {
          this.setState({
            first: button,
            second: '',
            operator: '',
            result: 0,
            isResult: false,
          });
        }

        break;

      case ',':
        if (!operator) {
          if (!first.includes('.')) {
            first += button;
          }
        } else if (!second.includes('.')) {
          second += button;
        }

        this.setState({first, second, operator});

        break;

      case '+':
      case '-':
      case 'x':
      case '÷':
        if (!operator) {
          operator = button;

          this.setState({first, second, operator});
        } else {
          this.getResult();
        }
        break;

      case 'Deletar':
        this.refresh();
        break;

      case '=':
        this.getResult();
        break;
      default:
    }
  }

  render() {
    const {first, second, operator, result} = this.state;
    return (
      <Container>
        <Header>
          <Title>Calculadora</Title>
        </Header>
        <VisorResult result={this.state.result} />
        <VisorCalc
          first={first}
          second={second}
          operator={operator}
          result={result}
          refresh={this.refresh}
        />
        <Line>
          <Button operator="7" handleButtonPress={this.handleButtonPress} />
          <Button operator="8" handleButtonPress={this.handleButtonPress} />
          <Button operator="9" handleButtonPress={this.handleButtonPress} />
          <ButtonSinal
            operator="÷"
            handleButtonPress={this.handleButtonPress}
          />
        </Line>
        <Line>
          <Button operator="4" handleButtonPress={this.handleButtonPress} />
          <Button operator="5" handleButtonPress={this.handleButtonPress} />
          <Button operator="6" handleButtonPress={this.handleButtonPress} />
          <ButtonSinal
            operator="x"
            handleButtonPress={this.handleButtonPress}
          />
        </Line>
        <Line>
          <Button operator="1" handleButtonPress={this.handleButtonPress} />
          <Button operator="2" handleButtonPress={this.handleButtonPress} />
          <Button operator="3" handleButtonPress={this.handleButtonPress} />
          <ButtonSinal
            operator="-"
            handleButtonPress={this.handleButtonPress}
          />
        </Line>
        <Line>
          <Button operator="," handleButtonPress={this.handleButtonPress} />
          <Button operator="0" handleButtonPress={this.handleButtonPress} />
          <ButtonSinal
            operator="="
            handleButtonPress={this.handleButtonPress}
          />
          <ButtonSinal
            operator="+"
            handleButtonPress={this.handleButtonPress}
          />
        </Line>
        <Line>
          <ButtonSinal2
            operator="Deletar"
            handleButtonPress={this.handleButtonPress}
          />
        </Line>
      </Container>
    );
  }
}

export default App;
