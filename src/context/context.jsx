import { createContext, use, useEffect, useState } from "react";

import runChat from "../config/gemini";

export const chatContext = createContext({
  input: "",
  setInput: () => { },
  recentPrompt: [],
  setRecentPrompt: () => { },
  previousPrompt: "",
  setPreviousPrompt: () => { },
  showResult: false,
  setShowResult: () => { },
  resultData: '',
  setResultData: () => { },
  loading: false,
  setLoading: () => { },
  onSent: () => { },

});

export const ContextProvider = (props) => {
  const [input, setInput] = useState('');
  const [recentPrompt, setRecentPrompt] = useState([]);
  const [previousPrompt, setPreviousPrompt] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState('');
  const [loading, setLoading] = useState(false);

  const onSent = async (message) => {
    setResultData('');

    setLoading(true);
    setShowResult(true);
    const result = await runChat(message);
    if (result !== null) {
      setRecentPrompt(prev => [...prev, message]);
      setResultData(result);
      setLoading(false);
      setShowResult(true);

    }
  }

  const contextValue = {
    input,
    setInput,
    previousPrompt,
    setPreviousPrompt,
    onSent,
    recentPrompt,
    setRecentPrompt,
    showResult,
    loading,
    resultData

  };

  return (
    <chatContext.Provider value={contextValue}>
      {props.children}
    </chatContext.Provider>
  );

}

