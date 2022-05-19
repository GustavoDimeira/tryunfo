import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
  }

  testarBotao = () => {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage } = this.state;
    const maxValue = 90;
    const minValue = 0;
    if (cardName !== ''
      && cardDescription !== ''
      && cardAttr1 <= maxValue
      && cardAttr2 <= maxValue
      && cardAttr3 <= maxValue
      && cardImage !== ''
      && cardAttr1 >= minValue
      && cardAttr2 >= minValue
      && cardAttr3 >= minValue) {
      const c1 = parseFloat(cardAttr1);
      const c2 = parseFloat(cardAttr2);
      const c3 = parseFloat(cardAttr3);
      const soma = c1 + c2 + c3;
      const maxSoma = 210;
      if (soma <= maxSoma) {
        return false;
      }
      return true;
    } return true;
  }

  handleInputChange = (event) => {
    const tag = event.target;
    const { name } = tag;
    const value = tag.type === 'checkbox' ? tag.checked : tag.value;
    this.setState({
      [name]: value,
    }, () => {
      this.setState({
        isSaveButtonDisabled: this.testarBotao(),
      });
    });
  };

  handleSaveButtonClick = () => 'a';

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleInputChange }
          onSaveButtonClick={ this.handleSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
