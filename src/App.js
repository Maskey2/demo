import React from 'react';
import './App.css';
import './index.css';
import Logo from './Sea-Land.svg';
import Logo2 from './Google-Maps.svg';


const divStyle = {
  width: "100px"
};


const linkStyle = {
  color: "white",
  textDecoration: 'none',
};

function App() {
  return (
     <div id="content" className="App">
      <p><img src={Logo} width="918" alt="Sea-Land Distributors" className="img-logo"/></p> 
    <p>1000 Edwards Avenue, Suite C,&nbsp; New Orleans, Louisiana&nbsp;70123 USA</p>
    <p>504-736-9477  &nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:info@sldrigging.com" style={linkStyle}> info@sldrigging.com</a></p>
    <p><strong>Hours:&nbsp;</strong>  Monday-Friday &nbsp; 8:00 a.m. to 5:00 p.m.&nbsp; &nbsp;Central Time</p>
    <p><a href="https://www.google.com/maps/place/Sea-Land+Distributors,+LLC./@29.955757,-90.1957167,17z/data=!4m12!1m6!3m5!1s0x0:0xacc2bccf2da70d2d!2sSea-Land+Distributors,+LLC.!8m2!3d29.955757!4d-90.193528!3m4!1s0x0:0xacc2bccf2da70d2d!8m2!3d29.955757!4d-90.193528?hl=en" 
    alt="View Our Location on Google Maps" width="100"
    rel="noopener">
       <img src={Logo2} alt="View Our Location on Google Maps" style={divStyle}/>
    </a>
  </p>    
    </div>
  );
}

export default App;
