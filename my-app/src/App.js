import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div class="wrapper">
    <SaveFullName name="Marselin" sname="Shaperd" link = "https://google.com"/>
    <SaveFullName name="Marselin2" sname="Shaperd2" link = "https://google.com"/>
    <SaveFullName name="Marselin3" sname="Shaperd3" link = "https://google.com"/>
  </div>
    );
  }
}



function SaveFullName(props){
  return(
    <div>
    <h2>Name { props.name}, surname {props.sname}</h2>
    <a href={props.link} >Link into my prop</a>
    </div>
  )
}


export default App;
