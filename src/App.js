import React from "react";
import "./App.scss";
import "flashgrid/dist/flashgrid.scss";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    const handleLogin = () => {
      this.setState((prevState) => {
        return {
          isLoggedIn: !prevState.isLoggedIn,
        };
      });
    };

    return (
      <>
        <Header isLoggedIn={this.state.isLoggedIn} handleLogin={handleLogin} />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
