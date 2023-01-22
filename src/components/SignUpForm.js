import {useState} from "react";
import "../stylesheet/SignUpForm.css"
import {register} from "../redux/action";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import Logo from "./Logo";

const SignUpForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    //the 'register' action is dispatched with the form data
    function handleSubmit(event) {
        event.preventDefault();
        props.register(username,password,email).then(() => {
            navigate('/');
        });
    }

    return (
        <div>
            <label id="back" onClick={(e) => navigate('/')}>Back</label>
            <div className="logo">
                <Logo />
            </div>

            <div className="sign-up">
                <div className="signUpform">
                    <br />

                    {<form className="sign-up-form" onSubmit={handleSubmit}>
                        <label>Enter the username:</label>
                        <input placeholder="Username" type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                        <br />
                        <label>Enter the password:</label>
                        <input placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                        <br />
                        <label>Comfirm password:</label>
                        <input placeholder="Password" type="password" name="IsSamwPassword" />
                        <br />
                        <label>Enter the email:</label>
                        <input placeholder="Eemail" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        <br />
                        <button id="submit">Submit</button>
                    </form>}
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = {
    register
};

export default connect(null, mapDispatchToProps)(SignUpForm);