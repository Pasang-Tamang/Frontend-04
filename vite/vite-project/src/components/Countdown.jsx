import React from "react";
import { useState } from "react";

const Countdown = () => {
  const [timer, setTimer] = useState(0);

  const changeTime = (time) => {
    setTimeout(() => {
      setTimer((time += 1));
    }, 1000);
  };

  changeTime(timer);

  return (
    <div>
      <h1>Live CountDown</h1>

      {timer}
    </div>
  );
};

export default Countdown;
