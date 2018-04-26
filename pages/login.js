import { Component } from "react";
import Link from "next/link";
import Header from "../components/Header";
import fetch from 'isomorphic-unfetch'
import redirect from "./redirect";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  // if da login thi chuyen sang home
  
   static getInitialProps(ctx) {
	const authenticated=false;
	
	if (authenticated)
	  redirect("/home", ctx);   	
	 

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
          <h1>Login</h1>
          <input type="email" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <button type="submit">Submit</button>
        </form>
        </div>
       
    );
  }

  handleSubmit = async e => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

	 try {
		
		// thu truy van du lieu tu may chuyen
		
		const res = await fetch('http://localhost:5000/api/users/ptoandung@gmail.com/012381727');
		const data = await res.json()
		
		// du lieu khong tra ve, block tu day
		if (data.length>0)
			 {
			 console.log("login success");
			 // thanh cong thi chuyen sang trang home
			 redirect("/home");   
			 }
			 else
			 console.log("login unsuccess");
    
	  } catch (error) {
		return error.response && error.response.status === 404
		  ? "Wrong email/password"
		  : "Unknown error. Please try again";
	  }
	
	
	
  };
}
