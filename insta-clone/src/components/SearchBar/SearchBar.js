import React from 'react';
import './SearchBar.scss';
import instagramWord from '../../assets/instagramWord.png';

const SearchBar = (props) => {

    const nothing = e => {
        e.preventDefault();
    }

    return(
        <div className="search-bar">
            <i className="fab fa-instagram fa-2x"></i>
            <div className="img-container">
                <img src={instagramWord} alt="Instagram" />
            </div>
            <form onSubmit={nothing}>
                <input type="text" placeholder="Search" onChange={props.search} />
            </form>
            <i className="far fa-compass fa-2x"></i>
            <i className="far fa-heart fa-2x"></i>
            <i className="far fa-user fa-2x"></i>
        </div>
    );
}

export default SearchBar;

// insta-clone\src\components\SearchBar\SearchBar.js
// insta-clone\src\assets\instagram-512.png