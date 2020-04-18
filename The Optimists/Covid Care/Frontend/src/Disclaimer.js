import React , {Component}  from 'react';
class Disclaimer extends React.Component {
  render() {
    if (this.props.currentStep !== 2) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(
      <div className="disclaimer" >
      <center><h1 style={{ fontWeight:'bold'}} >Disclaimer</h1></center>
      <center>
      
      <p style={{ fontWeight:'bolder',fontSize:'1.5rem'}}>This symptom checker on https://covidtracker.com ("Website") is provided by localhost. Any content accessed through Websites is for informational purposes only and is not intended to constitute professional medical advice, diagnosis or treatment. BigOHealth shall be in no way responsible for your use of Websites, or any information that you obtain from the Websites. You acknowledge that when using Websites you do so at your own choice and in agreement with this disclaimer. Do not ignore or delay obtaining professional medical advice because of information accessed through Websites. Seek immediate medical assistance or call your doctor for all medical emergencies</p>
        </center>
       
      </div>
    )
  }
}
export default Disclaimer;