import { useCallback, useEffect, useRef, useState } from "react";

const ONE_MINUTE_IN_SEC = 60;

export const useTimer = () => {
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);
  const animationRef = useRef<number | null>(null);
  const endTimeRef = useRef<number | null>(null);

  const startTimer = useCallback((duration: number = ONE_MINUTE_IN_SEC) => {
    endTimeRef.current = Date.now() + duration * 1000;
    localStorage.setItem("codeTimerEnd", String(endTimeRef.current));
    animationRef.current = requestAnimationFrame(updateTimer);
  }, []);

  useEffect(() => {
    const savedEndTime = localStorage.getItem("codeTimerEnd");
    if (savedEndTime) {
      const remaining = Math.max(0, Math.floor((Number(savedEndTime) - Date.now()) / 1000));
      if (remaining > 0) {
        setSecondsLeft(remaining);
        startTimer(remaining);
      } else {
        localStorage.removeItem("codeTimerEnd");
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

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

  return {
    secondsLeft,
    animationRefCurrent: animationRef?.current,
    startTimer,
  };
};
