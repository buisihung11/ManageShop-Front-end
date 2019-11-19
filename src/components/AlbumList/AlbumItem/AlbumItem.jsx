import React from "react";
import {Link} from 'react-router-dom'

import Button from '../../UI/Button/Button'

import classess from './AlbumItem.module.css'

const albumItem = (props) => {
  console.log(props)
  const { id,title ,desc,albumCover} = props;
  return (
    <div className={classess.AlbumItem}>
        <img className={classess.AlbumImg} src={albumCover} alt="Album Image"/>
        {/* CARD BODY */}
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <p>{id}</p>       
        </div>
        {/* ALBUM CONTROL */}
        <div className={classess.AlbumControls}>
            <Button btnType="Info">Post To FB</Button>
            <Button btnType="Success"><Link to={"/albums/" + id}>Detail</Link></Button>
            <Button btnType="Danger">Delete</Button>
        </div>
    </div>
  );
};
export default albumItem;
