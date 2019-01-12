import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 40px;
  font-family: "Roboto";
  color: rgb(255, 255, 255);
  font-weight: bold;

  span{
  	font-size:24px;
  }

`;

const Description = styled.p`
	margin-top:50px;
  font-size: 18px;
  font-family: "Roboto";
  color: rgb(255, 255, 255);

`;

const Button = styled.button`
	margin-top: 34px;
	  border-radius: 32px;
	  background-color: rgb(255, 161, 75);
	  width: 245px;
	  height: 64px;
	  font-size: 18px;
	  font-family: "Roboto";
	  color: rgb(255, 255, 255);
	  text-align: center;

	 &:hover{

	  background-color: rgb(255, 171, 85);
	 }
 
`;

class Main extends React.Component {
  render() {
    return (
      
      	<Row>
      		<Col lg={5}>
      			<Title>
      				Качественный ремонт <span>iphone за 35 минут и гарантия 1 год</span>
      			</Title>
      			<Description>Оставьте заявку на бесплатную диагностику без очереди, и получи защистное стекло, стоимостью 100 рублей, с установкой в подарок!</Description>
      			<Button>Отправить заявку!</Button>
      		</Col>
      		
     		<Col lg={6} lgOffset={1}>
      				SLIDER
     	 	</Col>
      	</Row>
    );
  }
}


export default Main;