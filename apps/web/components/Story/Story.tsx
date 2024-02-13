"use client";
import React, { useState, useEffect } from "react";
import { getData } from "@/util/fetch";
import { Button } from "@repo/ui/src/button";
import { RandomStory } from "app/(home)/story/route";
import Image from "next/image";
import styles from "./Story.module.css";

function Story() {
  const [storyList, setStoryList] = useState<RandomStory[]>([]);
  const [currentStoryIdx, setCurrentStoryIdx] = useState<number>(0);
  useEffect(() => {
    getData<RandomStory>("/story").then((v) => {
      setStoryList([...v]);
    });
  }, []);
  const handleClick = (modalContent: RandomStory, idx: number) => {
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
    </div>
  );
}

export default Story;
