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
                    <Link ="./starships">Starships<Link/>
                </li>
            </ul>
        </div>
    );
};

export default Header;