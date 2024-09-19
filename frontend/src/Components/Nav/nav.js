import React from 'react'
import'./nav.css';
import {Link}from"react-router-dom";

function nav() {
  return (
    <div>
      <ul className='home-ul'>
        <li className='home-11'>

            <Link to="/mainhome"className="active home-a">
        <h1>home</h1>
        </Link>
        </li>
        <li className='home-ll'>
        <Link to="/adduser"className="active home-a">
            <h1>ADD user</h1>
            </li>
            <Link to="/userdetail"className="active home-a"></Link>
            <li className='home-ll'>
                <h1>user detail</h1>
            </li>
            </ul>
        </div>
  )
}

export default nav
