import React from 'react'
import './ActionButton.scss'
import {ReactComponent as EditIcon} from '../../../assets/images/edit.svg';
import {ReactComponent as DeleteIcon} from '../../../assets/images/delete.svg';

const ActionButton = ({edit, remove, doAction}) => {
  return (
    <span className={`actionButton`} onClick={doAction}>
      {edit && <EditIcon/>}
      {remove && <DeleteIcon/>}
    </span>
  )
};


export default ActionButton;