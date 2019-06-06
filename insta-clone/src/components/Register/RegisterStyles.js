import styled, { css } from 'styled-components';

export const RegisterPage = styled.div`
	max-width: 3500px;
	width: 100%;
	height: 90vh;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const RegisterContainer = styled.div`
	width: 350px;
	height: 420px;
	background: white;
	border: 1px solid #dddddd;
	border-radius: 5px;
	padding: 10px 1px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled.img`
	width: 60%;
	height: auto;
	margin-top: 5%;
`;

export const Welcome = styled.h2`
	margin: 0;
	margin-bottom: 0;
	
	${props => {
		if(props.typing !== "") {return css`color: #4664F5;`;}
        else {return css`color: lightblue;`;}
	}}

`;

export const Error = styled.p`
	margin: 0;
	margin-bottom: 10px;
	padding: 0;
	font-size: 0.9rem;
	color: red;
    
    ${props => {
        if(props.error) {return css`opacity: 1;  transition: opacity 0.5s linear;`;}
        else {return css`opacity: 0;  transition: none;`;}
    }}

`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	height: 50%;
	margin-bottom: 0;
`;

export const Input = styled.input`
	width: 258px;
	height: 36px;
	padding: 9px 0 7px 8px;
	border: 1px solid #dddddd;
	border-radius: 5px;
`;

export const RegisterButton = styled.button`
	color: white;
	border: none;
	font-weight: bold;
	width: 258px;
	height: 30px;
	padding: 9px 0 7px 8px;
	margin-top: 10px;
    border-radius: 5px;
    
    ${props => {
        if(props.typing !== "") {return css`cursor: pointer;  background: #4664F5;`;}
        else {return css`curosr: default;  background: lightblue;`;}
    }}

`;

export const ToLoginForm = styled.p`
    margin: 0;
    padding: 1%;
    color: lightblue;
    font-weight: bold;
    &:hover {
        cursor: pointer;
        color: #4664F5;
    }
`;