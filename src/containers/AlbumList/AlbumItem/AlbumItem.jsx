import React from "react";

import Button from '../../../components/UI/Button/Button'

import classess from './AlbumItem.module.css'

const albumItem = ({ title ,desc,albumCover}) => {
  return (
    <div className={classess.AlbumItem}>
        <img className={classess.AlbumImg} src={albumCover} alt="Album Image"/>
        {/* CARD BODY */}
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>    
        </div>
        {/* ALBUM CONTROL */}
        <div className={classess.AlbumControls}>
            
            <Button btnType="Info">Post To FB</Button>
            <Button btnType="Success">Detail</Button>
            <Button btnType="Danger">Delete</Button>
        </div>
    </div>
  );
};
export default albumItem;
