import React from "react";
import { ModalInfo } from "component/Story";
import { Button } from "@repo/ui/src/button";
import styles from "./Modal.module.css";

function Modal({ title, content, onClick }: ModalInfo) {
  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <div>{title}</div>
        <div>{content}</div>
        <Button onClick={onClick} children={title} />
      </div>
    </div>
  );
}

export default Modal;
