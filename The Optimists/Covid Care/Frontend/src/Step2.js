import React , {Component}  from 'react';
class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 5) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    if(this.props.language==="English"){
    return(
      <div >
       <center><h1 style={{color:"#f21234" ,fontWeight:'Bold'}}>COVID-19</h1></center>

  
     <h6>Question 2 of 6</h6>
      <div class="questions">
      
      <div style={{fontWeight:'bolder'}}>Have you been in close contact with a laboratory confirmed COVID-19 patient within the past 14 days?</div>
       <hr/>
       <div class="answers">
       <input type="radio"  name="Ques2" value="1"  onChange={this.props.handleChange} />
<label >Yes</label><br/>
<hr/>
<input type="radio"  name="Ques2" value="2"  onChange={this.props.handleChange}/>
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
    )
    }
    else{


    return(
      <div >
       <center><h1 style={{color:"#f21234" ,fontWeight:'Bold'}}>COVID-19</h1></center>

  
     <h6>Question 2 of 6</h6>
      <div class="questions">
      
      <div style={{fontWeight:'bolder'}}>क्या आप पिछले 14 दिनों के भीतर COVID-19 रोगी की पुष्टि की गई प्रयोगशाला के निकट संपर्क में हैं?</div>
       <hr/>
       <div class="answers">
       <input type="radio"  name="Ques2" value="1"  onChange={this.props.handleChange} />
<label >हाँ</label><br/>
<hr/>
<input type="radio"  name="Ques2" value="2"  onChange={this.props.handleChange}/>
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