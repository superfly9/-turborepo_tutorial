"use client";
import React, { useState, useEffect } from "react";
import { getData } from "@/util/fetch";
import { Button } from "@repo/ui/src/button";
import Modal from "components/Modal";
import { RandomStory } from "app/(home)/story/route";
import Image from "next/image";
import styles from "./Story.module.css";
import { useModalContext } from "@/context/ModalContext/Provider";

function Story() {
  const [storyList, setStoryList] = useState<RandomStory[]>([]);
  const [currentStoryIdx, setCurrentStoryIdx] = useState<number>(0);
  const { isOpen, openModal } = useModalContext();
  useEffect(() => {
    getData<RandomStory>("/story").then((v) => {
      setStoryList([...v]);
    });
  }, []);
  const handleClick = (modalContent: RandomStory, idx: number) => {
    openModal(modalContent);
    setCurrentStoryIdx(idx);
  };

  const handleStoryDivider = (idx: number) => {
    setCurrentStoryIdx(idx);
  };

  return (
    <div className={styles.wrapper}>
      {storyList.map(({ avatar, _id, firstName, ...rest }, index) => {
        const isFirst = index === 0;
        return (
          <div className={styles.story} key={_id}>
            <Button
              className={styles.story_profile}
              onClick={() =>
                handleClick({ avatar, _id, firstName, ...rest }, index)
              }
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
          <>
            <ul>
              {storyList.map((_, idx) => (
                <li
                  onClick={() => setCurrentStoryIdx(idx)}
                  key={`tab-${idx}`}
                  style={{
                    width: `calc(100vw /${storyList.length} - 3px)`,
                    height: "2px",
                    left: `calc((70vw /${storyList.length}) * ${idx})`,
                  }}
                  className={styles.tab}
                />
              ))}
            </ul>
            {storyList.map(({ firstName, avatar }, index) => (
              <div
                className={`${styles.content_wrapper}  ${
                  currentStoryIdx === index ? styles.active : ""
                }`}
              >
                <div
                  className={styles.content}
                  onClick={() => handleStoryDivider(index)}
                >
                  <Image src={avatar} alt={firstName} fill />
                </div>
              </div>
            ))}
          </>
        </Modal>
      )}
    </div>
  );
}

export default Story;
