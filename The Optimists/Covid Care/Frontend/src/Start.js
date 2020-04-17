import React , {Component}  from 'react';
class Start extends React.Component {
  render() {
    if (this.props.currentStep !== 1) { 
      return null
    }
  
    return(
      <div>
      <center><img src="https://www.mygov.in/sites/all/themes/mygov/images/covid/dis_type_1.png" alt="" width={100} height={80} />
        <h1>COVID Assistant </h1>
        <h5>Check your risk for COVID‑19</h5> 
        <p> Based on best CDC guidelines, illness severity and risk factors like age and pre-existing conditions</p>
        <h6>This application does not provide medical advice</h6></center>
        
       <br/>
       <br/>
      </div>
    )
  }
}
export default Start;



