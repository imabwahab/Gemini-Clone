import {createContext} from "react";

import runChat from "../config/gemini";

const context = createContext();

export const ContextProvider = (props) =>{

  const contextValue = {};

  const onSent = async (message) => {
    await runChat(message);
  }

  onSent("Hello, Gemini!");

  return (
    <context.Provider value={contextValue}>
      {props.children}
    </context.Provider>
  );
}