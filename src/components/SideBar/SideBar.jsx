import { useContext, useState } from "react";
import { chatContext } from '../../context/context'
import "./SideBar.css"

import { FaPlus, FaRegQuestionCircle } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FiActivity } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdHistory } from "react-icons/md";

function SideBar() {

  const [extended, setExtended] = useState(false);
  const { recentPrompt } = useContext(chatContext);

  return (
    <div className={`SideBar ${extended ? 'extended' : ''}`}>
      <div className="top">
        <GiHamburgerMenu className="menu" alt="" onClick={() => setExtended(!extended)} />
        <div className="newChat">
          <FaPlus />
          {extended ? <p>New Chat</p> : null}
        </div>

        <div className="recent">
          <p className="recent-title">Recent</p>
          <MdHistory className="history-icon"/>
          {extended && Array.isArray(recentPrompt) ? recentPrompt.map((element, index) => (
            <div className="recent-entry" key={index}>
              <FaRegMessage />
              <p>{element}</p>
            </div>
          )) : null}
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <FaRegQuestionCircle />
          {extended ? <p>FAQ</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <FiActivity />
          {extended ? <p>Activity</p> : null}
        </div>


        <div className="bottom-item recent-entry">
       <IoSettingsOutline />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>

    </div>
  )
}

export default SideBar