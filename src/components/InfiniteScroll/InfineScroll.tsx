import React, { Fragment } from "react";

import "../../App.scss";
import { LoaderComponent } from "./LoaderComponent";
import "./styles.scss";

export const InfineScroll = () => {
  return (
    <Fragment>
      <h1>Unsplash API - React Infinite Scroll</h1>
      <LoaderComponent show={true} />
    </Fragment>
  );
};
