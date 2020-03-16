import React from 'react';

import './header.css';

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <a href="/">
                    Star DB
                </a>
            </h3>
            <ul className="d-flex">
                <li>
                    <Link to="./people">People<Link/>
                </li>
                <li>
                    <Link href="./planets">Planets<Link/>
                </li>
                <li>
                    <a href="./starships">Starships</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;