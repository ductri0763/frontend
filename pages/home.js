import { Component } from "react";
import Link from "next/link";
import Header from "../components/Header";
import fetch from 'isomorphic-unfetch'
import redirect from "./redirect";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
 // if da login thi giu nguyen home, nguoc lai chuyen sang login
  static getInitialProps(ctx) {
	const authenticated=true;
	
	if (!authenticated)
	  redirect("/login", ctx);   	
	//else	
    //  redirect("/home", ctx);   

    return {
     
    };
  }
  handleClick(e) {
	// chuyen qua trang login  
	const authenticated=false;	
	
    redirect("/login");   
	  
  }
  render() {
  
   return (
   <button style={{width: 200, height: 30}} onClick={this.handleClick.bind(this)} value="Click me"/>
   
   )
  }

  
}
