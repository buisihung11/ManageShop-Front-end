import React from 'react'

import NavigationItem from './NavigationItem/NavigationItem';

import classess from './NavigationItems.module.css'

 const navigationItems = (props) => {
    return (
        <ul className={classess.NavigationItems}>
            <NavigationItem link="/albums">Albums</NavigationItem>
            <NavigationItem exact link="/orders">Orders</NavigationItem>
            <NavigationItem exact link="/products">Products</NavigationItem>
        </ul>
    )
}
export default navigationItems