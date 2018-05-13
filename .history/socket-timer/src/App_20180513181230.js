import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { subscribeToTimer, unSubscribe } from "./api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: "no timestamp yet"
    };

    this.subscribeToTimer();
  }

  setInterval = e => {
    this.setState({ interval: e.target.value });
  };

  subscribeToTimer = () =>
    subscribeToTimer((err, timestamp) => this.setState({ timestamp }));

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This is the timer value: {this.state.timestamp}
        </p>
        <input onChange={this.setInterval} placeholder="time interval" />

        <button onClick={this.subscribeToTimer}>Subscribe</button>
        <button onClick={this.unSubscribe}>Un Subscribe</button>
      </div>
    );
  }
}

export default App;
