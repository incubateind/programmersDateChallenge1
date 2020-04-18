import React, {Component} from 'react';
import './App.css';
import CovidForm from './covidForm';
import EmailForm from './emailForm';
import InformationForm from './informationForm';
import { BrowserRouter, Switch,Route,Redirect } from 'react-router-dom';
import home from './home';
class App extends Component {
  
 
 
render(){

  
 return (
     <div>
       
      <BrowserRouter 
basename={process.env.PUBLIC_URL}>
 <Switch>
  <Route exact path="/subscribe" component={EmailForm}/>
    <Route exact path="/writeupdates"component={InformationForm}/>
  <Route exact path="/self_assessment" component={CovidForm}/>
    <Route component={home}/>
    
                </Switch>
</BrowserRouter>
              </div>
  
  
  );

}

}

export default App;
