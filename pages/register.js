import { Component } from "react";
import Link from "next/link";
import Header from "../components/Header";
import redirect from "./redirect";
import fetch from 'node-fetch'
import validator from 'validator';



export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
		 email: '',
		 password: '',
		 password_confirmation: ''
      
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
          <input type="email" placeholder="email" name="email" onChange={this.handleEmailChange}/>
          <input type="password" placeholder="password" name="password" onChange={this.handlePasswordChange} />
          <input
            type="password"
            placeholder="confirm password"
            name="password_confirmation" onChange={this.handleEmailConfirmChange}
          />
          
          <button type="submit">Submit</button>
          
         </form>
         </div>
    );
  }

  handleEmailChange=(e) =>{
	   this.setState({email: e.target.value});
	}
  handlePasswordChange=(e)=> {
	   this.setState({password: e.target.value});
	}
  handleEmailConfirmChange=(e)=> {
	   this.setState({password_confirmation: e.target.value});
	}
  handleSubmit = async e => {
    e.preventDefault();

    
    const email = this.state.email;;
    const password = this.state.password;	
    const password_confirmation = this.state.password_confirmation;
	
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

	if (!validator.isLength(password,{min:5, max: 32}))
	{
		 alert('Pass length from 5 to 32');
		 return;
	}
	if (!validator.equals(password,password_confirmation))
	{
		alert("pass not same!");
		return;
	}
   	
   
    var url= "http://localhost:5000/api/users";
	var body = { email: email, password:password };
    fetch(url, { 
          method: 'POST', 	
	      body:    JSON.stringify(body),
		  headers: { 'Content-Type': 'application/json' },
		}).then(response => {
		  return response.json().then(data => {
		   if (response.ok) {
			  
			   var myJSON =JSON.stringify(data); 
			  
			   var obj = JSON.parse(myJSON);
			   
			   localStorage.setItem("email", email);
			  
			   redirect("/home");  
			 return data;
		   } else {
			 alert("can not login");  
			 return Promise.reject({status: response.status, data});
		   }
		  });
		});
   

    
  };
}
