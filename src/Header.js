import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from 'react-router-dom';
function Header({backButton}) {
  const navigate = useNavigate();
  return (
    <div className="header">
        { backButton ? (
            <IconButton onClick={() => navigate(backButton)}>
                <ArrowBackIosIcon fontSize="large" className="header__icon"></ArrowBackIosIcon>
            </IconButton>
            
        ) : (
             <IconButton>
                 <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>
        
        )}
      
        <Link to="/">
        <img  className="header__logo"
        src="https://toppng.com/public/uploads/preview/tinder-logo-transparent-tinder-logo-11563243301zivc1sx84c.png"
        alt="tinder logo"></img>
        </Link>

        <Link to="/chat">
        <IconButton>
        <ForumIcon className="header__icon" fontSize="large"/>
        </IconButton>
        </Link>
       
        
    </div>
);
}

export default Header