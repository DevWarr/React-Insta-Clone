import React from 'react';
import instagramWord from '../../assets/instagramWord.png';
import loginData from '../data/loginData';
import uuid from 'uuid';
import { RegisterPage, RegisterContainer, Logo, Welcome, Error, Form, Input, RegisterButton, ToLoginForm } from './RegisterStyles';

class Register extends React.Component {
    state = {
        username: "",
        passwordOne: "",
        passwordTwo: "",
        data: [],
        error: false,
        errortext: "Error Text"
    }

    componentDidMount() {
        const localLogins = JSON.parse(localStorage.getItem('loginArray'));
        this.setState({
            data: localLogins ? localLogins : loginData
        })
    }

    register = e => {
        e.preventDefault();


        //<=============== All those Debug things ====================>//

        // Form not filled out? Button is grey and shouldn't work
        if(this.state.username === "" || 
            this.state.passwordOne === "" || 
            this.state.passwordTwo === "") {return}

        // Ensure passwords match. No match = error
        if(this.state.passwordOne !== this.state.passwordTwo) {
            this.setState({
                error: true,
                errortext: "Passwords do not match"
            });
            return;
        }

        // Username already in use? Error!
        const test = this.state.data.findIndex(userObj => userObj.username === this.state.username);
        if(test !== -1) {
            this.setState({
                error: true,
                errortext: "Username already in use"
            });
            return;  
        }

        // Username not long enough? Error!
        if(this.state.username.length < 5) {
            this.setState({
                error: true,
                errortext: "Username must be at least 5 characters"
            });
            return;  
        }

        // <====================The Actual Register code ===================> //

        // Create object for new user
        const newLogin = {
            username: this.state.username,
            password: this.state.passwordOne,
            id: uuid.v4()
        }

        // Add new user into the array of usernames,
        //   within both localstorage and state
        const newLoginData = this.state.data;
        newLoginData.push(newLogin);
        this.setState({
            username: "",
            passwordOne: "",
            passwordTwo: "",
            data: newLoginData,
            error: false,
            errortext: "Error Text"
        });
        localStorage.setItem('loginArray', JSON.stringify(newLoginData));
        localStorage.setItem('username', newLogin.username);
        localStorage.removeItem('register')
        window.location.reload();

    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    toLoginForm() {
        localStorage.removeItem('register');
        window.location.reload();
    }

    render() {
        return (
            <RegisterPage>
                <RegisterContainer>
                    <Logo src={instagramWord} alt="Instagram" />

                    <Welcome typing={this.state.username && 
                                this.state.passwordOne && 
                                this.state.passwordTwo
                            } 
                    >Register User</Welcome>

                    <Error error={this.state.error}>
                        {this.state.errortext}
                    </Error>

                    <Form 
                        onSubmit={this.register}
                    >
                        <Input 
                            type="text"
                            name="username"
                            placeholder="Enter a username..."
                            value={this.state.username}
                            onChange={this.handleChanges}
                        />
                        <Input 
                            type="password"
                            name="passwordOne"
                            placeholder="Enter a password..."
                            value={this.state.passwordOne}
                            onChange={this.handleChanges}
                        />
                        <Input 
                            type="password"
                            name="passwordTwo"
                            placeholder="Confirm password..."
                            value={this.state.passwordTwo}
                            onChange={this.handleChanges}
                        />
                        <RegisterButton 
                            typing={this.state.username && 
                                this.state.passwordOne && 
                                this.state.passwordTwo
                            } 
                            type="submit"
                        >Register</RegisterButton>

                    </Form>

                    <ToLoginForm onClick={this.toLoginForm}>To Log In page</ToLoginForm>
                
                </RegisterContainer>
            </RegisterPage>
        );
    }
}

export default Register;