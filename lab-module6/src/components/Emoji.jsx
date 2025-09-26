import { useState } from "react";

export default function Emoji() {
  const options = ["🤡", "🥲", "🫠", "😂", "😶"];

  const [emoji, setEmoji] = useState("🤡");

  const handleEmojiChange = () => {
    const index = Math.floor(Math.random()*5)
    setEmoji(options[index]);
  };

  return (
    <div className="mb-4">
      <h1>{emoji}</h1>
      <button className="btn btn-primary" onClick={handleEmojiChange}>
        Change My Face!
      </button>
    </div>
  );
}
