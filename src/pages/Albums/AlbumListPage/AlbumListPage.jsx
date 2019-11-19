import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from '../../../components/UI/Button/Button';
import AlbumList from "../../../components/AlbumList/AlbumList";

export class AlbumListPage extends Component {
  render() {
    return (
      <div>
        <h1>Album List: </h1>
        <Button btnType="Success">
            <Link to="/albums/create">Create new Album </Link>
            <i className="fas fa-plus"></i>
        </Button>
        <AlbumList />
      </div>
    );
  }
}

export default AlbumListPage;
