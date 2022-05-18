import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    const handleInputChange = () => 'a';
    const handleSaveButtonClick = () => 'a';
    const soma = 1 + 1;
    const temp = () => {
      if (soma) {
        return true;
      }
    };
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName=""
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare=""
          cardTrunfo={ temp() }
          hasTrunfo={ temp() }
          isSaveButtonDisabled={ temp() }
          onInputChange={ handleInputChange }
          onSaveButtonClick={ handleSaveButtonClick }
        />
        <Card
          cardName="Teste"
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare=""
          cardTrunfo={ temp() }
        />
      </div>
    );
  }
}

export default App;
