import React from "react";

const Modal = (props) => {

return <div className="modal">
  <div className="header">
    {props.header || <h1>Modal Title</h1>}
    <a>X</a>
  </div>
  <div className="body">
    {props.children}
  </div>
  <div className="actions">
    {props.actions || <>
      <a>Cancel</a>
      <a>Accept</a>
    </>}
  </div>
</div>
};

export default Modal;

/*
<Modal
  header={<h2>New Card</h2>}
  actions={<a>Submit</a>}
  >
  <div>Modal Body</div>
</Modal>
*/