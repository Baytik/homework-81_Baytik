import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>Shorten your link</h1>
            <div>
          <input type="text" name="url" placeholder="Enter url here"/>
            </div>
          <button>Shorten</button>
        </div>
    )
  }
}

export default App;
