import React from 'react';



const withAuthenticate = (MainPage, Login, Register) =>
    class extends React.Component {
        state = {
            login: null,
            register: null
        }

        componentDidMount() {
            const loggedIn = localStorage.getItem('username');
            const registerNow = localStorage.getItem('register');
            this.setState({
                login: loggedIn ? true : false,
                register: registerNow
            })
        }

        render() {

            return this.state.login ? 
                <MainPage /> 
                : 
                this.state.register ? <Register /> : <Login />
        }
    }


export default withAuthenticate;