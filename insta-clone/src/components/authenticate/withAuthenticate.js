import React from 'react';



const withAuthenticate = LoggedIn => LoginPage =>
    class extends React.Component {
        state = {
            login: false
        }

        componentDidMount() {
            const loggedIn = localStorage.getItem('username');
            this.setState({
                login: loggedIn ? true : false
            })
        }

        render() {

            return this.state.login ? <LoggedIn /> : <LoginPage />
        }
    }


export default withAuthenticate;