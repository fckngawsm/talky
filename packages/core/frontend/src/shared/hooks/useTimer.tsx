import { useCallback, useEffect, useRef, useState } from "react";

const ONE_MINUTE_IN_SEC = 60;

export const useTimer = () => {
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);
  const animationRef = useRef<number | null>(null);
  const endTimeRef = useRef<number | null>(null);

  const updateTimer = useCallback(() => {
    if (!endTimeRef.current) return;

    const now = Date.now();
    const remaining = Math.max(0, Math.floor((endTimeRef.current - now) / 1000));

    setSecondsLeft(remaining > 0 ? remaining : null);

    if (remaining > 0) {
      animationRef.current = requestAnimationFrame(updateTimer);
    } else {
      localStorage.removeItem("codeTimerEnd");
      endTimeRef.current = null;
    }
  }, []);

  const startTimer = useCallback(
    (duration: number = ONE_MINUTE_IN_SEC) => {
      const newEndTime = Date.now() + duration * 1000;
      endTimeRef.current = newEndTime;
      localStorage.setItem("codeTimerEnd", String(newEndTime));

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      animationRef.current = requestAnimationFrame(updateTimer);
    },
    [updateTimer],
  );

  useEffect(() => {
    const savedEndTime = localStorage.getItem("codeTimerEnd");

    if (savedEndTime) {
      const endTime = Number(savedEndTime);
      const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));

      if (remaining > 0) {
        endTimeRef.current = endTime;
        setSecondsLeft(remaining);
        animationRef.current = requestAnimationFrame(updateTimer);
      } else {
        localStorage.removeItem("codeTimerEnd");
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [updateTimer]);

  return {
    secondsLeft,
    startTimer,
  };
};
