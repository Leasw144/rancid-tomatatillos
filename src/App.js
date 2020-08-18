import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <CardSection />              
      </div>
    )
  };
}

export default App;
