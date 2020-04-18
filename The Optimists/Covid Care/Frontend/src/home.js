import React, { Component } from "react";
import "./covid.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      call: false,
      allowChartUpdate: true,
      data: [],
      statewisedata: [],
      newsdata:[],
      states: 0,
      statedata:[],
      confirmed:0,
      deaths: 0,
      recovered: 0,
      active: 0,
      todaycases:0,
      checked: [],
   
    };
  }
  async componentWillMount() {
    

    let r = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
    r = await r.json();
     let re = await fetch(
      "https://bigobackend.herokuapp.com/covid19banner"
    );
    re = await re.json();
    let res = await fetch(
      "https://api.rootnet.in/covid19-in/unofficial/covid19india.org"
    );
    res = await res.json();
   
    var reson=await fetch(
      "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise")
      ;
      var reson= await reson.json();

    let patients = res.data.rawPatientData;
   
   
    var recovpatients = patients.filter(function(patient) {
      return patient.status === "Recovered";
    });
    var decpatients = patients.filter(function(patient) {
      return patient.status === "Deceased";
    });
   

    

    var states = [];
    patients.forEach(function(patient) {
      const newstate = patient.state;
      const duplicatestate = states.filter(function(state) {
        return state === newstate;
      });
      if (duplicatestate.length === 0) {
        states.push(patient.state);
      }
    });
      


    var statewisedata = [];
    var checkedDup = [];
    states.forEach(function(state,i) {
      var district = patients.filter(patient => {
        return patient.state === state;
      });
      statewisedata.push({
        state: state,
        districts: district
      });
      checkedDup.push({
        state: state,
        clickedOrNot: false
      });
    });
    this.setState({
      checked: checkedDup
    });
    statewisedata.forEach(function(state) {
      var regiondata = [];
      state.districts.forEach(function(districtpatient) {
        const newregion = districtpatient.district;
        const duplicateregion = regiondata.filter(function(region) {
          return region.district === newregion;
        });

        if (duplicateregion.length === 0) {
          if (districtpatient.status == "Recovered") {
            regiondata.push({
              district: newregion,
              recovered: 1,
              death: 0,
              active: 0,
              confirmed: 1
            });
          } else if (districtpatient.status === "Deceased") {
            regiondata.push({
              district: newregion,
              recovered: 0,
              death: 1,
              active: 0,
              confirmed: 1
            });
          } else
            regiondata.push({
              district: newregion,
              recovered: 0,
              death: 0,
              active: 1,
              confirmed: 1
            });
        } else {
          var x = regiondata.findIndex(function(region) {
            return region.district === newregion;
          });
          //console.log(x);
          if (districtpatient.status === "Recovered") {
            var i = 0;
            regiondata.forEach(function(region) {
              if (i == x) {
                region.recovered = region.recovered + 1;
                region.confirmed = region.confirmed + 1;
              }
              i++;
            });
          } else if (districtpatient.status === "Deceased") {
            let i = 0;
            regiondata.forEach(function(region) {
              if (i == x) {
                region.death = region.death + 1;
                region.confirmed = region.confirmed + 1;
              }
              i++;
            });
          } else {
            let i = 0;
            regiondata.forEach(function(region) {
              if (i == x) {
                region.active = region.active + 1;
                region.confirmed = region.confirmed + 1;
              }
              i++;
            });
          }
        }
      });
      state.region_wise_data = regiondata;
    });

    console.log(statewisedata);

    var regional = [];

    patients.forEach(function(patient) {
      const newstate = patient.state;
      const duplicateregion = regional.filter(function(region) {
        return region.state === newstate;
      });
      if (duplicateregion.length == 0) {
        if (patient.status == "Recovered") {
          regional.push({
            state: patient.state,
            recovered: 1,
            death: 0,
            active:0,
            confirmed: 1
          });
        } else if (patient.status === "Deceased") {
          regional.push({
            state: patient.state,
            recovered: 0,
            death: 1,
            active:0,
            confirmed: 1
          });
        } else
          regional.push({
            state: patient.state,
            recovered: 0,
            death: 0,
            active:1,
            confirmed: 1
          });
      } else {
        var x = regional.findIndex(function(region) {
          return region.state === patient.state;
        });
        //console.log(x);
        if (patient.status === "Recovered") {
          var i = 0;
          regional.forEach(function(region) {
            if (i == x) {
              region.recovered = region.recovered + 1;
              region.confirmed = region.confirmed + 1;
            }
            i++;
          });
        } else if (patient.status === "Deceased") {
          let i = 0;
          regional.forEach(function(region) {
            if (i == x) {
              region.death = region.death + 1;
              region.confirmed = region.confirmed + 1;
            }
            i++;
          });
        } else {
          let i = 0;
          regional.forEach(function(region) {
            if (i == x) {
              region.confirmed = region.confirmed + 1;
              region.active=region.active+1;
            }
            i++;
          });
        }
      }
    });
    //console.log(r);
    regional.sort(function(a, b) {
      return b.confirmed - a.confirmed;
    });
    
     var statedata=reson.data.statewise;
    
   
   
    statewisedata.forEach(statewise => {
      if(statewise.state)
      var region = statedata.find(reg => {
        return reg.state.toLowerCase() === statewise.state.toLowerCase();
      });
      if(region){
      statewise.confirmed = region.confirmed;
      statewise.recovered = region.recovered;
      statewise.active = region.active
      statewise.death = region.deaths;}
    });

    var confirmed=reson.data.total.confirmed;
    var recovered = reson.data.total.recovered;
    var deaths = reson.data.total.deaths;
    var active = reson.data.total.active;
   
    this.setState({
       
      call: true,
      data: regional,
      statedata:statedata,
      statewisedata: statewisedata,
      confirmed: confirmed,
      recovered: recovered,
      deaths: deaths,
      active: active,
    
     
    });

   
   
    
  }
 
  render() {
    
    return (
      <div >
             
          <center>
            <h2
              style={{
                color: "#b48484",
                fontWeight: "bold",
                marginBottom: "2px"
              }}
            >
              COVID-19 Live Reports
            </h2>

           

         
          </center>

        
           
              <div className="row" style={{ padding: "0px 100px ", margin: "0px" }}>
              <div class="col-sm-12">
               
                <br />
                <div
                  className="col-xs-3"
                  style={{ padding: "0px", margin: "0px" }}
                >
                  <h5
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "20px",
                      fontFamily: "PT Sans",
                      color: "rgba(255,7,58,.6)",
                      marginBottom:'2px'
                    }}
                  >
                    <center>CONFIRMED</center>
                  </h5>

                  <center>
                 
                    <h6 style={{ color: "#ff073a", fontSize: "20px", fontWeight: "bold" }}>
                      {this.state.confirmed}
                    </h6>
                  </center>
                </div>

                <div className="col-xs-3" style={{ padding: "0px" }}>
                  <h5
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "20px",
                      fontFamily: "PT Sans",
                      color: "rgba(0,123,255,.6)"
                    }}
                  >
                    <center>ACTIVE</center>
                  </h5>

                  <center>
                    <h6 style={{ color: "#007bff",  fontSize: "20px",fontWeight: "bold" }}>
                      {this.state.active}
                    </h6>
                  </center>
                </div>
                <div className="col-xs-3" style={{ padding: "0px" }}>
                  <h5
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "20px",
                      fontFamily: "PT Sans",
                      color: " rgba(40,167,69,.6)"
                    }}
                  >
                    <center>RECOVERED</center>
                  </h5>

                  <center>
                    <h6 style={{ color: "#28a745", fontSize: "20px", fontWeight: "bold" }}>
                      {this.state.recovered}
                    </h6>
                  </center>
                </div>
                <div className="col-xs-3" style={{ padding: "0px" }}>
                  <h5
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "20px",
                      fontFamily: "PT Sans",
                      color: "rgba(108,117,125,.6)"
                    }}
                  >
                    <center>DECEASED</center>
                  </h5>

                  <center>
                    <h6 style={{ color: "#6c757d", fontSize: "20px", fontWeight: "bold" }}>
                      {this.state.deaths}
                    </h6>
                  </center>
                </div>
             
              <br />

                 <center>  
                 <br/>
                 <div class="row">
                      <div className="col-xs-3" style={{ padding: "0px" }}>
                <a
                  class="button2 text-center"
                  href="/self_assessment"
                  target="_noblank"
                >
                  <span>
                    <i class="fas fa-link"></i> Check Covid-19 Risk&nbsp;
                  </span>
                </a>
                </div>
                     <div className="col-xs-3" style={{ padding: "0px" }}>
                <a
                  class="button2 text-center"
                  href="/writeupdates"
                  target="_noblank"
                >
                  <span>
                    <i class="fas fa-link"></i> Post Updates (only by Police)&nbsp;
                  </span>
                </a>
                </div>
                     <div className="col-xs-3" style={{ padding: "0px" }}>
                <a
                  class="button2 text-center"
                  href="/subscribe"
                  target="_noblank"
                >
                  <span>
                    <i class="fas fa-link"></i> Get Updates via Newsletter&nbsp;
                  </span>
                </a>
                </div>
                     <div className="col-xs-3" style={{ padding: "0px" }}>
                <a
                  class="button2 text-center"
                  href="https://drive.google.com/open?id=14UmasgMMSCU5a0OvcnNwSJkRRjn5Rywx"
                  target="_noblank"
                >
                  <span>
                    <i class="fas fa-phone-alt"></i> Helpline Numbers&nbsp;
                  </span>
                </a>
                </div>
                </div>
                <br/>
               </center>
             
              
            
            </div>
    
          
        
           <div >
            <center>
           
          
              <h2 style={{ color: "#b48484", fontFamily: "PT Sans",fontWeight: "bold" }}>
                State wise data
              </h2>
            </center>
            <div className="col-sm-12">
              <div className="container">
                

                <div
                  class="table-responsive"
                  style={{ backgroundColor: "white" }}
                >
                  <center>
                    <table class="table table-hover ">
                      <thead>
                        <tr style={{ backgroundColor: "#EBE7E6" }}>
                          <th
                            style={{
                              color: "black",
                              width: "50px",
                              fontSize: "15px"
                            }}
                          >
                            STATE
                          </th>
                          <th
                            class="confirmed"
                            style={{
                              color: "black",
                              textAlign: "center",
                              fontSize: "15px"
                            }}
                          >
                            <span>CONFIRMED</span>
                          </th>
                          <th
                            class="actived"
                            style={{
                              color: "black",
                              textAlign: "center",
                              fontSize: "15px"
                            }}
                          >
                            <span>ACTIVE</span>
                          </th>
                          <th
                            class="recovered"
                            style={{
                              color: "black",
                              textAlign: "center",
                              fontSize: "15px"
                            }}
                          >
                            <span>RECOVERED</span>
                          </th>
                          <th
                            class="deaths"
                            style={{
                              color: "black",
                              textAign: "center",
                              fontSize: "15px"
                            }}
                          >
                            <span>DEATHS</span>
                          </th>
                        </tr>
                      </thead>
                      
                      {this.state.statewisedata.map((reg, index) => (
                        <tbody>
                       
                          <tr style={{ backgroundColor: "#F0EFEF" }}>
                            <td
                              style={{
                                color: "blue",
                                fontWeight: "bolder",
                                width: "1000px"
                              }}
                            >
                              <span
                                //   style={{width:40,backgroundColor: 'rgba(52, 52, 52, alpha)'}}
                                onClick={() => {
                                  var temp = this.state.checked;
                                  const c = this.state.checked[index]
                                    .clickedOrNot;
                                  temp[index].clickedOrNot = !c;

                                  this.setState({
                                    checked: temp
                                  });
                                }}
                              >
                                {!this.state.checked[index].clickedOrNot ? (
                                  <ArrowForwardIcon />
                                ) : (
                                  <ArrowDownwardIcon />
                                )}
                              </span>

                              {reg.state?reg.state:"Unknown"}
                            </td>

                            <td
                              style={{
                                color: "orange",
                                fontWeight: "bolder",
                                color: "#ff073a",
                                textAlign: "center",
                                marginLeft: "-20px"
                              }}
                            >
                                {reg["confirmed"]?reg["confirmed"]:0}
                            </td>
                            <td
                              style={{
                                color: "orange",
                                fontWeight: "bolder",
                                color: "#007bff",
                                textAlign: "center"
                              }}
                            >
                              {reg["active"] ? reg["active"] : 0}
                            </td>
                            <td
                              style={{
                                color: "green",
                                fontWeight: "bolder",
                                color: "#28a745",
                                textAlign: "center"
                              }}
                            >
                              {reg["recovered"]?reg["recovered"]:0}
                            </td>
                            <td
                              style={{
                                color: "red",
                                fontWeight: "bolder",
                                color: "#6c757d",
                                textAlign: "center"
                              }}
                            >
                              {reg["death"]?reg['death']:0}
                            </td>
                          </tr>

                          {this.state.checked[index].clickedOrNot && (
                            <tr
                              style={{ width: "360px", fontWeight: "normal" }}
                            >
                              <th
                                style={{
                                  color: "black",
                                  width: "50px",
                                  fontSize: "12px"
                                }}
                              >
                                DISTRICT
                              </th>
                              <th
                                class="confirmed"
                                style={{
                                  color: "black",
                                  textAlign: "center",
                                  fontSize: "12px"
                                }}
                              >
                                <span>CONFIRMED</span>
                              </th>

                              
                            </tr>
                          )}

                          {this.state.checked[index].clickedOrNot &&
                            reg.region_wise_data.map(region => (
                              <tr>
                                <td
                                  style={{
                                    color: "grey",
                                    fontWeight: "bolder",
                                    width: "50px",
                                    fontSize: "12px"
                                  }}
                                >
                                  {region.district
                                    ? region.district
                                    : "Unknown"}
                                </td>

                                <td
                                  style={{
                                    color: "grey",
                                    fontWeight: "normal",
                                    textAlign: "center",
                                    fontSize: "12px"
                                  }}
                                >
                                  {region["confirmed"]}
                                </td>

                              
                              </tr>
                            ))}
                        </tbody>
                      ))}
                      <thead>
                        <tr style={{ width: "360px" }}>
                          <th style={{ color: "grey", width: "120px" }}>
                            Total
                          </th>
                          <th style={{ color: "grey" ,textAlign:'center'}}>
                          {this.state.confirmed}
                          </th>
                          <th style={{ color: "grey", textAlign: "center" }}>
                            {this.state.active}
                          </th>
                          <th style={{ color: "grey", textAlign: "center" }}>
                            {this.state.recovered}
                          </th>
                          <th style={{ color: "grey", textAlign: "center" }}>
                            {this.state.deaths}
                          </th>
                        </tr>
                      </thead>
                    </table>
                      
                  </center>
                </div>
             

             
            </div>
            </div>
            </div>
        </div>
    </div>        
            )
}
}
export default App; 