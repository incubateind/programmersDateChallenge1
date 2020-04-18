import React , {Component}  from 'react';
import Start from './Start';
import axios from 'axios';

class MasterForm extends Component{

	 constructor(props) {
    super(props)
    // Set the initial input values
    this.state = {
      email: '', // Default is Step 1
      location: '',
     
    
    }
      this.handleChange = this.handleChange.bind(this);
      this.handleSumbit = this.handleSumbit.bind(this);
   
}
 handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
async handleSumbit(e){
e.preventDefault();
let r =await axios.post("http://localhost:8000/emails",{email:this.state.email,location:this.state.locaiton})
 


}
 
render() {    
return (
   <div class="container for">  
     <form id="suggestion_box" action="" method="post">
    <h3>Get recent Updates Via Mail</h3>
    <h5>Subscribe to Newslater</h5>
    <fieldset>
      <input type="email" placeholder="email"  name="email" value={this.state.email} onChange={this.handleChange} required/>
    </fieldset>
    <fieldset>
      <input type="text" placeholder="location"  name="location" value={this.state.locaiton} onChange={this.handleChange} required/>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="suggestion_box" data-submit="...Sending" value="text to send">Submit</button>
    </fieldset>
  </form>
  </div>  
)
}
}
export default MasterForm;