import React, { Component } from 'react'
import './style.css'


 class React4 extends Component {

  state = { name: "",
  mail: "",
  password: ""
 };



  handleChange = (event) => {
      this.setState({value: event.target.value});
  }



  render() {
    console.log(this.state)
    return (<> 
    <div className="general">
     <label htmlFor="name">Name:
       <input
          id="name"
name="name" onChange={this.handleChange}/>
          
     </label>
      <label htmlFor="mail">Mail:
      <input
         id="mail"
         name="mail"
         onChange={this.handleChange}/>
         
    </label>
     <label htmlFor="password">Password:
     <input
        id="password"
        name="password"
        onChange={this.handleChange}/>
        
   </label>
   </div>
  </>
 ) }
 }
 export default React4