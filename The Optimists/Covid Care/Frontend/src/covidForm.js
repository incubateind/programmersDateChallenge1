import React , {Component}  from 'react';
import './covidForm.css'
import Start from './Start';
import Disclaimer from './Disclaimer';
import Patientdet from './Patientdet';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Complete from './Complete';
import axios from 'axios';

class MasterForm extends Component{

	 constructor(props) {
    super(props)
    // Set the initial input values
    this.state = {
      currentStep: 1, // Default is Step 1
      FullName: '',
      MobileNo: '',
      age:null,
      Pincode: '',
      nationality:'',
      language:'',
      Ques1:'',
        Ques2:'',
          Ques3:'',
            Ques4:'',
              Ques5:'',
                Ques6:'',
    
    }
      this.handleChange = this.handleChange.bind(this);
      this._next = this._next.bind(this);
    this._prev = this._prev.bind(this); 
}
 get checkcovid(){
   const Ques2 =this.state.Ques2;
  const Ques3=this.state.Ques3;
  const Ques4=this.state.Ques4;
  const Ques5 =this.state.Ques5;
  if (Ques2==1){
   if(Ques3>=1&&Ques3<=3)
     {
        if(Ques4>=1&&Ques4<=3)
          return <span className="bg-danger text-danger">  risk </span> 
        else 
        if(Ques5>=1&&Ques5<=4)
          return <span className="bg-danger text-danger">  risk </span> 
        else  return  <span className="bg-success text-success"> no risk </span>
     }
     else if(Ques4>=1&&Ques4<=3){

     if(Ques5>=1&&Ques5<=4)
      return <span className="bg-danger text-danger">  risk </span> 
 else  return  <span className="bg-success text-success"> no risk </span>
     }
else return  <span className="bg-success text-success"> no risk </span>

  }
 else if(Ques3>=1&&Ques3<=3)
  {   

     if(Ques4>=1&&Ques4<=3){
      
      if(Ques5>=1&&Ques5<=4)
       return <span className="bg-danger text-danger">  risk </span> 
         
       
      else 
       return  <span className="bg-success text-success"> no risk </span>
     
  }
 else  return  <span className="bg-success text-success"> no risk </span>
  }
 
else  return  <span className="bg-success text-success"> no risk </span>


}
get coviddisplay(){
   const Ques2 =this.state.Ques2;
  const Ques3=this.state.Ques3;
  const Ques4=this.state.Ques4;
  const Ques5 =this.state.Ques5;
  if (Ques2==1){
   if(Ques3>=1&&Ques3<=3)
     {
        if(Ques4>=1&&Ques4<=3)
          return <span>   </span> 
        else 
        if(Ques5>=1&&Ques5<=4)
          return <span>   </span> 
        else  return  <span> Incase Your Symptoms changes, </span>
     }
     else if(Ques4>=1&&Ques4<=3){

     if(Ques5>=1&&Ques5<=4)
      return <span > </span> 
 else  return  <span > Incase Your Symptoms changes, </span>
     }
else return  <span > Incase Your Symptoms changes, </span>

  }
 else if(Ques3>=1&&Ques3<=3)
  {   

     if(Ques4>=1&&Ques4<=3){
      
      if(Ques5>=1&&Ques5<=4)
       return <span >   </span> 
         
       
      else 
       return  <span >Incase Your Symptoms changes,  </span>
     
  }
  else return  <span > Incase Your Symptoms changes, </span>
 
  }
 
else  return  <span > Incase Your Symptoms changes, </span>
}


 get checkcovidhindi(){
   const Ques2 =this.state.Ques2;
  const Ques3=this.state.Ques3;
  const Ques4=this.state.Ques4;
  const Ques5 =this.state.Ques5;
  if (Ques2==1){
   if(Ques3>=1&&Ques3<=3)
     {
        if(Ques4>=1&&Ques4<=3)
          return <span className="bg-danger text-danger">  खतरा </span> 
        else 
        if(Ques5>=1&&Ques5<=4)
          return <span className="bg-danger text-danger">  खतरा </span> 
        else  return  <span className="bg-success text-success"> 
कोई खतरा नहीं </span>
     }
     else if(Ques4>=1&&Ques4<=3){

     if(Ques5>=1&&Ques5<=4)
      return <span className="bg-danger text-danger"> 
कोई खतरा नहीं</span> 
 else  return  <span className="bg-success text-success"> 
कोई खतरा नहीं </span>
     }
else return  <span className="bg-success text-success"> 
कोई खतरा नहीं </span>

  }
 else if(Ques3>=1&&Ques3<=3)
  {   

     if(Ques4>=1&&Ques4<=3){
      
      if(Ques5>=1&&Ques5<=4)
       return <span className="bg-danger text-danger">  खतरा</span> 
         
       
      else 
       return  <span className="bg-success text-success"> 
कोई खतरा नहीं </span>
     
  }
 else  return  <span className="bg-success text-success"> 
कोई खतरा नहीं</span>
  }
 
else  return  <span className="bg-success text-success"> 
कोई खतरा नहीं</span>


}
get coviddisplayhindi(){
   const Ques2 =this.state.Ques2;
  const Ques3=this.state.Ques3;
  const Ques4=this.state.Ques4;
  const Ques5 =this.state.Ques5;
  if (Ques2==1){
   if(Ques3>=1&&Ques3<=3)
     {
        if(Ques4>=1&&Ques4<=3)
          return <span>   </span> 
        else 
        if(Ques5>=1&&Ques5<=4)
          return <span>   </span> 
        else  return  <span> यदि आपके लक्षण बदलते हैं, </span>
     }
     else if(Ques4>=1&&Ques4<=3){

     if(Ques5>=1&&Ques5<=4)
      return <span > </span> 
 else  return  <span > यदि आपके लक्षण बदलते हैं, </span>
     }
else return  <span > यदि आपके लक्षण बदलते हैं, </span>

  }
 else if(Ques3>=1&&Ques3<=3)
  {   

     if(Ques4>=1&&Ques4<=3){
      
      if(Ques5>=1&&Ques5<=4)
       return <span >   </span> 
         
       
      else 
       return  <span > यदि आपके लक्षण बदलते हैं,  </span>
     
  }
  else return  <span >  यदि आपके लक्षण बदलते हैं, </span>
 
  }
 
else  return  <span >  यदि आपके लक्षण बदलते हैं, </span>
}




    get BeginButton(){
   let currentStep=this.state.currentStep;
   if(currentStep==1){
    
   	return (<center><button
   		className="btn btn-primary btn-block"
   		type="button" onClick={this._next}>
   	Begin Survey
   	</button></center>)

   }
   if(currentStep==3){
    const { FullName,MobileNo,Pincode,age,nationality,language} = this.state;
const isEnabled = FullName.length > 0 && MobileNo.length > 0 &&Pincode.length>0&&age&&language.length>0&&nationality.length>0;
   	return (<center><button disabled={!isEnabled}
   		className="btn btn-primary btn-block"
   		type="button" onClick={this._next}>
   	Begin Survey
   	</button ></center>)

   }

   return null;
}
   get AcceptButton(){
   let currentStep=this.state.currentStep;
   if(currentStep==2){

   	return (<center><button
   		className="btn btn-info btn-block"
   		type="button" onClick={this._next}>
   	Accept & Begin Survey
   	</button></center>)
   }
   return null;



    }
    get previousButton(){
  let currentStep = this.state.currentStep;
  // If the current step is not 1, then render the "previous" button
  if(currentStep>3&&currentStep<10){
    return (
      <button 
        className="btn btn-info float-left " 
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  // ...else return nothing
  return null;
}

get nextButton(){
  let currentStep = this.state.currentStep;
   


  if(currentStep>3&&currentStep<9){
    return (
      <button 
        className="btn btn-primary float-right" 
        type="button" onClick={this._next}>
      Next
      </button>        
    )
  
  }
}
  get CompleteButton(){

  let currentStep = this.state.currentStep;
  // If the current step is not 3, then render the "next" button
  if(currentStep==9){
    return (
      <button 
        className="btn btn-warning float-right" 
        type="submit" >
      Complete
      </button>        
    )
  }
  // ...else render nothing
  return null;
}
 handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
    _next() {
     console.log("sdd00");
    let currentStep = this.state.currentStep
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep>=1 &&currentStep<=9 ? (currentStep + 1):currentStep
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev() {
    let currentStep = this.state.currentStep
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }
  
  // Trigger an alert on form submission
  handleSubmit = (event) => {

    event.preventDefault()
    var PatientDaTa={
     pat_name:this.state.FullName,
     pat_pincode:this.state.Pincode,
    pat_phone:this.state.MobileNo
      


    }
    axios.post("https://bigobackend.herokuapp.com/covid19selfassessment",{
     pat_name:this.state.FullName,
         pat_phone:this.state.MobileNo,
         pat_pincode:this.state.Pincode,
         pat_age:this.state.age,
         symptom1:this.state.Ques1,
         symptom2:this.state.Ques2,
         symptom3:this.state.Ques3,
         symptom4:this.state.Ques4,
         symptom5:this.state.Ques5,
         symptom6:this.state.Ques6

      


    }
    ).then(
    response=>{
      console.log(response);
      console.log(this.state);
      
    }).catch(error=>{
      console.log(error)
    })
    this._next();
   
  }
render() {    
return (
  <React.Fragment >
    
    <div class="center" ><form class="forms" onSubmit={this.handleSubmit}  >
    <div class="container" >
   
     <Start
      currentStep={this.state.currentStep} 
     
     
    />
    <Disclaimer 
      currentStep={this.state.currentStep} 
     
     
    />
    <Patientdet 
      currentStep={this.state.currentStep} 
      handleChange={this.handleChange}
     
      MobileNo={this.state.MobileNo}
       FullName={this.state.FullName}
        Pincode={this.state.Pincode}
        age={this.state.age}
    />

    <Step1 
      currentStep={this.state.currentStep} 
      handleChange={this.handleChange}
       Ques1={this.state.Ques1}
       language={this.state.language}

    />
    <Step2 
      currentStep={this.state.currentStep} 
      handleChange={this.handleChange}
      language={this.state.language}
    />
    <Step3 
      currentStep={this.state.currentStep} 
      handleChange={this.handleChange}
      language={this.state.language}
    />   
    <Step4 
      currentStep={this.state.currentStep} 
      handleChange={this.handleChange}
      language={this.state.language}
    /> 
    <Step5 
      currentStep={this.state.currentStep} 
      handleChange={this.handleChange}
      language={this.state.language}
    /> 
    <Step6 
      currentStep={this.state.currentStep} 
      handleChange={this.handleChange}
     language={this.state.language}
    />    
     <Complete 
      currentStep={this.state.currentStep} 
      checkcovid={this.checkcovid}
      coviddisplay={this.coviddisplay}
      checkcovidhindi={this.checkcovidhindi}
      coviddisplayhindi={this.coviddisplayhindi}
     language={this.state.language}
     
    /> 
    
      {this.previousButton}
      <span>   </span>
      {this.nextButton}

      {this.BeginButton}
      {this.AcceptButton}
        {this.CompleteButton}
      </div>
  </form></div>
  
  </React.Fragment>
)
}
}
export default MasterForm;