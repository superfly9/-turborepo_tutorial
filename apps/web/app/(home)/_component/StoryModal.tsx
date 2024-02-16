import React from "react";
import { Carousel, Modal } from "antd";
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
    <div className={styles.profile}>
      <Image src={avatar} alt={nickname} width={30} height={30} />
      <strong>{nickname}</strong>
      <button className={styles.followBtn}>팔로우</button>
    </div>
  );
  return (
    <Modal
      style={{ top: 0, height: "100%" }}
      title={title}
      open={isOpen}
      onCancel={onClose}
      footer={<></>}
    >
      <Carousel dots={false}>
        {images.map((src, index) => (
          <div className={styles.container}>
            <Image
              key={index}
              src={src}
              alt={`${src}_${index}`}
              fill
              style={{ aspectRatio: 1 }}
            />
          </div>
        ))}
      </Carousel>
    </Modal>
  );
}

export default StoryModal;
