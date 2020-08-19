import React, {Component} from 'react';
import './CSS/App.css';
import Header from './Header'
import CardSection from './CardSection'
import './assets/tomato.jpg'
class App extends Component {  
  render() {
    return (
      <main className="App">
        <Header />
        <CardSection />              
      </main>
    )
  };
}

export default App;
