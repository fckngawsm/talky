import { useEffect, useState } from "react";

interface UseDebounceProps {
  value: string;
  delay?: number;
}

export const useDebounce = ({ value, delay = 300 }: UseDebounceProps): string => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};
