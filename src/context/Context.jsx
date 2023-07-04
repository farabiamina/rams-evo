import React, { useState, createContext, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  useEffect(() => {
    if (isDropDownOpen) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "scroll"
    }
  }, [isDropDownOpen])

  const contextValue = {
    isDropDownOpen,
    setIsDropDownOpen,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
