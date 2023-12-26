"use client";
import React, { useState, useEffect } from "react";
import { getData } from "app/util/fetch";
import { Button } from "@repo/ui/src/button";
import Modal from "component/Modal";
import { RandomStory } from "api/story/route";
import Image from "next/image";
import styles from "./Story.module.css";

export interface ModalInfo {
  title: string;
  content: any;
  onClick: () => void;
}

function Story() {
  const [storyList, setStoryList] = useState<RandomStory[]>([]);
  const [openModalInfo, setOpenModalInfo] = useState<RandomStory | null>(null);

  useEffect(() => {
    getData<RandomStory>("/api/story", 10).then((v) => {
      setStoryList([...v]);
    });
  }, []);
  const handleClick = (modalContent: RandomStory) => {
    setOpenModalInfo(modalContent);
  };

  const handleModalClick = () => {};
  if (storyList.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.wrapper}>
      {storyList.map(({ avatar, _id, firstName, ...rest }) => (
        <Button
          className={styles.story_profile}
          onClick={() => handleClick({ avatar, _id, firstName, ...rest })}
          key={_id}
        >
          <Image src={avatar} fill alt={firstName} />
        </Button>
      ))}
      {openModalInfo && (
        <Modal
          title={openModalInfo.title}
          content={openModalInfo.description}
          onClick={handleModalClick}
        />
      )}
    </div>
  );
}

export default Story;
