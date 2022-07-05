import React, { useState } from "react";
import ApplicationContext from "./ApplicationContext";


const ApplicationProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const applicationProviderValues = {isLoggedIn, setIsLoggedIn}; 
  return (
  <ApplicationContext.Provider value={applicationProviderValues}>
    {children}
  </ApplicationContext.Provider>)
}

export default ApplicationProvider