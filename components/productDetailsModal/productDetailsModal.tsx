import React, {useState} from "react";
import Carousel from "react-multi-carousel";

import {Modal} from "react-bootstrap";

type ProductDetailsModalProps = {
    show?: boolean, popup?: any
}


const images = [
    "img/product/VeggiePlatter_ztcg0m.jpg",
    "img/product/VeggiePlatter_ztcg0m.jpg",
    "img/product/RedCherries_zylnoo.jpg",
    "img/product/VeggiePlatter_ztcg0m.jpg"
];


const ProductDetailsModal = ({show, popup}: ProductDetailsModalProps) => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 1,
            slidesToSlide: 1
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1
        }
    };

    // @ts-ignore
    const CustomDot = ({onClick, ...rest}) => {
        const {
            onMove,
            index,
            active,
            carouselState: {currentSlide, deviceType}
        } = rest;
        const carouselItems = images.map((l, n) => (
            <img src={l} key={n} alt={l} width="50px" height="50px"/>
        ));

        // onMove means if dragging or swiping in progress.
        // active is provided by this lib for checking if the item is active or not.
        return (
            <button
                className={active ? "active" : "inactive"}
                onClick={() => onClick()}
            >
                {React.Children.toArray(carouselItems)[index]}
            </button>
        );
    };


    return (
        <>
            <Modal show={show} onHide={popup} animation={true} centered backdropClassName={'modalBg'}
                   dialogClassName={'loginModal productDetailsModal'}>
                <div className="btnClose">
                    <button className='btn-close' onClick={popup}></button>
                </div>

                <div className="productDetailsWrap">
                    <div className="productDetailsInner">
                        <div className="productDetailsContent">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-12">
                                    <div className="productDetailsImgWrap">
                                        <div className="productDetailsSliderContent">
                                            <Carousel responsive={responsive} showDots
                                                      customDot={<CustomDot onClick={undefined}/>}
                                                      className={'carouselImgItem'} arrows={false} draggable={false}>

                                                {images.map((item, i) =>
                                                    <div className="sliderImg" key={i}>
                                                        <img src={item} alt="img"
                                                             className={'img-fluid'}/>
                                                    </div>
                                                )}

                                            </Carousel>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-12">
                                    <div className="productDetailsInfoWrap">
                                        <div className="productDetailsInfoInner">
                                            <div className="productDetailsInfo">
                                                <div className="productTitleWrap">
                                                    <h3 className="productTitle">Cherry</h3>
                                                </div>
                                                <span className="productWeight">12 pc(s)</span>
                                                <p className="productDescription">Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit. Aliquam deleniti harum, nostrum
                                                    numquam quam sequi totam voluptatum. Cum ipsum, vel.</p>
                                                <div className="productTagsWrap">
                                                    <div className="productTags">
                                                        <span className="productTag">Fruits &amp; Vegetables</span>
                                                        <span className="productTag">vegetables</span>
                                                    </div>
                                                </div>
                                                <div className="productCartWrap">
                                                    <div className="productPriceWrap">
                                                        <div className="productPrice">
                                                            $1.5
                                                        </div>
                                                    </div>
                                                    <div className="productCartBtnWrap">
                                                        <button
                                                            className="btn btn-sm btn-success btnBorder cartBtn d-flex align-items-center">
                                                                <span className="cartIcon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                         width="14.4px" height="12px"
                                                                         viewBox="0 0 14.4 12" fill="currentColor"
                                                                         className="box__Box-sc-5533u7-0 vfnVS">
                                                                        <g data-name="Group 120"
                                                                           transform="translate(-288 -413.89)">
                                                                            <path data-name="Path 154"
                                                                                  fill="currentColor"
                                                                                  d="M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0"></path>
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                            <span className="cartText">Cart</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
export default ProductDetailsModal;