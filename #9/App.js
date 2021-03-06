import React, { Component } from 'react';
import { View } from 'react-native';
import YTSearch from 'youtube-api-search';
import AppHeader from './components/AppHeader';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyAPHwRiCIpUPqgntbSzBpnOxHnVaxJwPjw';
/*
  Remember to populate this API_KEY with you own API_KEY
  Checkout my video here showing you how to do that
  https://youtu.be/AqWz1NA9unQ
*/

export default class App extends Component {
  state = {
    loading: false,
    videos: []
  }

  componentWillMount() {
    this.searchYT('Barry Michael Doyle');
  }

  onPressSearch = term => {
    this.searchYT(term);
  }

  searchYT = term => {
    this.setState({ loading: true });
    YTSearch({ key: API_KEY, term }, videos => {
      console.log(videos);
      this.setState({
        loading: false,
        videos
      });
    });
  }
  
  render() {
    const { loading, videos } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <AppHeader headerText="Simple YouTube Search" />
        <SearchBar
          loading={loading}
          onPressSearch={this.onPressSearch}
        />
        <VideoList videos={videos} />
      </View>
    );
  }
}
