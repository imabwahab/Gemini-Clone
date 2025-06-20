import { useRef , useContext} from 'react';
import { chatContext } from '../../context/context';
import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';
import './BottomBar.css'


function BottomBar() {
const {  setInput, onSent } = useContext(chatContext);

  const inputRef = useRef(null);

  const HandleSubmit = (e) => {
    e.preventDefault();
    const message = inputRef.current.value.trim();
    if (message) {
      setInput(message);
      onSent(message)
      inputRef.current.value = '';
    }
  }
  
  return (

    <div className="bottom-bar">
      <form className="input-container" onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="Send a message..."
          className="chat-input"
          ref={inputRef}
        />
        <div className="icon-buttons">
          <button className="icon-btn" aria-label="Voice Input">
            <FaMicrophone />
          </button>
          <button type='submit' className="icon-btn" aria-label="Send Message">
            <FaPaperPlane />
          </button>
        </div>
      </form>
    </div>
  )
}

export default BottomBar