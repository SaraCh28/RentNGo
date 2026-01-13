'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';

const Checkbox = () => {
  const [open, setOpen] = useState(true); // default closed

  return (
    <StyledWrapper>
      <label className="hamburger">
        <input 
          type="checkbox"
          checked={!open} 
          onChange={() => setOpen(!open)}
        />
        <svg viewBox="0 0 25 32" className={open ? "active" : ""}>
          <path 
          className={`line line-top-bottom ${!open ? "line-true" : ""}`}
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" 
          />
          <path 
  className={`line ${!open ? "line-true" : ""}`}
  d="M7 16 27 16" 
/>
        </svg>
      </label>

      {/* ✅ Menu should be closed initially */}
      <div className={`side-menu ${open ? "open" : ""}`}>
       <ul 
        >

          <li             className='hover:bg-[#6438c252] hover:border-gray-400 w-full hover:border-1'
><Link href="/"

   >Home</Link></li>
  <li             className='hover:bg-[#6438c252] hover:border-gray-400 w-full hover:border-1'
><Link href="/Fleet"

  >Browse Fleet</Link></li>
  <li             className='hover:bg-[#6438c252] hover:border-gray-400 w-full hover:border-1'
><Link href="/BookCar"

  >Book Car</Link></li>
  <li             className='hover:bg-[#6438c252] hover:border-gray-400 w-full hover:border-1'
><Link href="/FAQ"

  >FAQ</Link></li>
  <li             className='hover:bg-[#6438c252] hover:border-gray-400 w-full hover:border-1'
><Link href="/contact"

  >Contact Us</Link></li>
  <li 
            className='hover:bg-[#6438c252] hover:border-gray-400 w-full hover:border-1'
><Link href="/dashboard"

  >Admin Dashboard</Link></li>

  
          </ul>  
        {/* <ul>
  <li><Link href="/"
            className='hover:bg-[#6438c252] hover:border-gray-400 w-full hover:border-1'

   >Home</Link></li>
  <li><Link href="/Fleet"
            className='hover:bg-[#6438c252] hover:border-gray-400 hover:border-1'

  >Browse Our Fleet</Link></li>
  <li><Link href="/BookCar"
            className='hover:bg-[#6438c252] hover:border-gray-400 hover:border-1'

  >Book Your Car</Link></li>
  <li><Link href="/FAQ"
            className='hover:bg-[#6438c252] hover:border-gray-400 hover:border-1'

  >FAQ</Link></li>
  <li><Link href="/contact"
            className='hover:bg-[#6438c252] hover:border-gray-400 hover:border-1'

  >Contact Us</Link></li>
</ul> */}
      </div>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  position: relative;

  .hamburger {
        top: -9px;
    cursor: pointer;
    position: relative;
    z-index: 10;
    margin-left: 2rem;
   
  }

  .hamburger input {
    display: none;
  }

  .hamburger svg {
    height: 40px;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: white;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .line.active-stroke {
  stroke: #6438c2 !important;
}


  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  .hamburger input:checked + svg {
    
    transform: rotate(-45deg);
  }

  .hamburger input:checked + svg .line-top-bottom {
    
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }

  /* ✅ Side Menu Styles */
  .side-menu {
    position: absolute;
    top: 0;
    right: -150px;
    width: 230px;
    height: 100%;
    background: black;
    transition: right 0.4s ease;
    color: white;
    padding-left: 3rem;
    padding-top: 3rem;
    border: 8px;
    border-color: white;


  }

  .side-menu.open {
    right: 200px;
  }

  .side-menu ul {
    margin-top: 10px ;
    margin-left: -40px ;
    background-color: black;
    height: 100vh;
  }

  .side-menu li {
    padding: 10px; 
    width: 100% ;
    padding-left: 40px ;


    cursor: pointer;
  }
`;

export default Checkbox;