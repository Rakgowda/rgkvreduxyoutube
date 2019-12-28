import React, { Component } from 'react'
import "../assets/style/author.css"

import author from   "../assets/images/Admin.png" 
class Author extends Component {
   
    
  
   
  
  
      render() { 

          return ( 
          
       
           
            <div class="container">
            <div class="row">
                
                    <div class="al-author-box">
                        <div class="al-author-img">
                          <img src={author} alt="Admin"/>
                        </div>
                        <div class="al-author-content">
                            <h3 class="text-center mb-3">RAKSHITH GOWDA K V</h3>
                            <p class="text-center mb-0">
                               Rakshith gowda is a <span style={{"font-weight":"10px"}}>Web Developer</span> and <span style={{"font-weight":"10px"}}>Youtuber</span>. He is always excited to share tech knowledge with others.
                                </p>
                        </div>
                    </div>
               
        
                
                </div>
        
        
            </div>
     
    
         
      
        );
      }
  }
   
  export default Author;
