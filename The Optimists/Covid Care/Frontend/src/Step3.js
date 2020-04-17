import React , {Component}  from 'react';
class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 6) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    if(this.props.language==="English"){
    return(
      <div >
      <center><h1 style={{color:"#f21234" ,fontWeight:'Bold'}}>COVID-19</h1></center>

     
     <h6>Question 3 of 6</h6>
      <div class="questions">
      
      <div style={{fontWeight:'bolder'}}>Do you have fever?</div>
       <hr/>
       <div class="answers">
       <input type="radio"  name="Ques3" value="1"  onChange={this.props.handleChange}/>
<label >Normal(96F-98.6F)</label><br/>
<hr/>
<input type="radio"  name="Ques3" value="2"  onChange={this.props.handleChange}/>
<label >Fever (98.6F-102F)</label><br/>
<hr/>
<input type="radio"  name="Ques3" value="3" onChange={this.props.handleChange} />
<label >High Fever >(102 F)</label><br/>
<hr/>
<input type="radio"  name="Ques3" value="4"  onChange={this.props.handleChange}/>
<label >None of These</label><br/>
<hr/>




<br/>
<br/>
       </div>
       </div>
       
       
      </div>
    )}


    else{

  return(
      <div >
      <center><h1 style={{color:"#f21234" ,fontWeight:'Bold'}}>COVID-19</h1></center>

     
     <h6>Question 3 of 6</h6>
      <div class="questions">
      
      <div style={{fontWeight:'bolder'}}>क्या आपको बुखार है?</div>
       <hr/>
       <div class="answers">
       <input type="radio"  name="Ques3" value="1"  onChange={this.props.handleChange}/>
<label >साधारण (96°F-98.6°F) </label><br/>
<hr/>
<input type="radio"  name="Ques3" value="2"  onChange={this.props.handleChange}/>
<label >बुखार(98.6°F-102°F)</label><br/>
<hr/>
<input type="radio"  name="Ques3" value="3" onChange={this.props.handleChange} />
<label >तेज बुखार(102°F-104°F)</label><br/>
<hr/>
<input type="radio"  name="Ques3" value="4"  onChange={this.props.handleChange}/>
<label >नहीं है</label><br/>
<hr/>




<br/>
<br/>
       </div>
       </div>
       
       
      </div>
    )

    }
  }
}
export default Step1;