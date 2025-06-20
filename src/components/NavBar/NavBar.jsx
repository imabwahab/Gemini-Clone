import panda from '../../assets/panda.png';
import './NavBar.css'
function NavBar() {
  return (
    <>
      <nav>
        <p>Gemini</p>
        <img src={panda} alt="" />
      </nav>
    </>
  )
}

export default NavBar