"use client";

import React from "react";
import {
  useModalDispatchContext,
  useModalStateContext,
} from "@/context/ModalContext/Provider";

function Modal() {
  const modalState = useModalStateContext();
  const { closeModal } = useModalDispatchContext();
  return (
    <>
      {modalState.map((modal, index) => {
        const { Component, props } = modal;
        if (!Component || !props) return null;
        const { onSubmit, ...rest } = props;
        const closeBtnClick = () => closeModal(Component);
        return <Component key={index} onClose={closeBtnClick} {...rest} />;
      })}
    </>
  );
}

export default Modal;
