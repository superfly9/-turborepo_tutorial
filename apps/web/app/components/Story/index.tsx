"use client";
import React, { useState, useEffect } from "react";
import { getData } from "app/util/fetch";
import { Button } from "@repo/ui/src/button";
import Modal from "component/Modal";
import { RandomStory } from "api/story/route";

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
    <div>
      {storyList.map((v) => (
        <Button onClick={() => handleClick(v)} key={v._id}>
          <p>
            {v.firstName} {v.lastName}
          </p>
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
