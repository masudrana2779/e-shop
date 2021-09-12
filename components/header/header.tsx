import React from "react";
import Link from 'next/link';
import {Dropdown} from "react-bootstrap";
import LoginModal from "../loginModal/loginModal";

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="headerContent d-flex align-items-center">
                                <div className="logo">
                                    <Link href={'/'}>
                                        <a>
                                            <img src="/img/logo.svg" alt="logo"/>
                                        </a>
                                    </Link>
                                </div>
                                <div className="categoryDropdown">
                                    <Dropdown className={'dropdowns'}>
                                        <Dropdown.Toggle className={'dropdownBtn'} id="dropdown-basic">
                                            Dropdown Button
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="searchBox">
                                    <div className="searchInner">
                                        <button className="btn searchBtn"><i className="fa fa-search"></i></button>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="rightSiteMenu">
                                    <ul className="menu">
                                        <li>
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>About Us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            {/*<button className="btn btn-success">Join</button>*/}
                                            <LoginModal />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;