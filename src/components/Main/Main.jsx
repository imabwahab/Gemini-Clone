import React from 'react'
import { assets } from '../../assets/assets';
import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';

import './Main.css';
const Main = () => {
  return (
    <div className='messageWindow'>
      <nav>
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </nav>

      <div className="mainContainer">
        <div className="greet">
          <p><span>Hello, Abdul Wahab.</span></p>
          <p>How I can help you today?</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip.</p>
            <img src={assets.compass_icon} alt="" />
          </div>

          <div className="card">
            <p>Briefly explain the concept: Urban planning.</p>
            <img src={assets.bulb_icon} alt="" />
          </div>

          {/* <div className="card">
            <p>Brainstorm team bonding activities for our work retreat.</p>
            <img src={assets.message_icon} alt="" />
          </div> */}

          <div className="card">
            <p>Tell me about ReactJs and React Native.</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>

        <div className="bottom-bar">
          <div className="input-container">
            <input
              type="text"
              placeholder="Send a message..."
              className="chat-input"
            />
            <div className="icon-buttons">
              <button className="icon-btn" aria-label="Voice Input">
                <FaMicrophone />
              </button>
              <button className="icon-btn" aria-label="Send Message">
                <FaPaperPlane />
              </button>
            </div>
          </div>
          <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
        </div>
      </div>



    </div>

  )
}

export default Main