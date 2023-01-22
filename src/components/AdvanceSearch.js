import React, {useEffect, useState} from "react";
import '../stylesheet/Products.css';
import User from './User'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { API_URL_PRODUCTS,token } from './config';
import {getBrands, getProductType,getProducts} from './api'

function AdvanceSearch() {
    const [brands, setBrands] = useState([]);
    const [products, setProducts] = useState([]);
    const [types, setTypes] = useState([]);
    const [selectedLabel, setSelectedLabel] = useState('Product');
    const [selectedContainer, setSelectedContainer] = useState('product');
    const [selectedProductType, setSelectedProductType] = useState('');
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [showModelYear, setShowModelYear] = useState(false);

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

    function handleProductClick() {
        setSelectedContainer('product');
        setSelectedLabel('Product');
    }

    function handleProjectClick() {
        setSelectedContainer('project');
        setSelectedLabel('Project');
    }

    function handleProductTypeArrowClick() {
        setSelectedProductType("productType");
        setShowModelYear(!showModelYear);
    }

    function handleBrandArrowClick(event) {
        // update the selectedBrand state here
    }

    function handleBrandSelection(event) {
        // update the selectedBrand state here
        if (event.target.checked) {
            setSelectedBrand([...selectedBrand, event.target.value])
        } else {
            setSelectedBrand(selectedBrand.filter(brand => brand !== event.target.value))
        }
    }

    return (
        <div className="searchDiv">
            <div class="search-button">
                Search:
                <button>Save</button>
                <button>Clear</button>
            </div>

            <div className="label-container">
                <div className={`product-label-container ${selectedContainer === 'product' ? 'active' : ''}`} onClick={handleProductClick}>Product</div>
                <div className={`project-label-container ${selectedContainer === 'project' ? 'active' : ''}`} onClick={handleProjectClick}>Project</div>
            </div>

            <div className={`detail-container ${selectedLabel === 'Product' ? '' : 'hidden'}`}>
                <div className={`product-type-label-container ${selectedProductType === 'productType' ? '' : 'hidden'}`} onClick={handleProductTypeArrowClick}>
                    Product Type
                    <div className={`model-year-container ${showModelYear ? '' : 'hidden'}`}>
                        <p>Model Year:</p>
                        <input type="number" placeholder="From" />
                        <input type="number" placeholder="To" />
                    </div>
                </div>

                <div className={`brand-label-container ${selectedProductType === 'brand' ? '' : 'hidden'}`} onClick={handleBrandArrowClick}>Brands
                    <div className={`brand-list-container ${selectedProductType === 'brand' ? '' : 'hidden'}`}>
                        {brands.map((brand, index) => (
                            <div key={index}>
                                <label>
                                    <input type="checkbox" value={brand} onClick={handleBrandSelection} />
                                    {brand}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={`detail-container ${selectedLabel === 'Project' ? '' : 'hidden'}`}>
                {/*// project detail container*/}
            </div>



        </div>

    )
}

export default AdvanceSearch;