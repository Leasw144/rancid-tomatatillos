import React, {Component} from 'react';
import './App.css';
import Header from './Header'
import CardSection from './CardSection'

class App extends Component {  
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
