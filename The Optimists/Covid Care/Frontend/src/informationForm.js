import React , {Component}  from 'react';
import './covidForm.css'
import Start from './Start';
import axios from 'axios';

class MasterForm extends Component{

	 constructor(props) {
    super(props)
    // Set the initial input values
    this.state = {
      text: '', // Default is Step 1
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
let r =await axios.post("localhost:8000/updates",{text:this.state.text,location:this.state.locaiton})
 


}
 
render() {    
return (
      <div class="container">  
  <form id="suggestion_box" action="" method="post">
    <h3>Add your Message</h3>
    <h5>Or general improvement ideas</h5>
    <fieldset>
      <textarea placeholder="Suggestion" tabindex="5" name="text" value={this.state.text} onChange={this.handleChange} required></textarea>
    </fieldset>
    <fieldset>
      <input type="text" placeholder="location"  name="location" value={this.state.location} onChange={this.handleChange} required/>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="suggestion_box" data-submit="...Sending" value="text to send">Submit</button>
    </fieldset>
  </form>
</div>)
}
}
export default MasterForm;