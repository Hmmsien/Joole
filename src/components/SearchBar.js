import React, { useState, useEffect } from 'react';
import Logo from "./Logo";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../stylesheet/SearchBar.css'
import { getProductsByProject, getProject } from './api';


function Search() {
    const [products, setProducts] = useState([]);
    const [projects, setProjects] = useState([]);
    const [query, setQuery] = useState('');
    const [selectedProject, setSelectedProject] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const products = await getProductsByProject(selectedProject);
            const projects = await getProject();
            setProducts(products);
            setProjects(projects);
            console.log(selectedProject);
        }
        fetchData();
    }, [selectedProject]);


    // Event handler for the input field
    function handleInput(event) {
        setQuery(event.target.value);
    }

    function handleProjectSelection(event) {
        // use the callback function bc setSelectedProject(event.target.value) is being executed asynchronously.
        setSelectedProject(event.target.value);
    }

    // Event handler for the search form submission
    function handleSubmit(event) {
        event.preventDefault();
        navigate("/products");
    }

    return (
        <div>
            <form className="searchBar" onSubmit={handleSubmit}>
                <select className="project" value={selectedProject} onChange={handleProjectSelection}>
                    {projects.map((projects, index) => (
                        <option key={index} value={projects}>
                            {projects}
                        </option>
                    ))}
                </select>

                <input className="product"
                       type="text"
                       value={query}
                       onChange={handleInput}
                       placeholder="search..."
                       list= "brand-options"
                />
                <button type="submit">Search</button>

                <div className="options-container">

                    <datalist id="brand-options">
                        {products.map((product, index) => (
                            <option key={index} value={product.productBrand}>
                                {product.productBrand}
                            </option>
                        ))}
                    </datalist>
                </div>


            </form>
        </div>
    );
}

export default Search;
