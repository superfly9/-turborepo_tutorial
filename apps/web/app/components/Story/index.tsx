import React, { useState } from "react";

function Story() {
  const [storyList, setStoryList] = useState<string[]>([]);
  return (
    <div>
      {storyList.map((v) => (
        <li>{v}</li>
      ))}
    </div>
  );
}

export default Story;
