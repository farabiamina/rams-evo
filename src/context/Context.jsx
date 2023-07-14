import React, { useState, createContext, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(true);

  useEffect(() => {
    if (isDropDownOpen) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "scroll"
    }
  }, [isDropDownOpen])

  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "scroll"
    }
  }, [isFormOpen])

  const contextValue = {
    isDropDownOpen,
    setIsDropDownOpen,
    isFormOpen,
    setIsFormOpen,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
