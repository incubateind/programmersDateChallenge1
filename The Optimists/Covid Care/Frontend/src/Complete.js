import React , {Component}  from 'react';

class Start extends React.Component {
  render() {
    if (this.props.currentStep !== 10) { 
      return null
    }
    if(this.props.language==="English"){
    return(
      <div >
      <center>
      <img src="https://www.mygov.in/sites/all/themes/mygov/images/covid/dis_type_1.png" alt="" width={50} height={50} /> 
        <br/><h3 style={{color:'rgba(255,123,0,.96)'}}>COVID-19 Symptom Checker </h3>
        
        <h6> Based on the assessment you are at {this.props.checkcovid}
         for COVID-19 </h6>
        <p style={{fontWeight:'Bold'}}><span style={{color:'#ff0000'}}>NOTE:</span>{this.props.coviddisplay}Contact any healthcare facility near you or call +91-11-23978046.</p>
        <p style={{fontWeight:'Bolder'}}>This is not medical advice</p>
        
     
      
            <a class="button2 text-center" href="/covid" target="_self"><span><i class="fas fa-link"></i> Go Back to Website&nbsp;</span></a>
         <hr/>
        </center>
      
      <h6 style={{fontSize:'16px',color:'rgba(0,123,255,.96)'}}><i style={{color:'rgba(0,255,120,.96)'}}class="fas fa-phone-alt"></i> Bihar Helpline: <a href="tel:104">104</a></h6>
       <h6 style={{fontSize:'16px',color:'rgba(0,123,255,.96)'}}><i style={{color:'rgba(0,255,0,.96)'}} class="fab fa-whatsapp"></i> Central Whatsapp: <a href="tel:+91901315151">+91901315151</a></h6>
        <h6 style={{fontSize:'16px',color:'rgba(0,123,255,.96)'}}><i style={{color:'rgba(0,255,120,.96)'}}class="fas fa-phone-alt"></i> Central Helpline:<a href="tel:+91901315151">+91-11-23978046</a></h6>
      
       
      </div>
    )
  }


    else{
     return(
      <div >
      <center>
      <img src="https://www.mygov.in/sites/all/themes/mygov/images/covid/dis_type_1.png" alt="" width={50} height={50} /> 
        <br/><h3 style={{color:'rgba(255,123,0,.96)'}}>
COVID-19 लक्षण चेकर </h3>
        
        <h6> आश्वासन के आधार पर, आपको COVID-19 के लिए {this.props.checkcovidhindi} है | </h6>
        <p style={{fontWeight:'Bold'}}><span style={{color:'#ff0000'}}>नोट:</span>{this.props.coviddisplayhindi}
 आप किसी भी पास के स्वास्थ्य सुविधा से संपर्क करें या + 91-11-23978046 पर कॉल करें।</p>
        <p style={{fontWeight:'Bolder'}}>यह चिकित्सीय सलाह नहीं है</p>
        
     
      
            <a class="button2 text-center" href="/covid" target="_self"><span><i class="fas fa-link"></i> 
वेबसाइट पर वापस जाएं&nbsp;</span></a>
         <hr/>
        </center>
      
      <h6 style={{fontSize:'16px',color:'rgba(0,123,255,.96)'}}><i style={{color:'rgba(0,255,120,.96)'}}class="fas fa-phone-alt"></i> बिहार हेल्पलाइन: <a href="tel:104">104</a></h6>
       <h6 style={{fontSize:'16px',color:'rgba(0,123,255,.96)'}}><i style={{color:'rgba(0,255,0,.96)'}} class="fab fa-whatsapp"></i> केंद्रीय व्हाट्सएप: <a href="tel:+91901315151">+91901315151</a></h6>
        <h6 style={{fontSize:'16px',color:'rgba(0,123,255,.96)'}}><i style={{color:'rgba(0,255,120,.96)'}}class="fas fa-phone-alt"></i>केंद्रीय हेल्पलाइन:<a href="tel:+91901315151">+91-11-23978046</a></h6>
      
       
      </div>
    )


    }
  }
}
export default Start;