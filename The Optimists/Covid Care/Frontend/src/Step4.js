import React , {Component}  from 'react';
class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 7) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    if(this.props.language==="English"){
    return(
      <div >
      <center><h1 style={{color:"#f21234" ,fontWeight:'Bold'}}>COVID-19</h1></center>

     <h6>Question 4 of 6</h6>
      <div class="questions">
      
      <div style={{fontWeight:'bolder'}}>Do you have cough?</div>
       <hr/>
       <div class="answers">
       <input type="radio"  name="Ques4" value="1" onChange={this.props.handleChange} />
<label >Dry Cough</label><br/>
<hr/>
<input type="radio"  name="Ques4" value="2"  onChange={this.props.handleChange}/>
<label >Sneezing</label><br/>
<hr/>
<input type="radio"  name="Ques4" value="3"  onChange={this.props.handleChange}/>
<label >Sore Throat</label><br/>

<hr/>
<input type="radio"  name="Ques4" value="4"  onChange={this.props.handleChange}/>
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

     <h6>Question 4 of 6</h6>
      <div class="questions">
      
      <div style={{fontWeight:'bolder'}}>क्या आपको खांसी है?</div>
       <hr/>
       <div class="answers">
       <input type="radio"  name="Ques4" value="1" onChange={this.props.handleChange} />
<label >सूखी खाँसी</label><br/>
<hr/>
<input type="radio"  name="Ques4" value="2"  onChange={this.props.handleChange}/>
<label >छींक आना</label><br/>
<hr/>
<input type="radio"  name="Ques4" value="3"  onChange={this.props.handleChange}/>
<label >गले में खराश</label><br/>

<hr/>
<input type="radio"  name="Ques4" value="4"  onChange={this.props.handleChange}/>
<label >इनमे से कुछ नहीं</label><br/>
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