import React from "react";
import './App.css';
import Profile from "./component/state";



class App extends component {
  constructor(props) {
    first(props);
    this.state = {isVisible:false};
  }
  toggleVisibility = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
  render()
  {
    return(
      <div className="app">
        <button className="togglebtn" onClick={this.toggleVisibility}>
          {this.state.isVisible ? "hide profile information" : "show profile information"}
        </button>
        {this.state.isVisible && <Profile/>}
      </div>
    );
  };
  };


export default App;
