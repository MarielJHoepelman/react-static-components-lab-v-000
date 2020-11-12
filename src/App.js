<<<<<<< HEAD
import React, { Component } from "react";
import CatComponent from "./CatComponent";
import GraceHopperQuoteComponent from "./GraceHopperQuoteComponent";
import MouseComponent from "./MouseComponent";
=======
import React, { Component } from 'react';
import CatComponent from "./CatComponent";
import GraceHopperQuoteComponent from "./GraceHopperQuoteComponent";
>>>>>>> 7cce0229f6600763d35c290ada1eaf806d0e44a6

class App extends Component {
  render() {
    // your code in the return statement below!
    return (
      <div className="App">
        <CatComponent />
        <GraceHopperQuoteComponent />
        <MouseComponent />
      </div>
    );
  }
}

export default App;
