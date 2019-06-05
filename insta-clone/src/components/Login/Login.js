import React from 'react';
import instagramWord from '../../assets/instagramWord.png';

class Login extends React.Component {
    state ={
        username: "",
        password: "",

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
                            onChange={this.state.handleChanges}
                        />
                        <input 
                            className="password"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.state.handleChanges}
                        />
                        <button type="submit">Log in</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;