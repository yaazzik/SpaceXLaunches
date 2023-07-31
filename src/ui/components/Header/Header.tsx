import React from 'react';
import Marquee from "react-fast-marquee";
import './Header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
      <Link to={'/'}>
        <header className="App-header">

            <Marquee autoFill>
                <div className='header-text'>
                    SPACE X&nbsp;&nbsp;&nbsp;
                </div>
            </Marquee>

        </header>
      </Link>
    );
};
export default Header;
