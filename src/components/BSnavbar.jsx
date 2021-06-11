import React from "react";
import {Link} from "react-router-dom";

const BSnavbar = () => {
    return (
        <div>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <Link to="/home" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab"
                          aria-controls="pills-home" aria-selected="true">BSHome</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to="/" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab"
                          aria-controls="pills-home" aria-selected="true">Posts</Link>
                </li>
            </ul>
        </div>
    );
};

export default BSnavbar;
