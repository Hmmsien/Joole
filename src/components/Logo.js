import React from "react";
import '../stylesheet/Logo.css'
function Logo() {
    return (
        <div className="logo">
            <div className="logo__img-wrap">
                <img src={require('../images/jooleicon.png')} alt="joole" image={"true"} />
            </div>
            <div className="logo__text-wrap">
                <h3>Building Product Selection Platform</h3>
            </div>
        </div>
    )
}

export default Logo;