import React, { Component } from 'react';
import './App.css';

const colours1 = ['#27BECC', '#6A9599', '#4AFFA9', '#FF8A92', '#CC2785'];
const colours2 = ['#B74AFF', '#FFF557', 'CC279E', '#996A8C', '#CCC490'];
const colours3 = ['#FFE24A', '#5074FF', '#B1CC12', '#929968', '#84A6CC'];
const numbers = [0, 1, 2, 3, 4, 5, 6];
const colours = [colours1, colours2, colours3];

class App extends Component {
  constructor(props) {
    super(props);
    this.changeLayout = this.changeLayout.bind(this);
    this.state = {
      rowStarts: [0, 0],
      rowEnds: [0, 0],
      columnStarts: [0, 0],
      columnEnds: [0, 0],
      colourPalette: colours1
    };
  }

  changeLayout() {
    const rowStarts = numbers.map(number => {
      return Math.floor(Math.random() * 10);
    });
    const rowEnds = numbers.map(number => {
      return Math.floor(Math.random() * 20);
    });
    const columnStarts = numbers.map(number => {
      return Math.floor(Math.random() * 5);
    });
    const columnEnds = numbers.map(number => {
      return Math.floor(Math.random() * 20);
    });
    const colourNumber = Math.floor(Math.random() * 3);
    const colourPalette = colours[colourNumber];
    this.setState({
      rowStarts,
      rowEnds,
      columnStarts,
      columnEnds,
      colourPalette
    });
  }
  render() {
    return (
      <div className="App">
        <header className="header">Random art with CSS grid</header>
        <div className="main">
          <button className="randomise" onClick={this.changeLayout}>
            Randomise
          </button>
          <div className="box">
            {numbers.map(number => {
              return (
                <div
                  id={number}
                  key={number}
                  className="gridItem"
                  style={{
                    backgroundColor: this.state.colourPalette[number % 5],
                    gridRowStart: this.state.rowStarts[number],
                    gridRowEnd: this.state.rowEnds[number],
                    gridColumnStart: this.state.columnStarts[number],
                    gridColumnEnd: this.state.columnEnds[number]
                  }}
                />
              );
            })}
          </div>
        </div>
        <footer className="footer">
          Made by{' '}
          <a href="https://www.twitter.com/elliempatten">Ellie Patten</a>
        </footer>
      </div>
    );
  }
}

export default App;
