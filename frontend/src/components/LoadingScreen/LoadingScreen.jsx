import React from "react";
import ReactLoading from "react-loading";
import "./LoadingScreen.scss";

export default function Loading() {
  return (
    <div className="loading">
      <ReactLoading type="spin" color="#0000FF" height={100} width={50} />
    </div>
  );
}
