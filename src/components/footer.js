import React, { useState, useEffect } from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
function Footer(){

    return(
<footer style={{"flex-shrink": "none"}} class="py-4 bg-dark text-white-50">
<div class="text-center center-block">
    <h1 class="txt-railway" style={{color:"white"}}>RGKV Youtube </h1>
    <p class="txt-railway">Follow me on:</p>
        <a href="https://www.facebook.com/rakshithgowda.kv"><FacebookIcon className="m-2" style={{fontSize:"2rem",color:"white"}}></FacebookIcon></a>
        <a href="https://twitter.com/Rakshithgowdakv"><TwitterIcon className="m-2" style={{fontSize:"2rem",color:"white"}}></TwitterIcon></a>
        <a href="https://www.instagram.com/i_am_rgkv/"><InstagramIcon className="m-2" style={{fontSize:"2rem",color:"white"}}></InstagramIcon></a>
        <a href="mailto:rakshithgowdakv@gmail.com"><MailIcon className="m-2" style={{fontSize:"2rem",color:"white"}}></MailIcon></a>
</div>
<div class="container text-center">
  <small>Copyright &copy; 2020</small>
</div>
</footer>
    )
}

export default Footer;