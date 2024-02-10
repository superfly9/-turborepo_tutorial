"use client";

import {
  ModalComponent,
  ModalDispatch,
  ModalProps,
  ModalState,
} from "@/types/context/modal";
import Modal from "components/Modal";
import React, {
  useContext,
  useMemo,
  useState,
  useCallback,
  ReactNode,
  createContext,
} from "react";

interface Props {
  children: ReactNode;
}

export const ModalDispatchContext = createContext<ModalDispatch>({
  openModal: () => {},
  closeModal: () => {},
});

export const ModalStateContext = createContext<ModalState>([]);

function ModalProvider({ children }: Props) {
  const [modalState, setModalState] = useState<ModalState>([]);

  const openModal = useCallback(
    (Component: ModalComponent, props: ModalProps) => {
      setModalState((modals) => [...modals, { Component, props }]);
    },
    []
  );

  const closeModal = useCallback((Component: ModalComponent) => {
    setModalState((modals) => {
      return modals.filter((modal) => modal.Component !== Component);
    });
  }, []);

  const dispatch = useMemo(() => {
    return {
      openModal,
      closeModal,
    };
  }, [openModal, closeModal]);

  return (
    <ModalDispatchContext.Provider value={dispatch}>
      <ModalStateContext.Provider value={modalState}>
        {children}
        <Modal />
      </ModalStateContext.Provider>
    </ModalDispatchContext.Provider>
  );
}

export default ModalProvider;

export const useModalDispatchContext = () => {
  if (!ModalDispatchContext) {
    throw Error("ModalDispatchContext is not exist");
  }
  return useContext(ModalDispatchContext);
};
export const useModalStateContext = () => {
  if (!ModalStateContext) {
    throw Error("ModalStateContext is not exist");
  }
  return useContext(ModalStateContext);
};
