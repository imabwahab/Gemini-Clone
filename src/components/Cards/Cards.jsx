import { FaRegCompass } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import './Cards.css'
function Cards() {
  return (
    <div className="cards">
      <div className="card">
        <p>Suggest beautiful places to see on an upcoming road trip.</p>
        <FaRegCompass />
      </div>

      <div className="card">
        <p>Briefly explain the concept: Urban planning.</p>
        <FaRegLightbulb />
      </div>

      <div className="card">
        <p>Tell me about ReactJs and React Native.</p>
        <FaCode />
      </div>
    </div>
  )
}

export default Cards