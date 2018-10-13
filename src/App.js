import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentTime: new Date().toLocaleTimeString(),
      isBedtime: false,
    };
  }


  componentDidMount(){
    this.setTime();
    window.setInterval(function () {
     this.setTime();
   }.bind(this), 1000);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to Pilehaus!
          </p>
          {this.state.isBedtime ? 

              <p style={{color: "red"}}>{`IT'S PAST BEDTIME!!`}</p>
              :
              <p>{`Currently it just shows the time:`}</p>
          }

          <div style={this.state.isBedtime ? {color: "red"} : {}}>
            {this.state.currentTime}
          </div>
        </header>
      </div>
    );
  }

  setTime() {
    const now = new Date();
    const hours = now.getHours();
    this.setState({currentTime: now.toLocaleTimeString()})
    if (hours > 22 || hours < 5) {
      this.setState({isBedtime: true})
    } else {
      this.setState({isBedtime: false})
    }
  }
}

export default App;
