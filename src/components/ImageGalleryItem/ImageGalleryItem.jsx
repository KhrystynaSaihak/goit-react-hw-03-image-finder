import PropTypes from 'prop-types';
import { Component } from 'react';

import { ImageModal } from 'components/ImageModal/ImageModal';
import { ImageGalleryItemImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  static propTypes = {
    imgData: PropTypes.object.isRequired,
  };

  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { webformatURL, tags, largeImageURL } = this.props.imgData;
    return (
      <div>
        <ImageModal
          largeImageURL={largeImageURL}
          onClose={this.closeModal}
          isOpen={isModalOpen}
          tags={tags}
        ></ImageModal>
        <ImageGalleryItemImage
          src={webformatURL}
          alt={tags}
          onClick={this.openModal}
        />
      </div>
    );
  }
}
