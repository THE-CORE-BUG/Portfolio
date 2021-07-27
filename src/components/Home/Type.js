import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "VFX Designer",
          "MERN Stack Developer",
          "Programmer",
          "Story Teller"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 3,
      }}
    />
  );
}

export default Type;
