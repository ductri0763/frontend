import { Component } from "react";
import Link from "next/link";
import Header from "../components/Header";
import fetcho from 'isomorphic-unfetch'
import redirect from "./redirect";
import fetch from 'node-fetch'
import Cookies from 'js-cookie';


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  static getInitialProps(ctx) {
	
   

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


    if(password.value=='' || (password.length<5||password.length>32))
    {
          alert('Pass length from 5 to 32');
		  return;
    }

	if (password!=password_confirmation)
	{	
		alert("pass not same!");
		return;
	}	
	
   // thuc hien dang ky o day
    var url= "http://localhost:5000/api/users";
	var body = { email: email, password:password };
    fetch(url, { 
          method: 'POST', 	
	      body:    JSON.stringify(body),
		  headers: { 'Content-Type': 'application/json' },
		}).then(response => {
		  return response.json().then(data => {
		   if (response.ok) {
			  
			   var myJSON =JSON.stringify(data); //JavaScript object into a string with JSON.stringify()
			  
			   var obj = JSON.parse(myJSON);
			   
			   // luu lai cookie
			   Cookies.set('email', email);
			   // chuyen qua trang home
			   redirect("/home");  
			 return data;
		   } else {
			 alert("can not login");  
			 return Promise.reject({status: response.status, data});
		   }
		  });
		});
   // neu thanh cong chuyen qua trang home

    
  };
}
