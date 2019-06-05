import React from 'react';
import instagramWord from '../../assets/instagramWord.png';
import loginData from '../data/loginData';
import uuid from 'uuid';
import './Login.scss';

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        data: [],
        error: "error"
    }

    componentDidMount() {
        const localLogins = JSON.parse(localStorage.getItem('loginArray'));
        this.setState({
            data: localLogins ? localLogins : loginData
        })
    }

    login = e => {
        e.preventDefault();

        // Create object for login
        const loginUser = {
            user: this.state.username,
            pass: this.state.password,
            id: uuid.v4()
        }

        // Go into the state and search for a user in the array that matches input
        // ie: Does the user exist in our 'database'?
        const userIndex = this.state.data.findIndex(user => {
            return user.username === loginUser.user && user.password === loginUser.pass
        })

        // Doesn't exist? Conosle.log error, and that is all.
        if (userIndex === -1) {
            console.log(this.state);
            this.setState( () => ({
                error: "error visible"
            }));
            return}

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


    render() {
        return (
            <div className="login-page">
                <div className="login-container">
                    <img src={instagramWord} alt="Instagram" />
                    <h2>Log In</h2>
                    <p className={this.state.error}>User and/or pass do not match.</p>
                    <form 
                        className="login-form"
                        onSubmit={this.login}
                    >
                        <input 
                            className="username"
                            type="text"
                            name="username"
                            placeholder="username..."
                            value={this.state.username}
                            onChange={this.handleChanges}
                        />
                        <input 
                            className="password"
                            type="password"
                            name="password"
                            placeholder="password..."
                            value={this.state.password}
                            onChange={this.handleChanges}
                        />
                        <button className={this.state.username ? "typing" : null} type="submit">Log in</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;