"use client";
import React, { useState, useEffect } from "react";
import { getData } from "../../util/fetch";
import { Button } from "@repo/ui/button";
import { RandomUser } from "../../api/story/route";
import Modal from "../Modal";

export interface ModalInfo {
  title: string;
  content: any;
  id: string;
}

function Story() {
  const [storyList, setStoryList] = useState<RandomUser[]>([]);
  const [openModalInfo, setOpenModalInfo] = useState<string | null>();

  useEffect(() => {
    getData("/api/story", 10).then((v) => {
      setStoryList(v);
    });
  }, []);
  const handleClick = (modalId: string) => {
    setOpenModalInfo(modalId);
  };

  return (
    <div>
      {storyList.map((v) => (
        <Button onClick={() => handleClick(v._id)} key={v._id}>
          {v.firstName} {v.lastName}
        </Button>
      ))}
      {openModalInfo && <Modal id={openModalInfo} />}
    </div>
  );
}

export default Story;
