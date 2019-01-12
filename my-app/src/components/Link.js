import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
box-size: border-box;
  text-align: center;
  font-size: 14px;
  font-family: "Roboto";


  color: ${props => props.active ?  "rgb(0, 0, 0) ": 'gray'};
  text-align: right;
  padding-right: 30px;
  border-right: 1px dotted white;

  &:hover{
  	color: #123;
  	text-decoration: none;
  }

  &:last-child{
  	border: 0;
  }

  

`;

class Link extends React.Component{
	render(){
		return(
			< StyledLink href={this.props.link}> {this.props.text} </StyledLink>
			)
	}
}

export default Link;