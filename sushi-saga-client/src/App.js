import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';


// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    sushiPostion: 0,
    eatenSushi: [],
    moneyLeft: 100
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(sushi => this.setState({ sushi }));
  }



  moreSushi = () => {
    this.setState({sushiPostion: (this.state.sushiPostion + 4)})
  }

  eatSushi = (price, id) => {
    if(this.state.moneyLeft-price > 0) {
      this.setState({eatenSushi: this.state.eatenSushi.concat(id)})
      this.setState({moneyLeft: this.state.moneyLeft-price})
    }
  }


  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} moreSushi={this.moreSushi} sushiPostition={this.state.sushiPostion} eatSushi={this.eatSushi} eatenSushi={this.state.eatenSushi}/>
        <Table eatenSushi={this.state.eatenSushi} moneyLeft={this.state.moneyLeft}/>
      </div>
    );
  }
}

export default App;