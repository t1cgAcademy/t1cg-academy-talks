import React, { Component } from 'react';

export default class PhotoAlbum extends Component {
  state = {
    photos: []
  };

  componentDidMount() {
    fetch('https://picsum.photos/v2/list')
      .then(resp => resp.json())
      .then(data => this.setState({ photos: data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="photo-container">
        {this.state.photos.map((photo, i) => (
          <img className="gallery" key={i} src={`${photo.download_url}`} alt={`${photo.url}`} />
        ))}
      </div>
    );
  }
}
