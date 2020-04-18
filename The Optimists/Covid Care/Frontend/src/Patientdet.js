import React , {Component}  from 'react';
class PatientDet extends React.Component {
  render() {
    if (this.props.currentStep !== 3) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(
       <div className="form-group">
       <h1>Fill Your Details</h1>
        <label htmlFor="FullName" style={{left:'2px'}}><i class="fas fa-user-circle"></i> Full Name:</label>
        <input
          className="form-control"
          id="FullName"
          name="FullName"
          type="text"
          placeholder="Patient's Full Name"
          value={this.props.FullName} 
          onChange={this.props.handleChange} 
          required
        />
        
        <label htmlFor="Age" style={{left:'2px'}}><i class="fas fa-calendar-week"></i> Age:</label>
        <input className="form-control"
          id="Age"
          name="Age"
          type="number"
          placeholder="Age"
          value={this.props.age} 
          onChange={this.props.handleChange}

          
          required
        type="number"  name="age" />
        
       
         <label htmlFor="MobileNo"><i class="fas fa-phone-alt"></i> Mobile No:</label>
        <input
          className="form-control"
          id="MobileNo"
          name="MobileNo"
          type="text"
          placeholder="Patient's Mobile No"
          value={this.props.MobileNo}
          onChange={this.props.handleChange} 
          required
        />
        
         <label htmlFor="Pincode"><i class="fas fa-home"></i> Pincode:</label>
        <input
          className="form-control"
          id="Pincode"
          name="Pincode"
          type="text"
          placeholder="Enter Pincode"
          value={this.props.Pincode} 
          onChange={this.props.handleChange}
        />
       
        <hr/>
         <label htmlFor="Nationality">You are:</label><br/>
         <input type="radio"  name="nationality" value="Indian"  onChange={this.props.handleChange} />
<span style={{fontWeight:'bolder'}}>Indian</span>
<span>        </span>
<input type="radio"  name="nationality" value="Foreigner"  onChange={this.props.handleChange}/>
<span style={{fontWeight:'bolder'}}>Foreigner</span><br/>
        
        <hr/>
        <label htmlFor="Nationality">Language:</label><br/>
         <input type="radio"  name="language" value="English"  onChange={this.props.handleChange} />
<span style={{fontWeight:'bolder'}}>English</span>
<span>        </span>
<input type="radio"  name="language" value="Hindi"  onChange={this.props.handleChange}/>
<span style={{fontWeight:'bolder'}}>Hindi</span><br/>
         <hr/>
        
        
       
        

      </div>
    )
  }
}
export default PatientDet