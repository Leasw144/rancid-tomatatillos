import React, {Component} from 'react';
import './App.css';
import CardSection from './CardSection'

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  
  render() {
    return (
      <main className="App">
        <h1>Hello World</h1>
        <Header />
        <CardSection />              
      </main>
    )
  };
}

export default App;
