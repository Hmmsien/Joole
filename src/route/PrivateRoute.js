import { useEffect, useState } from 'react';
import {Navigate, Outlet, useLocation, useNavigate} from 'react-router-dom';

function PrivateRoute() {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        async function checkAuth() {
            // Check for the presence of a valid token
            const token = await localStorage.getItem('token');
            if (!token) {
                // If no token is present, redirect to the login page
                navigate('/', { replace: true });
            } else {
                // Otherwise, set the authenticated state to true
                console.log("authenticated");
                setIsAuthenticated(true);
            }
            setLoading(false);
        }
        checkAuth().then(r => console.log("checked"));
    }, [location]);

    if (loading) {
        console.log("loading");
        return null;
    }

    return isAuthenticated ? <Outlet /> : <Navigate to='/' />;
}

export default PrivateRoute;