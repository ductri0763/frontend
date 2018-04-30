import { Component } from "react";
import Link from "next/link";
import Header from "../components/Header";
import fetch from 'isomorphic-unfetch'
import redirect from "./redirect";
import Cookies from 'js-cookie';

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
	//var email=Cookies.get('email');	
	//console.log(email);
	//if (email === undefined)  // da dang nhap, chuyen qua home
	//	redirect("/login", ctx);  
	
	
	  
	

    return {
     
    };
  }
 componentDidMount(){
	var email=Cookies.get('email');	
	console.log(email);
	if (email === undefined)  // da dang nhap, chuyen qua home
		redirect("/login"); 
	  
 }
  handleClick(e) {
	// thu hien logout va chuyen qua trang login  
	// xoa cookies
	Cookies.remove('email');
	//var email=Cookies.get('email');	
	//alert(email);
    redirect("/login");   
	  
  }
  render() {
  
   return (
   <button style={{width: 200, height: 30}} onClick={this.handleClick.bind(this)} value="Click me"/>
   
   )
  }

  
}
