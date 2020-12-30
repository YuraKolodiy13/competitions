import React from 'react'
import './Button.scss'

const Button = ({title, withAddIcon, color, doAction, type, disabled}) => {
  return (
    <button type={type} className={`button ${color}`} onClick={doAction} disabled={disabled}>
      {withAddIcon && (
        <span className="addIcon"/>
      )}
      <span>{title}</span>
    </button>
  )
};

export default Button;