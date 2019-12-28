import React, { Component } from 'react';
import "../assets/style/footer.css"

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <footer style={{"flex-shrink": "none"}} class="py-4 bg-dark text-white-50">
        <div class="text-center center-block">
            <h1 class="txt-railway" style={{color:"white"}}>RGKV Youtube </h1>
            <p class="txt-railway">Follow me on:</p>
                <a href="https://www.facebook.com/rakshithgowda.kv"><i class="fa fa-facebook-square fa-3x social" id="social-fb"></i></a>
	            <a href="https://twitter.com/Rakshithgowdakv"><i class="fa fa-twitter-square fa-3x social" id="social-tw"></i></a>
	            <a href="https://www.instagram.com/i_am_rgkv/"><i class="fa fa-instagram fa-3x social" id="social-gp"></i></a>
	            <a href="mailto:rakshithgowdakv@gmail.com"><i class="fa fa-envelope-square fa-3x social" id="social-em"></i></a>
</div>
        <div class="container text-center">
          <small>Copyright &copy; 2019</small>
        </div>
      </footer> );
    }
}
 
export default Footer;