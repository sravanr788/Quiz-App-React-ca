// Importing necessary hooks from React
import React, { createContext, useContext, useState } from 'react';

// Creating a React context to manage quiz result 
const ResultContext = createContext();

// Creating a provider component to wrap the application and provide access to the context
export const ResultProvider = ({ children }) => {
  // State variable for the number of correct answers
  const [correct, setCorrect] = useState(0);

  // Providing the state and setter functions to the children in the context
  return (
    <ResultContext.Provider value={{ correct, setCorrect }}>
      {children}
    </ResultContext.Provider>
  );
};

// Custom hook to conveniently access the values from the ResultContext
export const useResultValue = () => useContext(ResultContext);
