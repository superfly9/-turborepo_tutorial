import React, { MouseEvent, ReactNode } from "react";
import { Button } from "@repo/ui/src/button";
import styles from "./Modal.module.css";
import { useModalContext } from "app/context/ModalContext/Provider";

export interface Props {
  children: ReactNode;
  useCloseBtn?: boolean;
}
type StandardizedModalType = {
  id: string;
  type?: "confirm" | "delete" | "alert";
  title?: ReactNode;
  description: ReactNode;
  buttonText?: {
    confirm?: string;
    alert?: string;
    delete?: string;
  };
  onSuccess?: () => void;
  onClose: () => void;
};

function Modal({ children, useCloseBtn = true }: Props) {
  const { closeModal } = useModalContext();

  const dimmedClickHander = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) closeModal();
  };

  return (
    <div className={styles.modal_overlay} onClick={dimmedClickHander}>
      <div className={styles.modal_content}>
        {useCloseBtn && (
          <div className={styles.closeBtn}>
            <Button onClick={closeModal}>X</Button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

export default Modal;
