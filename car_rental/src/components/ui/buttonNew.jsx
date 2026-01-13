import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Button = ({ action, href, onClick }) => {
  if (href) {
    // Render as a link if href is provided
    return (
      <StyledWrapper>
        <Link href={href} className="animated-button">
          <span>{action}</span>
          <span />
        </Link>
      </StyledWrapper>
    );
  }

  // Default: normal button
  return (
    <StyledWrapper>
      <button className="animated-button" onClick={onClick}>
        <span>{action}</span>
        <span />
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .animated-button {
    position: relative;
    display: inline-block;
    padding: 12px 24px;
    border: none;
    font-size: 16px;
    background-color: inherit;
    border-radius: 100px;
    font-weight: 600;
    color: #ffffff;
    box-shadow: 0 0 0 2px #ffffff;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
    z-index: 20;
    text-decoration: none; /* Make link look like button */
    text-align: center;
  }

  .animated-button span:last-child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: #6438c2;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .animated-button span:first-child {
    position: relative;
    z-index: 1;
  }

  .animated-button:hover {
    box-shadow: 0 0 0 5px #6438c250;
    color: #ffffff;
  }

  .animated-button:active {
    scale: 0.95;
  }

  .animated-button:hover span:last-child {
    width: 150px;
    height: 150px;
    opacity: 1;
  }
`;

export default Button;
