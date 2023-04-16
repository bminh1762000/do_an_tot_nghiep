import React from "react";

import { default as Spinners } from "./Spinner";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? <Spinners /> : <WrappedComponent {...otherProps} />;
  };

  return Spinner;
};

export default WithSpinner;
