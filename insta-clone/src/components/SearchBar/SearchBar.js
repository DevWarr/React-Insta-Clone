import React from 'react';
import './SearchBar.scss';
import instagramWord from '../../assets/instagramWord.png';
import { Header, ImageContainer, Form, Search, Image, Logout } from './SearchStyles';

class SearchBar extends React.Component {
    state = {
        menu: false
    }


    nothing = e => {
        e.preventDefault();
    }

    logOut = e => {
        e.preventDefault();
        localStorage.removeItem('username');
        window.location.reload();
    }  

    toggleMenu = () => {
        this.setState(prevState => ({
            menu: !prevState.menu
        }));
    }

    render() {
        console.log(this.state);
        return(
            <Header>
                <i className="fab fa-instagram fa-2x"></i>
                <ImageContainer>
                    <Image src={instagramWord} alt="Instagram" />
                </ImageContainer>
                <Form onSubmit={this.nothing}>
                    <Search 
                        type="text" 
                        placeholder="Search" 
                        onChange={this.props.search} 
                    />
                </Form>
                <i className="far fa-compass fa-2x"></i>
                <i className="far fa-heart fa-2x"></i>
                <i className="far fa-user fa-2x cursor" onClick={this.toggleMenu}></i>
                <Logout menu={this.state.menu} onClick={this.logOut}>
                    Log Out
                </Logout>
            </Header>
    );}
}

export default SearchBar;

// insta-clone\src\components\SearchBar\SearchBar.js
// insta-clone\src\assets\instagram-512.png