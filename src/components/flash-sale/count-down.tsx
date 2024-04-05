"use client";
import { useEffect, useState, useCallback, useMemo } from "react";

const CountdownTimer: React.FC = () => {
  const endDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date;
  }, []);

  const calculateTimeLeft = useCallback(() => {
    const difference = +endDate - +new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [endDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="text-2xl font-bold flex justify-center items-center gap-4">
      <h2>End Time: </h2>
      <p className="p-2 bg-red-300 rounded">{timeLeft.days}D</p>
      <p className="p-2 bg-red-300 rounded">{timeLeft.hours}H</p>
      <p className="p-2 bg-red-300 rounded">{timeLeft.minutes}M</p>
      <p className="p-2 bg-red-300 rounded">{timeLeft.seconds}S</p>
    </div>
  );
};

export default CountdownTimer;
