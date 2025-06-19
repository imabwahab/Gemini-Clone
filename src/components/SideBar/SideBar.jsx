import { useContext, useState } from "react";
import { assets } from "../../assets/assets"
import { chatContext } from '../../context/context'
import "./SideBar.css"
function SideBar() {

  const [extended, setExtended] = useState(false);
  const { recentPrompt } = useContext(chatContext);
  console.log(recentPrompt)

  return (
    <div className="SideBar">
      <div className="top">
        <img src={assets.menu_icon} className="menu" alt="" onClick={() => setExtended(!extended)} />
        <div className="newChat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>

        <div className="recent">
          <p className="recent-title">Recent</p>
          {extended && Array.isArray(recentPrompt) ? recentPrompt.map((element, index) => (
            <div className="recent-entry" key={index}>
              <img src={assets.message_icon} alt="" />
              <p>{element}</p>
            </div>
          )) : null}
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>FAQ</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>


        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>

    </div>
  )
}

export default SideBar