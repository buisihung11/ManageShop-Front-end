import React, { Component } from "react";
import AlbumItem from "./AlbumItem/AlbumItem";

import classess from './AlbumList.module.css'

const albums = [
  {
    id: 1,
    title: "Album 1",
    description: "Description 1",
    albumCover: 'https://images.unsplash.com/photo-1531525797753-909788106ccb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: "Album 2",
    description: "Description 2",
    albumCover: 'https://images.unsplash.com/photo-1565622871630-8e453c4b6ed9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
  }
];

 class AlbumList extends Component {
  render() {
    const albumsComponent = albums.map(album => {
      return <AlbumItem key={album.title} id={album.id} title={album.title}
                         desc={album.description} albumCover={album.albumCover}/>;
    });

    return (
      <div className={classess.AlbumList}>
        {albumsComponent}
      </div>
    );
  }
}

export default AlbumList;
