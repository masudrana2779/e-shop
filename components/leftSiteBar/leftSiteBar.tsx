import React from "react";
import {Accordion} from "react-bootstrap";
import Link from 'next/link';

const LeftSiteBar = () => {
    return (
        <div className='leftSiteBarWrap'>
            <div className="leftSideBarInner">
                <div className="leftSideBarContent">
                    <div className="leftSideBar">
                        <div className="sidebarMenu">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Fruits & Vegetables</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="sidebarMenuList">
                                            <li>
                                                <Link href={'/'}>
                                                    <a>Fruits</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>
                                                    <a>Vegetables</a>
                                                </Link>
                                            </li>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Meat & Fish</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="sidebarMenuList">
                                            <li>
                                                <Link href={'/'}>
                                                    <a>Meat</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>
                                                    <a>Fish</a>
                                                </Link>
                                            </li>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Fruits & Vegetables</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="sidebarMenuList">
                                            <li>
                                                <Link href={'/'}>
                                                    <a>Fruits</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>
                                                    <a>Vegetables</a>
                                                </Link>
                                            </li>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Meat & Fish</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="sidebarMenuList">
                                            <li>
                                                <Link href={'/'}>
                                                    <a>Meat</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>
                                                    <a>Fish</a>
                                                </Link>
                                            </li>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LeftSiteBar;