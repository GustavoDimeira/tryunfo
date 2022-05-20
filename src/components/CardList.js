import React from 'react';
import PropTypes from 'prop-types';

class CardList extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, key } = this.props;
    return (
      <div className="card" key={ key }>
        <h3 data-testid="name-card">{ cardName }</h3>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <div data-testid="rare-card">{ cardRare }</div>
        <div data-testid="attr1-card">{ cardAttr1 }</div>
        <div data-testid="attr2-card">{ cardAttr2 }</div>
        <div data-testid="attr3-card">{ cardAttr3 }</div>
        <div data-testid="description-card">{ cardDescription }</div>
        {cardTrunfo && <div data-testid="trunfo-card">Super Trunfo</div>}
      </div>
    );
  }
}

CardList.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default CardList;
