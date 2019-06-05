import React from 'react';
import instagramWord from '../../assets/instagramWord.png';
import './Login.scss';

class Login extends React.Component {
    state = {
        username: "",
        password: "",
    }

    login = e => {
        e.preventDefault();
        localStorage.setItem('username', this.state.username);
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