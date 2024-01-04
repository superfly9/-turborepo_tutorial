"use client";
import React, { useState, useEffect } from "react";
import { getData } from "app/util/fetch";
import { Button } from "@repo/ui/src/button";
import Modal from "component/Modal";
import { RandomStory } from "api/story/route";
import Image from "next/image";
import styles from "./Story.module.css";
import { useModalContext } from "app/context/ModalContext/Provider";

function Story() {
  const [storyList, setStoryList] = useState<RandomStory[]>([]);
  const [currentStoryIdx, setCurrentStoryIdx] = useState<number>(0);
  const { isOpen, openModal } = useModalContext();
  useEffect(() => {
    getData<RandomStory>("/api/story", 10).then((v) => {
      setStoryList([...v]);
    });
  }, []);
  const handleClick = (modalContent: RandomStory) => {
    openModal(modalContent);
  };

  if (storyList.length === 0) {
    return <p>Loading...</p>;
  }

  const handleStoryDivider = (idx: number) => {
    setCurrentStoryIdx(idx);
  };

  return (
    <div className={styles.wrapper}>
      {storyList.map(({ avatar, _id, firstName, ...rest }, index) => {
        const isFirst = index === 0;
        return (
          <div className={styles.story}>
            <Button
              className={styles.story_profile}
              onClick={() => handleClick({ avatar, _id, firstName, ...rest })}
              key={_id}
            >
              <Image src={avatar} width={62} height={62} alt={firstName} />
            </Button>
            <span className={styles.name}>
              {isFirst ? "Your Story" : firstName}
            </span>
          </div>
        );
      })}
      {isOpen && (
        <Modal>
          {storyList.map(({ firstName, avatar }, index) => (
            <div className={styles.content_wrapper}>
              <div key={`${firstName}-${index}`} className={styles.divider} />
              <div
                className={`${styles.content} ${
                  currentStoryIdx === index ? styles.active : ""
                }`}
                onClick={() => handleStoryDivider(index)}
              >
                <Image src={avatar} alt={firstName} fill />
              </div>
            </div>
          ))}
        </Modal>
      )}
    </div>
  );
}

export default Story;
