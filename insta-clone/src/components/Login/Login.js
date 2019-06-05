import React from 'react';
import instagramWord from '../../assets/instagramWord.png';

class Login extends React.Component {
    state ={

    }


    handleChanges = e => {
        e.preventDefault();
        
    }

    render() {
        return (
            <div className="login-page">
                <div className="login-container">
                    <img src={instagramWord} alt="Instagram" />
                    <form className="login-form">
                        <input 
                            className="username"
                            type="text"
                            name="username"
                            onChange={this.state.handleChanges}
                        />
                        <input 
                            className="password"
                            type="password"
                            name="password"
                            onChange={this.state.handleChanges}
                        />
                        <button>Log in</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;