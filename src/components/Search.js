import React, { useState, useEffect } from 'react';
import Logo from "./Logo";
import SearchBar from './SearchBar'
import User from './User'
import "../stylesheet/Search.css"
import { useNavigate } from "react-router-dom";

function Search() {
    const navigate = useNavigate();

    return (
        <div>
            <User />

            <div className="logo">
                <Logo />
            </div>
                
            <div className="search">
                <SearchBar />
            </div>
        </div>
    );
}

export default Search;
