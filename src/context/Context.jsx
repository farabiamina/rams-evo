import React, { useState, createContext, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [is404, setIs404] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    const currentPath = window.location.pathname;
    if (currentPath !== "/") {
      setIs404(true);
    }
  }, [window.location.pathname]);

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
    is404,
    setIs404,
    isSubmitted,
    setIsSubmitted,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
