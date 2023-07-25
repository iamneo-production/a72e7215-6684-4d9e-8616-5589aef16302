import React from 'react'
import './About.css'
import survey from './logo.png';
import {  Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon} from '@mui/material'
import {Logout,Settings} from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {Link} from "react-router-dom"
import Footer from './Footer'

function AboutUs() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <div>
        <nav className='a5'>
            <img src={survey} height="60" width="90" alt=""></img>
                <ul id="navbar">
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/SurveyForm">Survey</a></li>
                    <li><a href="/Share">Share</a></li>
                    <li><a href="/Analysis">Analysis</a></li>
                    <li><a className="active" href="/About">About</a></li>
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
          <Avatar /> My account
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
        <div id='desktop-2' className='desktop-2'>
<div id='rectangle3' className='rectangle3'>
</div>
<div className='jyothiraam'>
Name: Jyothiraam S R   <br/>
Email: raamsr@gmail.com
</div>
<div i className='indhuprakash'>
Name: Indhuprakash T M<br/>
Email: indhuprakash@gmail.com
</div>
<div id='aboutus' className='aboutus'>
ABOUT US</div>
<div  className='content'>
Survey+
is an Survey and marketing automations platform for growing businesses. We empower millions of customers around the world to start and grow their businesses with world-class marketing technology, award-winning customer support, and inspiring content. Survey+ puts data-backed recommendations at the heart of your marketing and surveys, so you can find and engage customers across email, social media, landing pages, and advertising—automatically and with the power of AI.</div>
<div id='creaters:' className='creaters'>
CREATERS:</div>
<div id='name:imayeshmemail:abc@gmail.comlinkedin:instagram:' className='imayesh'>
Name: Imayesh M<br/>
Email: imayesh@gmail.com</div>
</div>
<Footer/>
    </div>
  )
}

export default AboutUs