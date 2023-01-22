import React, { useState, useEffect } from 'react';
import Logo from "./Logo";
import SearchBar from './SearchBar'
import "../stylesheet/Search.css"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Search() {
    const [username, setUsername] = useState('');
    const [query, setQuery] = useState('');
    // Declare a state variable to track whether the container is visible or not
    const [showContainer, setShowContainer] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const username = await localStorage.getItem('user');
            setUsername(username);
        }
        fetchData();
    }, []);


    // Event handler for when the image is clicked
    function handleImageClick() {
        setShowContainer(!showContainer); // Toggle the value of showContainer
    }

    function handleButtonClick() {
        navigate('/');
    }

    return (
        <div>
            <img className="user" src={require('../images/img.png')}
                 alt="user" image={"true"} onClick={handleImageClick}/>

            {/* Only render the container if showContainer is true */}
            {showContainer && (
                <details className="user-info-container">
                    <p>Username: {username}</p>
                    <button onClick={handleButtonClick}>Logout</button>
                </details>
            )}
            
        </div>
    );
}

export default Search;
