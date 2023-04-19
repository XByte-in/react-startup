import React from "react";
import "./modalTest.scss";
import { IModalComponentParams } from "../common/components/modal/interface";

interface IModalTestParams extends IModalComponentParams {

}

const ModalTest = (props: IModalTestParams) => {
  return <div className="modal-test"></div>;
};

export default ModalTest;
