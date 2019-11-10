import React, { Component } from "react";
import Aux from "../Auxalary/Auxalary";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";

import classess from "./Layout.module.css";

class Layout extends Component {

  render() {
    return (
      <Aux>
        <NavigationBar />
        <main className={classess.MainContent}>
          {this.props.children}
        </main>
        <footer>
          <Footer />
        </footer>
      </Aux>
    );
  }
}



export default Layout;
