export const API_URL_BRANDS = 'http://localhost:8080/joole/product/brands';
export const API_URL_PRODUCTS= 'http://localhost:8080/joole/product/allProducts';
export const API_URL_TYPE= 'http://localhost:8080/joole/product/type';
export const  API_URL_PROJPRODUCTS = 'http://localhost:8080/joole/search/products';
export const  API_URL_PROJECT = 'http://localhost:8080/joole/project/projects';
export const token = getToken();
export const username = getUserName();

function getToken(){
    return localStorage.getItem('token');
}

function getUserName(){
    return localStorage.getItem('user');
}
