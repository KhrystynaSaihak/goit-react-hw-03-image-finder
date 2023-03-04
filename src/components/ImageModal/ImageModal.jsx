import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'none',
    border: 'none',
  },
  overlay: {
    position: 'fixed',
    backgroundColor: ' rgba(0, 0, 0, 0.8)',
  },
};

ReactModal.setAppElement('#root');

export const ImageModal = ({ largeImageURL, tags, onClose, isOpen }) => {
  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel=""
      >
        <img src={largeImageURL} alt={tags} width={800} />
      </ReactModal>
    </div>
  );
};

ImageModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
