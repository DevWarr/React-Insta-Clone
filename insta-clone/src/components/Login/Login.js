import React from 'react';
import instagramWord from '../../assets/instagramWord.png';
import loginData from '../data/loginData';
// import './Login.scss';
import { LoginPage, LoginContainer, Logo, Welcome, Error, Form, Input, LoginButton, ToRegisterForm } from './LoginStyles';

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        data: [],
        error: false
    }

    componentDidMount() {
        const localLogins = JSON.parse(localStorage.getItem('loginArray'));
        this.setState({
            data: localLogins ? localLogins : loginData
        })
    }

    login = e => {
        e.preventDefault();

        // Create object for login check
        const user = this.state.username;
        const pass = this.state.password

        // Go into the state and search for a user in the array that matches input
        // ie: Does the user exist in our 'database'?
        const userIndex = this.state.data.findIndex(userObj => {
            return userObj.username === user && userObj.password === pass
        })

        // Doesn't exist? Conosle.log error, and that is all.
        if (userIndex === -1) {
            console.log(this.state);
            this.setState({error: true});
            return
        }

        // User exists? Set that username to localStorage and reload the page
        localStorage.setItem('username', this.state.data[userIndex].username);
        window.location.reload();
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    toRegisterForm() {
        localStorage.setItem('register', 'true')
        window.location.reload();
    }


    render() {
        return (
            <LoginPage>
                <LoginContainer>
                    <Logo src={instagramWord} alt="Instagram" />
                    <Welcome typing={this.state.username} >Log In</Welcome>
                    <Error error={this.state.error}>
                        User and/or pass do not match.
                    </Error>
                    <Form 
                        onSubmit={this.login}
                    >
                        <Input 
                            type="text"
                            name="username"
                            placeholder="username..."
                            value={this.state.username}
                            onChange={this.handleChanges}
                        />
                        <Input 
                            type="password"
                            name="password"
                            placeholder="password..."
                            value={this.state.password}
                            onChange={this.handleChanges}
                        />
                        <LoginButton typing={this.state.username} type="submit">Log in</LoginButton>
                    </Form>
                    <ToRegisterForm onClick={this.toRegisterForm}>New user? Register here</ToRegisterForm>
                </LoginContainer>
            </LoginPage>
        );
    }
}

export default Login;