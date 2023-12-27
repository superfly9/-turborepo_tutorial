import React from "react";
import { ModalInfo } from "component/Story";
import { Button } from "@repo/ui/src/button";
import styles from "./Modal.module.css";

function Modal({ title, content, onClick, onClose }: ModalInfo) {
  const handleClose = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const currentTarget = e.currentTarget;
    if (currentTarget !== e.target) {
      onClose();
    }
  };
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    onClick();
  };
  return (
    <div className={styles.modal_overlay} onClick={handleClose}>
      <Button onClick={handleClose}>X</Button>
      <div className={styles.modal_content}>
        <div>{title}</div>
        <div>{content}</div>
        <Button onClick={handleClick} children={title} />
      </div>
    </div>
  );
}

export default Modal;
