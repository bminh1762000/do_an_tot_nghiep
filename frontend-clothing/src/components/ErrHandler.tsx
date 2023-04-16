import React, { Fragment } from "react";

import Modal from "./Modal";

const ErrorHandler = (props) => {
  return (
    <Fragment>
      {props.error && (
        <Modal
          title="A Error Occurred!"
          onAcceptModal={props.onHandle}
          onCancelModal={props.onHandle}
        >
          <p>{props.message.data}</p>
        </Modal>
      )}
    </Fragment>
  );
};

export default ErrorHandler;
