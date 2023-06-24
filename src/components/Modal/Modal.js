import React from 'react';
import css from './modal.module.css'

const Modal = ({onClose , children}) => {
    return (
        <div className={css.mask} onClick={onClose}>
            <div className={css.modal} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;