import React, { useEffect, useState } from 'react'
import "../styles/Nav.css"

function Nav() {
    const [show,setShow]=useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setShow(true);
            }else{
                setShow(false);
            }
        });

        return () => window.removeEventListener("scroll",null);
    }, []);


  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
        <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Avatar" />
    </div>
  )
}

export default Nav;