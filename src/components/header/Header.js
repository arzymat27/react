
import React from 'react';
import '../header/Header.css'
const Header = () => {
  return (
      <div>
           <header className="menu">
        <ul className="menus">
          <div><h1>Alma</h1></div>
          <div className="menus-2">
          <li> <a href="">Get Started </a></li>
          <li> <a href="">How It Works </a></li>
          <li> <a href="">For Providers </a></li>
          <li> <a href="">About Alma </a></li>
          <button className="btn1">Login</button>
          <button className="btn2">Find a provider</button>
          </div>
      
        </ul>
        <div className="big">
          <h1 >
            Alma makes it easy to find high <br></br>
            quality, affordable mental <br></br>
            health care.
          </h1>
          <button>Browse our directory</button>

        </div>

      </header>
      </div>
  );
}

export default Header;

     



    