import React, { useContext, useRef } from 'react'
import ReactMarkdown from 'react-markdown';
import  panda  from '../../assets/panda.png'

import { chatContext } from '../../context/context';
import { RiGeminiFill } from "react-icons/ri";
import './Main.css';
import Loading from '../Loader/Loading';
import NavBar from '../NavBar/NavBar';
import Cards from '../Cards/Cards';
import BottomBar from '../BottomBar/BottomBar';

const Main = () => {
  const { input, setInput, onSent, recentPrompt, showResult, loading, resultData, setRecentPrompt } = useContext(chatContext);

  

  return (
    <div className='messageWindow'>
      <NavBar />

      <div className="mainContainer">

        {!showResult && <div className="greet">
          <p><span>Hello, Abdul Wahab.</span></p>
          <p>How I can help you today?</p>
        </div>}

        {!showResult && <Cards /> }

        {showResult && (
          <div className="gemini-style-result">

            <div className="prompt-box">
              <img src={panda} alt="" />
              <p>{input}</p>
            </div>

            <div className="response-box">
              {loading ? (
                <>
                  <Loading />
                </>
              ) : (
                <div className="markdown-response">
                  <RiGeminiFill className='icon' />
                  <div><ReactMarkdown >
                    {resultData}
                  </ReactMarkdown></div>

                </div>
              )}
            </div>
          </div>
        )}

        <BottomBar />

      </div>

    </div>

  )
}

export default Main