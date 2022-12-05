import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developing The Web...",
          "Developing MERN Stack Projects...",
          "Contributing To Open Source...",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 88,
      }}
    />
  );
}

export default Type;
