import React, { Component } from 'react'

import {Switch,Route} from 'react-router-dom'
import AlbumListPage from './AlbumListPage/AlbumListPage'
import AddAlbumPage from './AddAlbumPage/AddAlbumPage'
import Aux from '../../hoc/Auxalary/Auxalary'
import AlbumDetailPage from './AlbumDetailPage/AlbumDetailPage'

export class Albums extends Component {
    render() {
        return (
            <Aux>
                <Switch>
                    <Route path="/albums/create" component={AddAlbumPage} />
                    <Route path="/albums/:id" component={AlbumDetailPage} />
                    <Route path="/albums" component={AlbumListPage} />
                    <Route path="/" component={AlbumListPage} />
                </Switch>
            </Aux>
        )
    }
}

export default Albums
