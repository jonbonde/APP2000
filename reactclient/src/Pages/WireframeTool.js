import "../Utilities/Stylesheet.css";
import HamburgerMenu from './HamburgerMenu';

function WireframeTool() {
  return (
    <div className="background">
      <div className="customWebpage"></div>
      <div className="dropdown1">
        <label htmlFor="menu1" className="white-text">
          Titles
        </label>
        <select id="menu1">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="dropdown2">
        <label htmlFor="menu2" className="white-text dropdown-label">
          Fonts
        </label>
        <select id="menu2">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="dropdown3">
        <label htmlFor="menu3" className="white-text">
          Pictures
        </label>
        <select id="menu3">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="dropdown4">
        <label htmlFor="menu4" className="white-text">
          Navbar
        </label>
        <select id="menu4">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="dropdown5">
        <label htmlFor="menu5" className="white-text ">
          Footer
        </label>
        <select id="menu5">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      <h1 className="heading">Design your own webpage!</h1>
      <p className="smallerHeading">
        Get started by choosing from the several options
      </p>

      <div className="">
        <p>Hallo</p>
      </div>
    </div>
  );
}



export default WireframeTool;