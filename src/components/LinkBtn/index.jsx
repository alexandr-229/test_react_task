import React from 'react';
import { Link, useMatch } from 'react-router-dom';

export const LinkBtn = ({ to, btn }) => {
    const isActive = Boolean(useMatch(to));

    return (
        <Link to={to}>
            <button className={isActive ? 'activeLink' : 'link'}>{btn}</button>
        </Link>
    );
};
