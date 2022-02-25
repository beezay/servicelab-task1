import React from 'react';
import modalStyles from '../styles/Modal.module.css';

const Modal = (props) => {
  const { onClose, data } = props;

  const onCloseHandler = () => {
    onClose(false);
  };

  return (
    <React.Fragment>
      <div className={modalStyles.modalWrapper}>
        <div className={modalStyles.modalCard}>
          <div className={modalStyles.modalHeader}>
            <div className='modal-title'>{data.description}</div>
            <button
              className={modalStyles.closeModalBtn}
              onClick={onCloseHandler}
            >
              close
            </button>
          </div>
          <hr />
          <div className={modalStyles.modalBody}>
            <p>
              Rate: <span>{data.rate}</span>
            </p>
            <p>
              Rate Float: <span>{data.rate_float}</span>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
