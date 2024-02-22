"use client";
import React, { useState, useEffect } from "react";
import { getData } from "@/util/fetch";
import { Button } from "@repo/ui/src/button";
import Image from "next/image";
import styles from "./Story.module.css";
import StoryModal from "app/(home)/_component/StoryModal";
import { useModalDispatchContext } from "../../context/ModalContext/Provider";
import { RandomStory } from "@/mocks/response/story";

function Story() {
  const { openModal } = useModalDispatchContext();
  const [storyList, setStoryList] = useState<RandomStory[]>([]);
  const [currentStoryIdx, setCurrentStoryIdx] = useState<number>(0);
  useEffect(() => {
    getData<RandomStory>(`http://localhost:3000/api/story`).then((result) => {
      setStoryList(result);
    });
  }, []);
  const handleClick = (modalContent: RandomStory, idx: number) => {
    setCurrentStoryIdx(idx);
    openModal(StoryModal, { isOpen: true, modalContent });
  };

  return (
    <div className={styles.wrapper}>
      {storyList.map(({ avatar, nickname, _id, ...rest }, index) => {
        const isFirst = index === 0;
        return (
          <div className={styles.container} key={_id}>
            <Button
              className={styles.storyBtn}
              onClick={() =>
                handleClick({ avatar, nickname, _id, ...rest }, index)
              }
              key={_id}
            >
              <Image
                src={avatar}
                width={62}
                height={62}
                alt={nickname}
                className={styles.profile}
              />
              <span className={styles.name}>
                {isFirst ? "Your Story" : nickname}
              </span>
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default Story;
