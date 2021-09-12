import React from "react";
import {LoadMoreButton, useLoadMore} from "../../hooks/useLoadMore";

const ProductWrap = () => {

    const {visible, loadMoreItems} = useLoadMore(6);
    return (
        <div className='productWrap'>
            <div className="productInner">
                <div className="productContent">
                    {[1, 1, 1, 1, 1, 11, 1, 1,1, 1, 1, 1, 1, 11, 1, 1 , 1].slice(0, visible).map((item, i) =>
                        <div className="productSingleItem" key={i}>
                            <div className="productSingleItemInner">
                                <div className="productImgContent">
                                    <div className="productImgInner">
                                        <div className="productImg">
                                            <img src="/img/product/RedCherries_zylnoo.jpg" alt="productImg"
                                                 className='img-fluid'/>
                                            <span className="offers">10%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="productInfoContent">
                                    <div className="productInfoContentInner">
                                        <h3 className="productTitle">Cherry</h3>
                                        <span className="productWeight">12 pc(s)</span>
                                        <div className="productMeta d-flex justify-content-between">
                                            <div className="productPriceWrapper">
                                                <span className="productPrice">$1.5 <del>$1.5</del> </span>
                                            </div>
                                            <button
                                                className="btn btn-sm btn-success btnBorder cartBtn d-flex align-items-center">
                                            <span className="cartIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14.4px" height="12px"
                                                     viewBox="0 0 14.4 12" fill="currentColor"
                                                     className="box__Box-sc-5533u7-0 vfnVS">
                                                    <g data-name="Group 120" transform="translate(-288 -413.89)">
                                                        <path data-name="Path 154" fill="currentColor"
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
                    )}
                </div>
                <div className="jkj text-center p-4">
                    <LoadMoreButton loadMoreItems={loadMoreItems} isShow={[1, 1, 1, 1, 1, 11, 1, 1,1, 1, 1, 1, 1, 11, 1, 1 , 1].length > visible}/>
                </div>
            </div>
        </div>
    )
}
export default ProductWrap;