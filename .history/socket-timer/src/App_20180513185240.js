import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { subscribeToTimer, unSubscribe, connectAgain } from "./api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: 1000,
      timestamp: "no timestamp yet"
    };

    // this.subscribeToTimer();
  }

  setInterval = e => this.setState({ interval: e.target.value });

  subscribeToTimer = () =>
    subscribeToTimer(this.state.interval, (err, timestamp) =>
      this.setState({ timestamp })
    );

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
        <br />
        <p>
          <button onClick={unSubscribe}>Un Subscribe</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={connectAgain}>Re connect</button>
        </p>
        <br />
      </div>
    );
  }
}

export default App;
