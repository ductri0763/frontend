import { Component } from "react";
import Link from "next/link";
import Header from "../components/Header";
import redirect from "./redirect";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  static getInitialProps(ctx) {
	const authenticated=true;	

    return {
     
    };
  }
 componentDidMount(){
	var email=localStorage.getItem("email");
	
	if (email === undefined||email===null)  
		redirect("/login"); 
	  
 }
  handleClick(e) {
	
	localStorage.removeItem("email");

    redirect("/login");   
	  
  }
  render() {
  
   return (
   <button style={{width: 200, height: 30}} onClick={this.handleClick.bind(this)} value="Logout"/>
   
   )
  }

  
}
