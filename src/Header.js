import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

export default function Header() {
  const dispatch = useDispatch()
  

  const logoutOfApp = () => {
    auth.signOut().then(()=>{
      dispatch(logout())
    })
  }

  return (
    <div className='header'>

        <div className='header__left'>
            <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt=''/>

            <div className='header__search'>
                <SearchIcon />
                <input placeholder='Search' type='text' />
            </div>
        </div>

        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icon={ChatIcon} title='Messaging'/>
            <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
            <HeaderOption avatar={'https://static.wikia.nocookie.net/dragon-ball-heroes-avatars/images/7/71/Large.png/revision/latest?cb=20190213184422'} title='me' onClick={logoutOfApp}/>
        </div>
    </div>
  )
}
