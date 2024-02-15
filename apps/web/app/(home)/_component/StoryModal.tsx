import React from "react";
import { Modal } from "antd";
import Image from "next/image";
import { RandomStory } from "@/mocks/response/story";
import styles from "./StoryModal.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  modalContent: RandomStory;
}

function StoryModal({ isOpen, onClose, modalContent }: Props) {
  const { avatar, nickname, images } = modalContent;
  const title = (
    <>
      <Image src={avatar} alt={nickname} width={30} height={30} />
      <strong>{nickname}</strong>
      <button>팔로우</button>
    </>
  );
  return (
    <Modal title={title} open={isOpen} onCancel={onClose} footer={<></>}>
      {images.map((src, index) => (
        <Image src={src} alt={`${src}_${index}`} width={30} height={30} />
      ))}
    </Modal>
  );
}

export default StoryModal;
