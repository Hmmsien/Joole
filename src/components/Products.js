import React, {useEffect, useState} from "react";
import '../stylesheet/Products.css';
import User from './User'
import axios from 'axios';
import AdvanceSearch from './AdvanceSearch'
import { useNavigate } from "react-router-dom";
import { API_URL_PRODUCTS,token } from './config';
import {getBrands, getProductType} from './api'

async function getProducts() {
    try {
        // send the requst to the API
        const response = await axios.get(API_URL_PRODUCTS, {
            // include the token in the authorization header
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        const products = response.data;
        console.log(products);// log the brands data to the console
        return products;
    } catch (error) {
        console.error(error);// log the error message to the console
    }
}


function Products() {
    const [brands, setBrands] = useState([]);
    const [products, setProducts] = useState([]);
    const [types, setTypes] = useState([]);
    const [query, setQuery] = useState('');
    // Declare a state variable to track whether the container is visible or not
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const brands = await getBrands();
            const products = await getProducts();
            const types = await getProductType();
            setBrands(brands);
            setProducts(products);
            setTypes(types);
        }
        fetchData();
    }, []);
    
    // Event handler for the input field
    function handleInput(event) {
        setQuery(event.target.value);
    }

    // Event handler for the arrow icon click
    function handleArrowClick() {
        {query !== '' && brands
            .filter((brand) => brand.toLowerCase().startsWith(query.toLowerCase()))
            .map((brand, index) => (
                <option key={index} value={brand}>
                    {brand}
                </option>
            ))}
    }

    // Event handler for the search form submission
    function handleSubmit(event) {
        event.preventDefault();
        navigate("/products");
    }

    return (
        <div>
            <div className="header">
                <span className="logoimg">
                    <img src={require('../images/jooleicon.png')} alt="joole" image={"true"} />
                </span>

                <span className="searchbar">
                    <form className="searchBar" onSubmit={handleSubmit}>
                <select id="product">
                      {brands.map((brand, index) => (
                          <option key={index} value={brand}>
                              {brand}
                          </option>
                      ))}
                </select>

                <input className="product"
                       type="text"
                       value={query}
                       onChange={handleInput}
                       placeholder="search..."
                       list= "brand-options"
                       onClick={handleArrowClick}
                />
                <button type="submit">Search</button>

                <div className="options-container">

                    <datalist id="product-options">
                        {brands.map((brand, index) => (
                            <option key={index} value={brand}>
                                {brand}
                            </option>
                        ))}
                    </datalist>
                </div>


            </form>
                </span>

                <span className="userIcon">
                    <User />
                </span>
            </div>

            <div className="showProduct">
                <AdvanceSearch />

                <div className="productsDiv">
                    {products.map((product, index) => (
                        <div className="container" key={index}>
                            <h2>{product.productId}</h2>
                            <p>Brand: {product.productBrand}</p>
                            <p>Certification: {product.certification}</p>
                            <div className="typeDiv">
                                Application: {types[index].application}
                                <br />
                                Type: {types[index].type}
                                <br />
                                Mounting Location: {types[index].mountingLocation}
                                <br />
                                Accessories: {types[index].accessories}
                                <br />
                                Model Year: {types[index].modelYear}
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>

    )
}

export default Products;