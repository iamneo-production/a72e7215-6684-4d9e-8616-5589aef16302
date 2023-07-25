import React from 'react'
import Footer from './Footer'
import './Home.css'
import survey1 from './survey1.jpg'
import './HomePage.css'
import survey from './logo.png';
import {  Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon} from '@mui/material'
import {Logout,Settings} from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {Link} from "react-router-dom"
import SurveyForm from './SurveyForm'
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./UserSlice";


function Home() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <>
    <div>
        <nav className='a5'>
            <img src={survey} height="60" width="90" alt=""></img>
                <ul id="navbar">
                    <li><a className="active" href="/Home">Home</a></li>
                    <li><a href="/SurveyForm">Survey</a></li>
                    <li><a href="/Share">Share</a></li>
                    <li><a href="/Analysis">Analysis</a></li>
                    <li><a href="/About">About</a></li>
                     <li><a href="/Contact">Contact</a></li>
                     <Box sx={{ flexGrow: 0 }}>
                     <li>
                      <IconButton
                        onClick={handleClick} sx={{ p: 0}}
                        size="small"
                      >
                      <Avatar sx={{ width: 42, height: 42 ,bgcolor : "black"  }}></Avatar>
                      </IconButton></li></Box>
                </ul>
                <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> {user.name}
        </MenuItem>
        <Divider />
        
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon><Link to="/">
          <div className='logout'>Logout</div></Link>
        </MenuItem>
      </Menu>
        </nav>
    <div className="pic"><img src={survey1} height="500" width="500" alt=""></img>
    <div className='wrd'>
    <p className='wel'>Hello, {user.name}...</p>
    <p className='wel1'>Welcome to SURVEY+ !!!</p><br/>
    <ul><li><p className='para'>Let Your Voice Be Heard - Take Our Survey!</p></li>
    <li><p className='para'>Get the Facts on Foods - Take Our Survey!</p></li>
    </ul><div className='cls'>
    <Link to="/SurveyForm"><button className='btn' type="submit"><b>Get Your Survey</b></button></Link></div>
    </div></div>
    <div><Footer/></div></div>
    </>


  )
}

export default Home