import React from "react";
import { NavLink } from "react-router-dom";

import classess from "./NavigationItem.module.css";

const navigationItem = props => (
  <li className={classess.NavigationItem}>
    <NavLink to={props.link} exact={props.exact} activeClassName={classess.active}>
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
