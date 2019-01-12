import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';


const Repare = styled.p`

  font-size: 18px;
  font-family: "Roboto";
  color: rgb(70, 70, 70);
  text-align: left;
`;

const WorkTime =styled.div`
  font-size: 12px;
  font-family: "Roboto";
  color: rgb(42, 42, 42);
	
	span{
		 display: block;
		 font-size: 22px;
		 font-weight: 700;
	}

`;

const Button = styled.button`
  border-radius: 22px;
  background-color: rgb(63, 199, 219);
  width: 173px;
  height: 45px;

  font-size: 15.244px;
  font-family: "Roboto";
  color: rgb(255, 255, 255);
  text-align: center;

  &:hover{
  background-color: rgb(73, 209, 229);
  } 
`;

class Address extends React.Component{
	render(){
		return(
				<span> {this.props.addr} </span>
			)
	}
}

class Calls extends React.Component{
	render(){
		return(
				<span> {this.props.numb} </span>
			)
	}
}

class Nav extends React.Component {
  render() {
    return (
    	<Row>
    		<Col lg={3}>
    			<Repare> Ремонт айфонов в сервисном центре и на выезде</Repare>
    		</Col>

    		<Col lg={3} lgOffset={1}>
    			<WorkTime>Пн-пт с 10 до 20, сб,вс с 11 до 18 

    				<Address addr="Ленинская, 304 " />
    			</WorkTime>

    		</Col>

    		<Col lg={3}>
    			<WorkTime>Звонки принимаются 24 часа 
					<Calls numb = "8 (846) 922 55 44 "/>
				</WorkTime>
    		</Col>

    		<Col lg={2}>
    		<Button>Заказать звонок!</Button>

    		</Col>
    	</Row>
    );
  }
}


export default Nav;

