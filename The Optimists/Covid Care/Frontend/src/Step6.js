import React , {Component}  from 'react';
class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 9) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    if(this.props.language==="English"){
    return(
      <div >
       <center><h1 style={{color:"#f21234" ,fontWeight:'Bold'}}>COVID-19</h1></center>

    
     <h6>Question 6 of 6</h6>
      <div class="questions">
      
      <div style={{fontWeight:'bolder'}}>Do you have a chronic Illness (Heart, Lung, or Kidney Disease, Diabetes) or are immunocompromised (Cancer, HIV, Autoimmune Disease)</div>
       <hr/>
       <div class="answers">
       <input type="radio"  name="Ques6" value="1" onChange={this.props.handleChange} />
<label >Yes</label><br/>
<hr/>
<input type="radio"  name="Ques6" value="2" onChange={this.props.handleChange}/>
<label >No</label><br/>
<hr/>
<br/>
<br/>

<br/>
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

    
     <h6>Question 6 of 6</h6>
      <div class="questions">
      
      <div style={{fontWeight:'bolder'}}>क्या आपके पास एक पुरानी बीमारी है (हृदय, फेफड़े, या गुर्दा रोग, मधुमेह) या इम्यूनो कॉम्प्रोमाइज्ड हैं (कैंसर, एचआईवी, ऑटोइम्यून रोग)</div>
       <hr/>
       <div class="answers">
       <input type="radio"  name="Ques6" value="1" onChange={this.props.handleChange} />
<label >
हाँ</label><br/>
<hr/>
<input type="radio"  name="Ques6" value="2" onChange={this.props.handleChange}/>
<label >
नहीं</label><br/>
<hr/>
<br/>
<br/>

<br/>
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