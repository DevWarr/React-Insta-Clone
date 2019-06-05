import React from 'react';
import instagramWord from '../../assets/instagramWord.png';

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
                    <form 
                        className="login-form"
                        onSubmit={this.login}
                    >
                        <input 
                            className="username"
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChanges}
                        />
                        <input 
                            className="password"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChanges}
                        />
                        <button type="submit">Log in</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;