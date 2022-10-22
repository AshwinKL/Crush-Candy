import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal">{children}</div>
    </div>,
    document.getElementById("portal-modal")
  );
};

export default Modal;
