import axios from 'axios';
import { API_URL_BRANDS, API_URL_PRODUCTS, API_URL_TYPE, API_URL_PROJPRODUCTS, API_URL_PROJECT,token, username } from './config';

export async function getBrands() {
    try {
        // send the requst to the API
        const response = await axios.get(API_URL_BRANDS, {
            // include the token in the authorization header
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        const brands = response.data;
        console.log(brands);// log the brands data to the console
        return brands;
    } catch (error) {
        console.error(error);// log the error message to the console
    }
}

export async function getProducts() {
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

export async function getProductType() {
    try {
        // send the requst to the API
        const response = await axios.get(API_URL_TYPE, {
            // include the token in the authorization header
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        const types = response.data;
        console.log(types);// log the brands data to the console
        return types;
    } catch (error) {
        console.error(error);// log the error message to the console
    }
}

export async function getProductsByProject(selectedProject) {
    try {
        // send the requst to the API
        const response = await axios.get(API_URL_PROJPRODUCTS, {
            // include the token in the authorization header
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            params: {
                userName: username,
                projectName: selectedProject
            },
        });
        const products = response.data;
        console.log(products);// log the products data to the console
        return products;
    } catch (error) {
        console.error(error);// log the error message to the console
    }
}

export async function getProject() {
    try {
        // send the requst to the API
        const response = await axios.get(API_URL_PROJECT, {
            // include the token in the authorization header
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            params: {
                username: username
            },
        });
        const projects = response.data;
        console.log(projects);// log the products data to the console
        return projects;
    } catch (error) {
        console.error(error);// log the error message to the console
    }
}
