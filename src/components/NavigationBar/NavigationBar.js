import React from "react";
import {NavLink} from "react-router-dom";
import './NavigationBar.css';

export const NavigationBar = () =>
    <div className="navigationBar">
            <NavLink className="navLink" activeClassName="activeNavLink" exact to="/"><img src={require("./homepage.png")} alt="home" width="20" height="20"/></NavLink>
            <NavLink className="navLink" activeClassName="activeNavLink" exact to="/haberler">Haberler</NavLink>
            <NavLink className="navLink" activeClassName="activeNavLink" exact to="/duyurular">Duyurular</NavLink>
            <NavLink className="navLink" activeClassName="activeNavLink" exact to="/guncel">Güncel</NavLink>
            <NavLink className="navLink" activeClassName="activeNavLink" exact to="/hakkında">Hakkında</NavLink>
    </div>;