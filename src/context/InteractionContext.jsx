import React from 'react'
import { createContext, useContext, useState } from 'react'


const InteractionContext = createContext()

export const InteractionProvider = ({children}) => {
  const [interactions, setInteractions] = useState([]);
  
  const addInteraction = (item) => {
    setInteractions((prev) => [item, ...prev]);
  };



  return (
    <InteractionContext.Provider 
    value={{interactions, addInteraction}}>
      {children}
    </InteractionContext.Provider>
  );
};

export const useInteraction = () => {
  return useContext(InteractionContext);
};