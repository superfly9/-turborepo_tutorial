"use client";
import React, { useState, useEffect } from "react";
import { getData } from "../../util/fetch";
import { Button } from "@repo/ui/button";
import { RandomUser } from "../../api/story/route";

function Story() {
  const [storyList, setStoryList] = useState<RandomUser[]>([]);

  useEffect(() => {
    getData("/api/story", 10).then((v) => {
      setStoryList(v);
    });
  }, []);

  return (
    <div>
      {storyList.map((v) => (
        <Button key={v._id}>
          {v.firstName} {v.lastName}
        </Button>
      ))}
    </div>
  );
}

export default Story;
