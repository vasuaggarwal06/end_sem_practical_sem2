import react from "react";
import { useState } from "react";

const Button = () => {
  const [isLiked, setisLiked] = useState(false);

  const toggleLike = () => {
    setisLiked(!isLiked);
  };

  return (
    <button
      onClick={toggleLike}
      style={{
        background: "none",
        border: "none",
        fontSize: "20rem",
        cursor: "pointer",
        padding: "10px",
      }}
      aria-label={isLiked ? "dislike" : "Like"}
    >
      {isLiked ? "❤️" : "🤍"}
    </button>
  );
};

export default Button;
