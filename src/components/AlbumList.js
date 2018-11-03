import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {

    state = {
        Albums: []
    };

    //it's called before render something, so we can deal with fetching data, and so on, before showing it up.
    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({Albums: response.data}));
    }

    renderAlbums(){
        return this.state.Albums.map(album => <AlbumDetail key={album.title} albums={this.state.Albums}/>);
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }   
}

export default AlbumList;