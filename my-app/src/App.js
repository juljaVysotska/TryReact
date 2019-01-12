import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';

import Header from './components/Header.js';
import Main from './components/Main.js';
import Nav from './components/Nav.js';

const url = process.env.PUBLIC_URL + '/img/back.png';

const HeaderWrapper = styled.header`
  background-color: rgb(36, 36, 36);
  opacity: 0.8;
  height: 48px;
`;

const NavWrapper= styled.div`
height: 90px;
padding: 20px;
`;

const MainWrapper = styled.main`
  background: #111 url(${url}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 562px;
  padding-top: 131px;
  
`;hh

class App extends Component {
  render() {
    return (
      <div className='App'>
        <HeaderWrapper>
          <Grid>
              <Header/>
          </Grid>
        </HeaderWrapper>
        <NavWrapper>
          <Grid>
            <Nav />
          </Grid>
        </NavWrapper>
        <MainWrapper>
          <Grid>
            <Main />
          </Grid>
        </MainWrapper>
      </div>
    );
  }
}






export default App;
