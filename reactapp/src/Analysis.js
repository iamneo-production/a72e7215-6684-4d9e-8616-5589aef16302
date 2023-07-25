import React from 'react'
import { useState } from "react";
import {  Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon} from '@mui/material'
import survey from './logo.png';
import {Logout,Settings} from '@mui/icons-material';
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { UserData } from "./Data";
import {Link} from "react-router-dom"
import Footer from './Footer';
// import { useDispatch, useSelector } from "react-redux";
// import { logout, selectUser } from "./UserSlice";

function App() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

//   const user = useSelector(selectUser);
//   const dispatch = useDispatch();
//   const handleLogout = (e) => {
//     e.preventDefault();
//     dispatch(logout());
//   };


    const [userData, setUserData] = useState({
      labels: UserData.map((data) => data.year),
      datasets: [
        {
          label: "Hotels",
          data: UserData.map((data) => data.userGain),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
        {
        label: "Ratings",
          data: UserData.map((data) => data.userLost),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  
    return (
      <div>
         <nav className='a5'>
            <img src={survey} height="60" width="90" alt=""></img>
                <ul id="navbar">
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/SurveyForm">Survey</a></li>
                    <li><a href="/Share">Share</a></li>
                    <li><a className="active" href="/Analysis">Analysis</a></li>
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
          {/* <Avatar /> {user.name} */}
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
        
        <br/><br/><center>
        <div style={{ width: 700 }}>
          <BarChart chartData={userData} />
        </div><br/><br/>
        <div style={{ width: 700 }}>
          <LineChart chartData={userData} />
        </div>
        {/* <div style={{ width: 700 }}>
          <PieChart chartData={userData} />
        </div> */}
        </center>
        <Footer/>
      </div>
    );
  }
  
  export default App;
