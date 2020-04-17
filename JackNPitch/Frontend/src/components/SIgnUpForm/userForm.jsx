import React, { Component } from 'react';
import  UserDetails  from './userPersonalDetails';
import  UserDetails2  from './userPersonalDetails2';
import  UserDetails3  from './userPersonalDetails3';
import QuestionDetail from "./questionDetail";
import QuestionDetail1 from "./questionDetail1";
import QuestionDetail2 from "./questionDetail2";
import QuestionDetail3 from "./questionDetail3";
import QuestionDetail4 from "./questionDetail4";
import QuestionDetail5 from "./questionDetail5";
import QuestionDetail6 from "./questionDetail6";
import QuestionDetail7 from "./questionDetail7";
import QuestionDetail8 from "./questionDetail8";
import QuestionDetail9 from "./questionDetail9";
import Success from "./Success";
//GENERAL
import {Fade } from 'react-reveal';
export class UserForm extends Component{
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phone:'',
        age :'',
        occupation: '',
        city: '',
        bio: '', 
        gender: 'female',
        diseases :[],
        q1: "true",
        q2: "true",
        q3: "true",
        q4: "true",
        q5: "true",
        q6: "true",
        q7: "true",
        q8: "true",
        q9: "true",
    };

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        
        setTimeout(() => {
            this.setState({
              step: step + 1,
            })
        } , 500);
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        setTimeout(() => {
          this.setState({
            step: step - 1,
          });
        }, 500);
    };

    // Handle fields change
    handleChange = input => e => {
       
        
        this.setState({ [input]: e.target.value });
    };

    handleRadio = input => e => {
        this.setState({ [input] : e});
    }

    handleMultiple = (event) => {
        console.log(event.target.value);
        this.setState({
            diseases : event.target.value,
        })
        
    }


    render(){
        const {step} =  this.state;
        const {
          firstName,
          lastName,
          email,
          occupation,
          city,
          gender , 
          diseases,
          age , 
          phone ,
        } = this.state;
        const values = { firstName, lastName, email, occupation, city, gender , diseases ,age , phone };
        switch( step ){
            case 1:
                return (
                    <Fade>
                  <UserDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                  />
                  </Fade>
                );
            case 2:
                return (
                  <Fade right>
                    <UserDetails2
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleRadio}
                      values={values}
                    />
                  </Fade>
                );
            case 3:
                return (
                  <Fade>
                    <UserDetails3
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleMultiple}
                      values={values}
                    />
                  </Fade>
                );
            case 4:
                return (
                  <Fade>
                    <QuestionDetail
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                    />
                  </Fade>
                );
            case 5:
                return (
                  <Fade>
                    <QuestionDetail1
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleRadio}
                    />
                  </Fade>
                );
            case 6:
                return (
                  <Fade>
                    <QuestionDetail2
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleRadio}
                    />
                  </Fade>
                );
            case 7:
                return (
                  <Fade>
                    <QuestionDetail3
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleRadio}
                    />
                  </Fade>
                );
            case 8:
                return (
                  <Fade>
                    <QuestionDetail4
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleRadio}
                    />
                  </Fade>
                );
            case 9:
                return (
                  <Fade>
                    <QuestionDetail5
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleRadio}
                    />
                  </Fade>
                );
            case 10:
                return (
                  <Fade>
                    <QuestionDetail6
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleRadio}
                    />
                  </Fade>
                );
            case 11:
                return (
                  <Fade>
                    <QuestionDetail7
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleRadio}
                    />
                  </Fade>
                );
            case 12:
                return (
                  <Fade>
                    <QuestionDetail8
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleRadio}
                    />
                  </Fade>
                );
            case 13:
                return (
                  <Fade>
                    <QuestionDetail9
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleRadio}
                    />
                  </Fade>
                );
            case 14:
                return (
                    <Fade>
                        <Success 
                            prevStep={this.prevStep}
                            p={this.state.props}
                        />
                    </Fade>
                )

        }
    }
}

export default UserForm;