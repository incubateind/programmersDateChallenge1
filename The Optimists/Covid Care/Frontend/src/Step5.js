import React , {Component}  from 'react';
class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 8) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    if(this.props.language==="English"){
    return(
      <div >
       <center><h1 style={{color:"#f21234" ,fontWeight:'Bold'}}>COVID-19</h1></center>
     <h6>Question 5 of 6</h6>
      <div class="questions">
      
      <div style={{fontWeight:'bolder'}}>Do you have shortness in breath?</div>
       <hr/>
       <div class="answers">
       

<input type="radio"  name="Ques5" value="1" onChange={this.props.handleChange}/>
<label >Feeling  Breathless</label><br/>
<hr/>
<input type="radio"  name="Ques5" value="2"/>
<label >Difficult in Breathing</label><br/>
<hr/>
<input type="radio"  name="Ques5" value="3"  onChange={this.props.handleChange}/>
<label >Drowsiness</label><br/>
<hr/>
<input type="radio"  name="Ques5" value="4"  onChange={this.props.handleChange}/>
<label >Pain & Pressure in Chest</label><br/>
<hr/>
<input type="radio"  name="Ques5" value="5"  onChange={this.props.handleChange}/>
<label >None of These</label><br/>
<hr/>




       </div>
       </div>
       
       
      </div>
    )}
    else{
    return(
      <div >
       <center><h1 style={{color:"#f21234" ,fontWeight:'Bold'}}>COVID-19</h1></center>
     <h6>Question 5 of 6</h6>
      <div class="questions">
      
      <div style={{fontWeight:'bolder'}}>क्या आपको सांस में तकलीफ है?
</div>
       <hr/>
       <div class="answers">
       

<input type="radio"  name="Ques5" value="1" onChange={this.props.handleChange}/>
<label >सांस फूल रही है</label><br/>
<hr/>
<input type="radio"  name="Ques5" value="2"/>
<label >सांस लेने में दिक्कत</label><br/>
<hr/>
<input type="radio"  name="Ques5" value="3"  onChange={this.props.handleChange}/>
<label >गंभीर कमजोरी</label><br/>
<hr/>
<input type="radio"  name="Ques5" value="4"  onChange={this.props.handleChange}/>
<label >छाती में दर्द और दबाव</label><br/>
<hr/>
<input type="radio"  name="Ques5" value="5"  onChange={this.props.handleChange}/>
<label >इनमे से कुछ नहीं</label><br/>
<hr/>




       </div>
       </div>
       
       
      </div>
    )



    }
  }
}
export default Step1;