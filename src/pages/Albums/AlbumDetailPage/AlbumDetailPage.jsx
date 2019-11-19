import React, { Component } from 'react'

class AlbumDetailPage extends Component {

    componentDidMount(){
        console.log(this.props)
    }

    render() {
        const {id} = this.props.match.params
        return (
            <div>
                <h1>Album Detail Page {id}</h1>
            </div>
        )
    }
}

export default AlbumDetailPage
