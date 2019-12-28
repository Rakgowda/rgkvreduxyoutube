
import './App.css';
import Counters from './components/counters'
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Auther from "./components/author"
import React, { Component } from 'react';



import axios from "axios"
class App extends Component {
  state = {  
    counterr:["empty"],
    subcriber:0,
    copycounter:[]
}
constructor(){
  super();
  
}
habdleFilter=(cid)=>{

  if(cid!="")
  {
    let counnter = this.state.counterr.filter(e=> e.snippet.title.toLowerCase().indexOf(cid.toLowerCase()) > -1);
    if(counnter.length>0){
      this.setState({counterr:counnter})
    }else{
      let counnter = this.state.copycounter;
      this.setState({counterr:counnter})
      console.log("calling data"+cid);
    }

    
    // console.log("calling data"+cid);
  }
  else{
    let counnter = this.state.copycounter;
    this.setState({counterr:counnter})
    console.log("calling data"+cid);
  }
    
    
    
}
incre=(id)=>{
    
    let counterr =[...this.state.counterr]
    let index = counterr.indexOf(id)
    counterr[index].value= counterr[index].value+1;
    this.setState(counterr)
    
}
reset=()=>{
    let counterr = [...this.state.counterr]
    counterr.map(e=>{e.value=0})
    this.setState(counterr)
}

componentDidMount(){

  axios.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=UUnw-TdFO6KgTWTxBatPWDMw&key=AIzaSyDgrPBx3AMpJFPKlx5MkmkkLw7OaIBcrQU")
  .then((res)=>{
    console.log(res.data.items);
    const counterr = res.data.items 
    this.setState({counterr:[...counterr]})
    this.setState({copycounter:[...counterr]})

    console.log(this.state);
    axios.get("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCnw-TdFO6KgTWTxBatPWDMw&key=AIzaSyDgrPBx3AMpJFPKlx5MkmkkLw7OaIBcrQU")
    .then((res)=>{
      console.log(res.data.items[0].statistics.subscriberCount);
      const subcriber = res.data.items[0].statistics.subscriberCount;
      this.setState({subcriber:subcriber})
      console.log(this.state);
    })
    .catch(err=>{
      console.log(err);
      const subcriber = ["error"]
      this.setState({subcriber:[...subcriber]})
    })
  })
  .catch(err=>{
    const counterr = ["error"]
    this.setState({counterr:[...counterr]})
  })

 
  
}
render() { 
  return ( 
    <React.Fragment>
      <Navbar subcriber={this.state.subcriber} counterr={this.state.counterr} searchdata={this.habdleFilter}></Navbar>
    <br><br><br>
      <Counters counterr={this.state.counterr}></Counters>
    <Auther></Auther>
      <Footer></Footer>
    </React.Fragment>
  );
}
}

export default App;
