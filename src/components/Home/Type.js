import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Scalable Bussiness Solutions",
          "One Stop Solutions",
          "Excellent Services To Clients ",
          "Value Addition with Edge of Technology",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 90,
      }}
    />
  );
}

export default Type;
