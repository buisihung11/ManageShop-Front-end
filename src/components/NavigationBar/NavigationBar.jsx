import React, { Component } from "react";

import classess from './NavigationBar.module.css'
import DrawerToggle from "./DrawerToggle/DrawerToggle";
import NavigationItems from "./NavigationItems/NavigationItems";
import SideDrawer from "./SideDrawer/SideDrawer";
import Logo from "./Logo/Logo";
export class NavigationBar extends Component {

  state = {
    isDrawerOpen: false
  }

  drawerToggleClicked = () => {
    this.setState(prevState => {
      return {isDrawerOpen: !prevState.isDrawerOpen}
    })
  }

  render() {
    return (
      <header className={classess.NavigationBar}>
        {/* DrawToggle trigger the sidedrawer in MOBILE DEVICE */}
        <DrawerToggle  clicked={this.drawerToggleClicked}/>
        <Logo />
        {/* NAVIGATION FOR MOBILE DEVICE */}
        <SideDrawer open={this.state.isDrawerOpen} closed={() => this.setState({isDrawerOpen: false})}/>
        {/* NAVIGATION FOR DESKTOP */}
        <ul className={classess.NavDesktop}>
            <NavigationItems />
        </ul>
      </header>
    );
  }
}

export default NavigationBar;
