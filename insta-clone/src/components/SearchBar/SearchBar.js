import React from 'react';
import './SearchBar.scss';
import instagramWord from '../../assets/instagramWord.png';

class SearchBar extends React.Component {
    state = {
        menu: "cursor logout"
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
            menu: prevState.menu.includes("visible") ?
                "cursor logout"
                :
                "cursor logout visible"
        }));
    }

    render() {
        return(
            <div className="search-bar">
                <i className="fab fa-instagram fa-2x"></i>
                <div className="img-container">
                    <img src={instagramWord} alt="Instagram" />
                </div>
                <form onSubmit={this.nothing}>
                    <input 
                        type="text" 
                        placeholder="Search" 
                        onChange={this.props.search} 
                    />
                </form>
                <i className="far fa-compass fa-2x"></i>
                <i className="far fa-heart fa-2x"></i>
                <i className="far fa-user fa-2x cursor" onClick={this.toggleMenu}></i>
                <div className={this.state.menu} onClick={this.logOut}>
                    Log Out
                </div>
            </div>
    );}
}

export default SearchBar;

// insta-clone\src\components\SearchBar\SearchBar.js
// insta-clone\src\assets\instagram-512.png