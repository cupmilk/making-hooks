import { useState } from "react";

export const useTabs = (intialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(intialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
