import React, { Component } from 'react'

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

export class AddAlbum extends Component {
    render() {
        return (
            <div>
                <form action="">
                    <Input label="Album Title" elementType="input" />
                    <Input label="Album Description" elementType="textarea" />
                    <Input label="Categories" elementType="input" />
                    <Button btnType="Success">Save</Button>
                </form>
            </div>
        )
    }
}

export default AddAlbum
