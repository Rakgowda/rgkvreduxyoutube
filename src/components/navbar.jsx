import React, { Component } from 'react';
import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../assets/style/sni.css"
import $ from 'jquery'


class Navbar extends Component {
   
  constructor(props){
    super(props);
    this.state = {inputt: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  state={
    inputt:""
  }
  

  handleChange(event){
    console.log("changing "+event.target.value);
    this.props.searchdata(event.target.value);
    this.setState({inputt:event.target.value})
    
  }

  redirect=()=>{
    console.log("here");
    this.props.searchdata("");

  }
  handleSubmit(e){
    // alert('An essay was submitted: ' + this.state.value);
    e.preventDefault();
    console.log(this.state.inputt);
    this.props.searchdata(this.state.inputt);

  }


    render() { 
      let forstyle={
  display:"flex",
  "justify-content": "center",
  "align-items": "center"
}
      let style;
    if (window.innerWidth > 600) {
      style = {
        fontSize:"20px"
 
      }
    
    } else {
      style = {
        fontSize:"11px",
        cursor:"pointer"
      }
      
    }

    $(".navbar-toggler").click(function(){
    // $(".collapse").toggleClass("na");
  });
     
        return ( 
        
          
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
               <a class="navbar-brand" style={style} onClick={this.redirect}><i className="fa fa-youtube m-2" style={{color:"red"}}></i>RGKV TECH CHANNEL <span className="badge badge-pill badge-warning" style={{fontSize:"10px"}}>Subscribers {this.props.subcriber}</span></a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto navbar-side" >
      {/* <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li> */}
    </ul>
    <form class="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit} style={forstyle}>
    <input className="form-control mr-sm-2" type="text" refs="s" placeholder="Search" aria-label="Search" onChange={this.handleChange}  />
              <button className="btn btn-outline-danger my-2 my-sm-0" value="Submit" type="submit">Search</button>
              </form>
  </div>
</nav>

      );
    }
}
 
export default Navbar;