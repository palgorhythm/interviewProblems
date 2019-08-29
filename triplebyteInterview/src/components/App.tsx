import React, { useState } from 'react';
import Column from './Column';
import uuid from 'uuid';
import '../../styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['one', 'two', 'three', 'four'],
      cards: [['ye', 'ok'], ['ye', 'ok'], ['ye', 'ok'], ['ye', 'ok']]
    };
    this.addCard = this.addCard.bind(this);
    this.move = this.move.bind(this);
  }

  componentDidMount() {
    console.log(localStorage.getItem('state'));
    this.setState(JSON.parse(localStorage.getItem('state')));
  }

  // hoq sdo broswees cache requests
  // cookies vs local localStorage
  // http2 vs. http
  // https more secure???
  // sql injection vs XSS
  // cross site request forgery attack
  // hashing and salts, encryptions
  // expected case for hashing additio
  // UNDERSTANDING COLLISION RESOLUTION
  // overfilling a linked list
  // whats a bloom filter 
  // how does an AVL tree work 
  // time complexity of depth first pre order
  // design problem

  // pwa
  // redux saga
  // functioinal reactive programming
  // websockets
  // transpilers
  // SSR
  // observables
  // graphQL

  componentDidUpdate() {
    localStorage.setItem('state', JSON.stringify(this.state));
  }

  addCard(text, i) {
    const newCards = this.state.cards;
    newCards[i].push(text);
    this.setState({ cards: newCards });
  }

  move(dir, columnIndex, cardIndex) {
    const cardToMove = this.state.cards[columnIndex][cardIndex];
    const newCards = [...this.state.cards];
    newCards[columnIndex].splice(cardIndex, 1);
    this.addCard(cardToMove, columnIndex + dir);
    this.setState({ cards: newCards });
  }

  render() {
    const columnArray = this.state.names.map((name, i) => (
      <Column
        name={name}
        cards={this.state.cards[i]}
        id={i}
        key={uuid()}
        addCard={this.addCard}
        move={this.move}
      />
    ));
    return <div id="App">{columnArray}</div>;
  }
}
export default App;
