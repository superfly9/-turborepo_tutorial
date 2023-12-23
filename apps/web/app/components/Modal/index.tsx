import React from "react";
import { ModalInfo } from "../Story";
import { Button } from "@repo/ui/button";

function Modal({ title, content, id }: ModalInfo) {
  return (
    <>
      <div>{title}</div>
      <div>{content}</div>
      <Button id={id}>Close</Button>
    </>
  );
}

export default Modal;
