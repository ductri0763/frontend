import { Component } from "react";
import Link from "next/link";
import Header from "../components/Header";
//import fetcho from 'isomorphic-unfetch'
import fetch from 'node-fetch'
import redirect from "./redirect";
import Cookies from 'js-cookie';
//import { setCookie, getCookie, removeCookie } from "./session";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  // if da login thi chuyen sang home
  
   static getInitialProps(ctx) {
		

    return {
     
    };
  }
 
 componentDidMount(){
	var email=Cookies.get('email');	
	console.log(email);
	if (email === undefined)  // da dang nhap, chuyen qua home		
		{
		}
	else
 		redirect("/home"); 
	  
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
		
		var url= "http://localhost:5000/api/users/" + email + "/" + password;	
	
		fetch(url, { 	 
		  headers: { 'Content-Type': 'application/json' },
		}).then(response => {
		  return response.json().then(data => {
		   if (response.ok) {
			  
			  if (data.length>0) 
			  {
				   var myJSON =JSON.stringify(data); //JavaScript object into a string with JSON.stringify()
			
				   var obj = JSON.parse(myJSON);			   
			
				   var email=obj[0].email;
				   Cookies.set('email', email);
				   var email=Cookies.get('email');			   
		
				   // chuyen qua trang home
				   redirect("/home");  
			  }
			  else
				alert("can not login!");  
			  
			 return data;
		   } else {
			   
			 return Promise.reject({status: response.status, data});
		   }
		  });
		});

	 
	
	
	
  };
}
