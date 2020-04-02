import React from 'react'

export const Button = ({ onClick, children, dark }) => {
  return (
    <button 
      type="button" 
      name="button" 
      onClick={() => onClick()}
      className={`fb-style-btn fb-style-${(dark ? 'dark' : 'light')}`}
    >
      {children}
    </button>
  )
}
