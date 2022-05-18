import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <input type="text" data-testid="name-input"></input>
        <input type="textArea" data-testid="description-input"></input>
        <input type="number" data-testid="attr1-input"></input>
        <input type="number" data-testid="attr2-input"></input>
        <input type="number" data-testid="attr3-input"></input>
        <input type="text" data-testid="image-input"></input>
        <select data-testid="rare-input">
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <input type="checkbox" data-testid="trunfo-input"></input>
        <button data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
