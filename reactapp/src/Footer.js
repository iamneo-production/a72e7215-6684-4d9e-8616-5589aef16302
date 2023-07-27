import React from 'react'
import './FooterStyle.css'

 const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>{`Copyright © ${year} : All rights reserved`}</footer>;
};

export default Footer;

