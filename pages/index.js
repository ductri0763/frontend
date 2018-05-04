import React from 'react'
import Link from 'next/link'
import Router from "next/router"
import Header from "../components/Header";
import redirect from "./redirect";

export default class extends React.Component {
  constructor() {
    super();
  	
  }
  
  static getInitialProps(ctx) {
	
    return {
     
    };
  }
  
 componentDidMount(){
	var email=localStorage.getItem("email");
	
	if (email === undefined||email === null)  
		{
		redirect("/login");
		}
	else
 		redirect("/home"); 
	  
 } 
  
 render() {
	const authenticated=false;
	const pathname='/';
    return (
	  
	  <Header pathname={pathname} authenticated={authenticated}/>	  
     
    );
  }
}