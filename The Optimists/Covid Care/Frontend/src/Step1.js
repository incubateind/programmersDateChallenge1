import React , {Component}  from 'react';
class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 4) { // Prop: The current step
      return null
    }
    // The mar(kup for the Step 1 UI
    if(this.props.language==="English"){
        return( 
      <div>
      <center><h1 style={{color:"#f21234" ,fontWeight:'Bold'}}>COVID-19</h1></center>

    
     <h6>Question 1 of 6</h6>
      <div class="questions">
      
      <div style={{fontWeight:'bolder'}}>Have you traveled to a high-risk country/Indian state or been in contact with someone who is ill and has traveled to a high risk country/Indian state in the last 14 days?</div>
       <hr/>
      
       <div class="answers">
       <input type="radio"  name="Ques1" value="1"   onChange={this.props.handleChange} />
<label >Yes</label><br/>
<hr/>
<input type="radio"  name="Ques1" value="2" onChange={this.props.handleChange} />
<label >No</label><br/>
<hr/>
<br/>

<br/>
<br/>
<br/>

       </div>
       
       </div>
       
       
      </div>)
    }

    else{
      return (
  <div>
      <center><h1 style={{color:"#f21234" ,fontWeight:'Bold'}}>COVID-19</h1></center>

    
     <h6>Question 1 of 6</h6>
      <div class="questions">
      
      <div style={{fontWeight:'bolder'}}>क्या आपने उच्च जोखिम वाले देश / भारतीय राज्य की यात्रा की है या किसी ऐसे व्यक्ति के संपर्क में है जो बीमार है और पिछले 14 दिनों में एक उच्च जोखिम वाले देश / भारतीय राज्य की यात्रा कर चुका है?</div>
       <hr/>
      
       <div class="answers">
       <input type="radio"  name="Ques1" value="1"   onChange={this.props.handleChange} />
<label >हाँ

</label><br/>
<hr/>
<input type="radio"  name="Ques1" value="2" onChange={this.props.handleChange} />
<label >
नहीं</label><br/>
<hr/>
<br/>

<br/>
<br/>
<br/>

</div>
</div>
</div>
    )}
    
  }
}
export default Step1;