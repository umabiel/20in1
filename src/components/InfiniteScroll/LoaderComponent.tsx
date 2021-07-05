import React, { Fragment } from "react";

import "./styles.scss";

interface IProps {
  show: boolean;
}

export const LoaderComponent = ({ show }: IProps) => {
  return (
    <Fragment>
      <div className="loader-container" id="loader-container">
        <div className="loader" id="loader"></div>
      </div>
    </Fragment>
  );
};
