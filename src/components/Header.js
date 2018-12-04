import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => (
    <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}> Expensify Dashboard </NavLink>
    <NavLink to="/create" activeClassName="is-active">Create expense dashboard </NavLink>
    <NavLink to="/help" activeClassName="is-active">This is Help Page</NavLink>
    </header>
);
export default Header;