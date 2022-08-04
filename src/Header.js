import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize='large' className='header__icon' />
      </IconButton>
      <img className="header__logo"
        src="https://toppng.com/public/uploads/preview/tinder-logo-transparent-tinder-logo-11563243301zivc1sx84c.png"
        alt="tinder logo" />
      <IconButton>
        <ForumIcon font fontSize='large' className='header__icon' />
      </IconButton>

    </div>
  )
}

export default Header