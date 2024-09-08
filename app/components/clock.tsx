"use client";
import React from "react";
import Clock from "react-live-clock";

const ClockWrapper: React.FC = () => {
  return (
    <div>
      <span>BKK </span>
      <Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Bangkok"} />
    </div>
  );
};
export default ClockWrapper;
