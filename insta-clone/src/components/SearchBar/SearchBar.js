import React from 'react';
import './SearchBar.scss';
import instagramWord from '../../assets/instagramWord.png';

const SearchBar = () => {

    const nothing = e => {
        e.preventDefault();
    }

    return(
        <div className="search-bar">
            <i class="fab fa-instagram fa-2x"></i>
            <div className="img-container">
                <img src={instagramWord} alt="Instagram" />
            </div>
            <form onSubmit={nothing}>
                <input type="text" placeholder="Search" />
            </form>
            <i class="far fa-compass fa-2x"></i>
            <i class="far fa-heart fa-2x"></i>
            <i class="far fa-user fa-2x"></i>
        </div>
    );
}

export default SearchBar;

// insta-clone\src\components\SearchBar\SearchBar.js
// insta-clone\src\assets\instagram-512.png