import { Component } from "react";
import Link from "next/link";
import Header from "../components/Header";
import fetch from 'isomorphic-unfetch'
import redirect from "./redirect";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
 // if da login thi chuyen sang home, nguoc lai van la register
  static getInitialProps(ctx) {
	const authenticated=false;
	
	if (authenticated)
	  redirect("/home", ctx);   	
	//else	
    //  redirect("/register", ctx);   

    return {
     
    };
  }

  render() {
  
    const authenticated=false;
	const pathname='/'; 
    return (
        <div>
	    <Header pathname={pathname} authenticated={authenticated}/> 
        <form onSubmit={this.handleSubmit}>
          <h1>Register</h1>
          <input type="email" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <input
            type="password"
            placeholder="confirm password"
            name="password_confirmation"
          />
          
          <button type="submit">Submit</button>
          
         </form>
         </div>
    );
  }

  handleSubmit = async e => {
    e.preventDefault();

    
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const password_confirmation = e.target.elements.password_confirmation.value;

   // thuc hien dang ky o day
   
   
   // neu thanh cong chuyen qua trang home

    
  };
}
