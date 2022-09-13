import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [" Développeur FullStack ", " Développeur Front-End "],
        autoStart: true,
        loop: true,
        deleteSpeed: 70
      }}
    />
  );
};
