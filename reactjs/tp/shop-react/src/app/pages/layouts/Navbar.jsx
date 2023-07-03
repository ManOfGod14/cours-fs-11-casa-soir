import React, { Component } from "react";

export function Navbar() {
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a href="#" className="navbar-brand">
                    SHOP BOOTSTRAP
                </a>

                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar"
                    aria-controls="navbar"
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item">
                            <a href="#" className="nav-link active">
                                HOME
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                ABOUT
                            </a>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle"
                                href="#" 
                                id="navbarDropdown"
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                SHOP
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a href="" className="dropdown-item active">
                                        All products
                                    </a>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <a href="" className="dropdown-item">
                                        Popular items
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="dropdown-item">
                                        News arrivals
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <form className="d-flex">
                        <button className="btn btn-outline-primary" type="button">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1">0</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    </>
    
}

// export class NavbarClass1 extends React.Component {
    
// }

// class NavbarClass2 extends Component {
    
// }