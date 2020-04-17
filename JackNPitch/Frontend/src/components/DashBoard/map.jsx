import React, { Component } from 'react';
import { Map,TileLayer, Marker, Popup } from 'react-leaflet';
import TemporaryDrawer from './Sidebar/Sidebar';
import axios from 'axios';
import Container from "@material-ui/core/Container";
import { Typography , Paper} from '@material-ui/core';



class UserMap extends React.Component{
    state = {
        lat :0,
        lng : 0,
        zoom : 13 ,
        open:false,
        users:[],
        med:[],
    }
  
    componentDidMount(){
        const success = (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          this.setState({
            lat: lat,
            lng: lng,
          });
          console.log(this.state);
        };
        const error = () => {
          console.log("error");
        };
        if ( !navigator.geolocation){
            return;
        }
        navigator.geolocation.getCurrentPosition( success , error);
        axios.get(
          'https://jacknpitch.herokuapp.com/locations?users=true'
        ).then( response => {
          let arr=[];
          console.log(response.data.userDetails.highProbability.length);
          for (
            let i = 0;
            i < response.data.userDetails.highProbability.length;
            i++
          ) {
            arr.push(
              response.data.userDetails.highProbability[i].location
            );
          }
          this.setState({users:arr});
          
        })
        axios
          .get("https://jacknpitch.herokuapp.com/medicalCentres")
          .then((response) => {
            let arr = [];

            for (let i = 0; i < response.data.length; i++) {
              arr.push(response.data[i].location);
            }
            this.setState({ med: arr });
          });
          console.log(this.state);

        
    }
  

    render(){
      const handleDrawerToggle = () => {
        let x = this.state.open;
        this.setState({open : !x});
      };

        const position = [this.state.lat, this.state.lng];
        return (
          <div>
            <TemporaryDrawer />
            
            <Typography variant="h1" style={{marginLeft:"13em"}}>DASHBOARD</Typography>
            <Typography
              variant="h3"
              style={{ marginLeft: "10em", marginBottom: "1em" }}
            >
              {" "}
              UserMap
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Container maxwidth="xs" style={{ width: "50%" }}>
                <Map center={position} zoom={0} scrollWheelZoom={false}>
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                  />
                  {this.state.users.map((pos) => {
                    return (
                      <Marker position={pos}>
                        <Popup>maybe infected</Popup>
                      </Marker>
                    );
                  })}
                </Map>
              </Container>
              <Paper elevation={0} style={{ marginRight: "2em" }}>
                {" "}
                <Typography variant="h4">
                  Total infected :{this.state.users.length}
                </Typography>{" "}
              </Paper>
            </div>

            <br />
            <br />

            <Typography
              variant="h3"
              style={{ marginLeft: "10em", marginBottom: "1em" }}
            >
              {" "}
              Medical Center
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Container maxwidth="xs" style={{ width: "50%" }}>
                <Map center={position} zoom={0} scrollWheelZoom={false}>
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                  />
                  {this.state.med.map((pos) => {
                    return (
                      <Marker position={pos}>
                        <Popup>medical facilty</Popup>
                      </Marker>
                    );
                  })}
                </Map>
              </Container>
              <Paper elevation={0} style={{ marginRight: "2em" }}>
                {" "}
                <Typography variant="h4">
                  Total medical centers :{this.state.med.length}
                </Typography>{" "}
              </Paper>
            </div>
            <br />
            <br />

            <Typography variant="h2" style={{ margin: "3em" }}>
              {" "}
              Some Precautions always to take
            </Typography>
            <br />
            <Typography style={{marginLeft:"3em" ,marginRight:"3em"}}>
              Stay aware of the latest information on the COVID-19 outbreak,
              available on the WHO website and through your national and local
              public health authority. Most people who become infected
              experience mild illness and recover, but it can be more severe for
              others. Take care of your health and protect others by doing the
              following: Wash your hands frequently Regularly and thoroughly
              clean your hands with an alcohol-based hand rub or wash them with
              soap and water. Why? Washing your hands with soap and water or
              using alcohol-based hand rub kills viruses that may be on your
              hands. Maintain social distancing Maintain at least 1 metre (3
              feet) distance between yourself and anyone who is coughing or
              sneezing. Why? When someone coughs or sneezes they spray small
              liquid droplets from their nose or mouth which may contain virus.
              If you are too close, you can breathe in the droplets, including
              the COVID-19 virus if the person coughing has the disease. Avoid
              touching eyes, nose and mouth Why? Hands touch many surfaces and
              can pick up viruses. Once contaminated, hands can transfer the
              virus to your eyes, nose or mouth. From there, the virus can enter
              your body and can make you sick. Practice respiratory hygiene Make
              sure you, and the people around you, follow good respiratory
              hygiene. This means covering your mouth and nose with your bent
              elbow or tissue when you cough or sneeze. Then dispose of the used
              tissue immediately. Why? Droplets spread virus. By following good
              respiratory hygiene you protect the people around you from viruses
              such as cold, flu and COVID-19. If you have fever, cough and
              difficulty breathing, seek medical care early Stay home if you
              feel unwell. If you have a fever, cough and difficulty breathing,
              seek medical attention and call in advance. Follow the directions
              of your local health authority. Why? National and local
              authorities will have the most up to date information on the
              situation in your area. Calling in advance will allow your health
              care provider to quickly direct you to the right health facility.
              This will also protect you and help prevent spread of viruses and
              other infections. Stay informed and follow advice given by your
              healthcare provider Stay informed on the latest developments about
              COVID-19. Follow advice given by your healthcare provider, your
              national and local public health authority or your employer on how
              to protect yourself and others from COVID-19. Why? National and
              local authorities will have the most up to date information on
              whether COVID-19 is spreading in your area. They are best placed
              to advise on what people in your area should be doing to protect
              themselves.
            </Typography>
            <br/>
          </div>
        );
    }
}

export default UserMap;