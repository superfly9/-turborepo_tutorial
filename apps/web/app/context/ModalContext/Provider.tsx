"use client";

import React, { useContext, useMemo, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ModalContext = React.createContext({
  isOpen: false,
  openModal: (param: any) => {},
  closeModal: () => {},
});

function ModalProvider({ children }: Props): ReactNode {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalInfo, setModalInfo] = useState<any>(undefined);
  const openModal = (modalInfo: any) => {
    setIsOpen(true);
    setModalInfo(modalInfo);
  };
  const closeModal = () => setIsOpen(false);

  const value = useMemo(
    () => ({
      isOpen,
      modalInfo,
      openModal,
      closeModal,
    }),
    [isOpen, modalInfo, openModal, closeModal]
  );

  return (
    <ModalContext.Provider value={value}>
      {<>{children}</>}
    </ModalContext.Provider>
  );
}

export default ModalProvider;

export const useModalContext = () => {
  return useContext(ModalContext);
};
