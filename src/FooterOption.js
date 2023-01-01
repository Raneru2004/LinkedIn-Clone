import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './FooterOption.css'
export default function FooterOption({avatar, title, Icon, onClick}) {

  const user = useSelector(selectUser)

  return (
    <div onClick={onClick} className='footerOption'>
        {Icon && <Icon className='footerOption__icon' />}
        {avatar && 
            <Avatar className='footerOption__icon' src = {user?.photoUrl}>{user?.email[0]}</Avatar> 
        }
        <h3 className='footerOption__title'>{title}</h3>
    </div>
  )
}