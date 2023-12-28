import React, { MouseEvent, ReactNode } from "react";
import { Button } from "@repo/ui/src/button";
import styles from "./Modal.module.css";

export interface Props {
  children: ReactNode;
  useCloseBtn?: boolean;
  onClose: () => void;
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

function Modal({ children, onClose, useCloseBtn = true }: Props) {
  const handleClose = () => {
    onClose();
  };
  const dimmedClickHander = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) handleClose();
  };

  return (
    <div className={styles.modal_overlay} onClick={dimmedClickHander}>
      <div className={styles.modal_content}>
        {useCloseBtn && (
          <div className={styles.closeBtn}>
            <Button onClick={handleClose}>X</Button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

export default Modal;
