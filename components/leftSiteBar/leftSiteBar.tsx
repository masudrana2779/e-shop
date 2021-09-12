import React from "react";
import {Accordion} from "react-bootstrap";
import Link from 'next/link';

const LeftSiteBar = () => {
    return (
        <div className='leftSiteBarWrap'>
            <div className="leftSideBarSticky">
                <div className="leftSideBarInner">
                    <div className="leftSideBarContent">
                        <div className="leftSideBar">
                            <div className="sidebarMenu">
                                <Accordion>
                                    {[1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 10].map((item, i) =>

                                        <Accordion.Item eventKey={`${i}`} key={i}>
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
                                    )}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LeftSiteBar;