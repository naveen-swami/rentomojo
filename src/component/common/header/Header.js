import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { useState } from 'react/cjs/react.development';

function Header() {
    const history = useHistory();
    const [pathName, setPathName] = useState("/");

    const redirect = (path) => {
        setPathName(path);
        history.push(path);
    } 

    return (
        <div>
            <nav className="headerController">
                <p className={`link ${pathName === "/" ? "selected" : ""}`} onClick={() =>redirect("/")}>Movies</p>
                <p className={`link ${pathName === "/series" ? "selected" : ""}`} onClick={() => redirect("/series")}>Series</p>
                <p className={`link ${pathName === "/anime" ? "selected" : ""}`} onClick={() => redirect("/anime")}>Anime</p>
            </nav>
        </div>
    )
}

export default Header;