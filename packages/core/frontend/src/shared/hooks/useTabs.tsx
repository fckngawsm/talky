import { useCallback, useState } from "react";

interface UseTabsProps {
  defaultValue?: string;
}

export const useTabs = ({ defaultValue }: UseTabsProps) => {
  const [tab, setTab] = useState(() => {
    const localStorageValue = localStorage.getItem("chat-tab");
    return localStorageValue || defaultValue;
  });

  const handleChangeTab = useCallback((selectedTab: string) => {
    setTab(selectedTab);
    localStorage.setItem("chat-tab", selectedTab);
  }, []);

  return {
    tab,
    handleChangeTab,
  };
};
