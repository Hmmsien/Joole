import {useState} from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheet/LoginForm.css"
import {auth} from "../redux/action";
import {connect} from "react-redux";
import Logo from "./Logo"
const LoginForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    localStorage.clear();

    const handleSubmit = (event) => {
        // cancels the default action of event, handle the form submission
        event.preventDefault();
        // dispatch the 'auth' action to the store
        props.auth(username, password).then(() => {
            navigate("/search");
        })
    }

    return (
        <div>
            <div className="header">
                <div className="header-right">
                    <label className="signUp" onClick={() => navigate('/signup')}>Sign Up</label>
                </div>
            </div>
            
            <div className="logoLogin">
                <Logo />
            </div>

            <div>
                <form className="loginField" onSubmit={(event) => handleSubmit(event)}>
                    <input placeholder="Username" type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                    <br />
                    <br />
                    <input placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    <br />
                    <button type="submit">Log in</button>
                </form>
            </div>
        </div>
    );
}

//map action creators to the props
//passing the 'auth' action creator to component as a prop
const mapDispatchToProps = {
    auth
};

//connect react component to the redux store
export default connect(null, mapDispatchToProps)(LoginForm);