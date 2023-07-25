import React from "react";
import survey from './logo.png';
import {Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon} from '@mui/material'
import {Logout,Settings} from '@mui/icons-material';
import { RWebShare } from "react-web-share";
import {Link} from "react-router-dom"
import share1 from './share2.jpg'
import Footer from "./Footer";
import './Share.css'


export default function Share() {
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
                    <li><a className="active" href="/Share">Share</a></li>
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
        <div className="pic3"><img src={share1} height="500" width="500" alt=""></img></div>
        <div className="web">
          <p className="quote"><center><i><b>Customer service shouldn’t just be a<br/>department, it should be the entire<br/>company.</b></i><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Tony Hsieh</center></p>
			<br/><h1 className="h11">Here is your Survey Link !!!</h1>
			<div className="h12"><RWebShare className="h12"
				data={{
					url: "http://localhost:3000/Response",
					title: "Get Your Survey Link",
				}}
				onClick={() => window.alert("Shared Successfully!!!")}
			>
				<button className="h13">Share on Web</button>
			</RWebShare></div></div>
      <Footer/>
		</div>
	);
};