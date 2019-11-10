import React from 'react'
import logoImg from '../../../assets/images/Logo.png';

import classess from './Logo.module.css'

const logo = props => (
    <div className={classess.Logo} style={{ height: props.height }}>
      <img src={logoImg} alt="MyBurger"></img>
    </div>
  );
export default logo;