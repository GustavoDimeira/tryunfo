import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo } = this.props;
    return (
      <main>
        <h2
          data-testid="name-card"
        >
          { cardName }
        </h2>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <text
          data-testid="description-card"
        >
          { cardDescription }
        </text>
        <text
          data-testid="attr1-card"
        >
          { cardAttr1 }
        </text>
        <text
          data-testid="attr2-card"
        >
          { cardAttr2 }
        </text>
        <text
          data-testid="attr3-card"
        >
          { cardAttr3 }
        </text>
        <text
          data-testid="rare-card"
        >
          { cardRare }
        </text>
        { cardTrunfo && <text data-testid="trunfo-card">Super Trunfo</text> }
      </main>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
