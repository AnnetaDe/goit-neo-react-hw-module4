import Modal from 'react-modal';
Modal.setAppElement('#root');
import s from './Modal.module.css';

const ModalWindow = ({ isOpen, imageUrl, closeModal }) => {
  return (
    <Modal
      className={s.modal}
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image modal"
    >
      <button className={s.modalBtn} onClick={() => closeModal()}>
        close
      </button>
      <img className={s.modalImg} src={imageUrl} alt="modal image" />
    </Modal>
  );
};
export default ModalWindow;
