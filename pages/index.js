import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Router from "next/router"
import Header from "../components/Header";
import redirect from "./redirect";

export default class extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
	this.abc = this.abc.bind(this);
  }
  
  // if da login thi chuyen sang home, nguoc lai vao mac dinh la login
  static getInitialProps(ctx) {
	const authenticated=false;
	
	if (authenticated)
	  redirect("/home", ctx);   	
	else	
      redirect("/login", ctx);   

    return {
     
    };
  }
  
 render() {
	const authenticated=false;
	const pathname='/';
    return (
	  
	  <Header pathname={pathname} authenticated={authenticated}/>
	  
     
    );
  }
}