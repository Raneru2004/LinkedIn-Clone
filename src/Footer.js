import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from './features/userSlice'
import { auth } from './firebase'
import HeaderOption from './HeaderOption'
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Footer.css'
import FooterOption from './FooterOption'

export default function Footer() {
    const dispatch = useDispatch()
  

  const logoutOfApp = () => {
    auth.signOut().then(()=>{
      dispatch(logout())
    })
  }
  
    

  return (
    <div className='footer__container'>
        <FooterOption Icon={HomeIcon} title='Home'/>
        <FooterOption Icon={SupervisorAccountIcon} title='My Network'/>
        <FooterOption Icon={BusinessCenterIcon} title='Jobs'/>
        <FooterOption Icon={ChatIcon} title='Messaging'/>
        <FooterOption Icon={NotificationsIcon} title='Notifications'/>
        <FooterOption avatar={'https://static.wikia.nocookie.net/dragon-ball-heroes-avatars/images/7/71/Large.png/revision/latest?cb=20190213184422'} title='me' onClick={logoutOfApp}/>
    </div>
  )
  
}
