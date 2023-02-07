import {ConnectWallet} from "@thirdweb-dev/react";
import React from "react";
import "./Navbar.css"
const Navbar = () => {
    return (
        <header className="poo">
            <div className="logo">
                <a href="#">
                    <h2>PiggyBank</h2>
                </a>
            </div>
            <nav className="connect">
                <ConnectWallet />
            </nav>
        </header>
    );
};

export default Navbar;
