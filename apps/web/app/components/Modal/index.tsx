import React from "react";
import { ModalInfo } from "component/Story";
import { Button } from "@repo/ui/src/button";

function Modal({ title, content, onClick }: ModalInfo) {
  return (
    <>
      <div>{title}</div>
      <div>{content}</div>
      <Button onClick={onClick} children={title} />
    </>
  );
}

export default Modal;
