import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";

import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxalary/Auxalary";

import classess from './SideDrawer.module.css';
import Logo from "../Logo/Logo";

const sideDrawer = props => {
  let attachedClassess = classess.SideDrawer;
  if (props.open) {
    attachedClassess += ' ' + classess.Open
  }else{
    attachedClassess += ' ' + classess.Close
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClassess} onClick={props.closed}>
        <Logo height="10%"/>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
};
export default sideDrawer;
