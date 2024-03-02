import React from 'react';
import '../styles/home.css';
import { VscAccount,VscCommentDiscussion,VscWindow } from "react-icons/vsc";
import { TfiAlignJustify } from "react-icons/tfi";

function Example() {
  return (
    <div>
       <nav className="navbar">
      <div className='logo1'>
        <div className="logo"><VscAccount className='profile-icon' /></div>
        <div className="nav-link">
           <button className="button"><VscWindow/></button> 
           <button className="button"><VscCommentDiscussion/></button> 
           <button className="button">message</button> 
           <button className="button">Addfriend</button> 
        </div>
        <div className='menu'>
             <TfiAlignJustify className='profile-icon' />
            
        </div>
      </div>
    </nav>
  </div>
  )
}


export default Example;