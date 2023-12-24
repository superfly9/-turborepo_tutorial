"use client";
import React, { useState, useEffect } from "react";
import { getData } from "../../util/fetch";
import { Button } from "@repo/ui/src/button";
import { RandomUser } from "../../api/story/route";
import Modal from "../Modal";

export interface ModalInfo {
  title: string;
  content: any;
  onClick: () => void;
}

function Story() {
  const [storyList, setStoryList] = useState<RandomUser[]>([]);
  const [openModalInfo, setOpenModalInfo] = useState<RandomUser | null>(null);

  useEffect(() => {
    getData("/api/story", 10).then((v) => {
      setStoryList(v);
    });
  }, []);
  const handleClick = (modalContent: RandomUser) => {
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
          {v.firstName} {v.lastName}
        </Button>
      ))}
      {openModalInfo && (
        <Modal
          title={openModalInfo.subscriptionTier}
          content={openModalInfo.description}
          onClick={handleModalClick}
        />
      )}
    </div>
  );
}

export default Story;
