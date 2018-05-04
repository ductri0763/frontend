import { Component } from "react";
import Link from "next/link";
import Header from "../components/Header";
import fetch from 'node-fetch'
import redirect from "./redirect";
import validator from 'validator';

export default class Login extends Component {
  constructor(props) {
    super(props);
	this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
       email: '',
	   password: '',
    };
  }
  
   static getInitialProps(ctx) {
		

    return {
     
    };
  }
 
 componentDidMount(){
	var email=localStorage.getItem("email");
	if (email === undefined||email===null)  
		{
		}
	else
 		redirect("/home"); 
	  
 }

	handleEmailChange=(e) =>{
	   this.setState({email: e.target.value});
	}
	handlePasswordChange=(e)=> {
	   this.setState({password: e.target.value});
	}
  
  render() {
    const authenticated=false;
	const pathname='/';
    return (
     
		<div>
		<Header pathname={pathname} authenticated={authenticated}/>
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <input type="email" placeholder="email" name="email" onChange={this.handleEmailChange} />
          <input type="password" placeholder="password" name="password" onChange={this.handlePasswordChange}/>
          <button type="submit">Submit</button>
        </form>
	
        </div>
       
    );
  }

  handleSubmit = async e => {
    e.preventDefault();
			
		const email = this.state.email;
		const password = this.state.password;
				
		if (validator.isEmpty(email))
		{
			alert('email is empty');
			return;
		}
		if (!validator.isEmail(email))
		{
			alert('not is a email');
			return;
		}
		var url= "http://localhost:5000/api/users/" + email + "/" + password;	
		
		fetch(url, { 	 
		  headers: { 'Content-Type': 'application/json' },
		}).then(response => {
		  return response.json().then(data => {
		   if (response.ok) {
			  
			  if (data.length>0) 
			  {
				   var myJSON =JSON.stringify(data); 
			
				   var obj = JSON.parse(myJSON);			   
			
				   var email=obj[0].email;
				   
				   localStorage.setItem("email", email);
				 
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
