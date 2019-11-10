import React, { Component } from 'react'

import {Switch,Route} from 'react-router-dom'
import AlbumList from './AlbumList/AlbumList'
import AddAlbumPage from './AddAlbum/AddAlbum'
import Aux from '../../hoc/Auxalary/Auxalary'

export class Albums extends Component {
    render() {
        return (
            <Aux>
                <Switch>
                    <Route path="/albums/create" component={AddAlbumPage} />
                    <Route path="/albums" component={AlbumList} />
                    <Route path="/" component={AlbumList} />
                </Switch>
            </Aux>
        )
    }
}

export default Albums
