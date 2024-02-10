import { ComponentType } from "react";

export type ModalComponent = ComponentType<any>;
export type ModalProps = Record<string, any>;

export type ModalDispatch = {
  openModal: (Component: ModalComponent, props: ModalProps) => void;
  closeModal: (Component: ModalComponent) => void;
};

export type ModalState = Array<{
    Component: ModalComponent;
    props?: ModalProps;
  }>;
  