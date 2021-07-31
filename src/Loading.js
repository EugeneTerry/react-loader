 
import React, { useState } from "react";

export default function Loading({ startText, stopText }) {
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Loading");

  const handleClick = () => {
    setLoading((prevState) => !prevState);
    setLoadingText((prevState) => {
      if (prevState === "Loading") {
        return "Not Loading";
      } else {
        return "Loading";
      }
    });
  };
  return (
    <div>
      <h2>{loadingText}</h2>
      <button onClick={handleClick}>{!loading ? startText : stopText}</button>
    </div>
  );
}

/* const Load = ()=>{ startText, stopText
  {start}
  return {true}
}
*/
