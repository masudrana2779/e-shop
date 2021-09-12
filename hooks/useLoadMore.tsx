import React, {useState, useCallback} from "react";


export function useLoadMore(count: number) {
    const [visible, setVisible] = useState<number>(count);

    const loadMoreItems = useCallback(async () => {
        await setVisible((preValue) => preValue + 4)
    }, [visible]);

    return {
        visible, loadMoreItems
    }
}

type LoadMoreButtonProps = {
    loadMoreItems: any,
    isShow: boolean
}


export function LoadMoreButton({loadMoreItems, isShow}: LoadMoreButtonProps) {

    return (
        <>
            {isShow ?
                <div className="row">
                    <div className="col-12">
                        <br/>
                        <br/>
                        <div className="loadMoreVideos text-center">
                            <button className="btn loadMOre" onClick={loadMoreItems}>Load More</button>
                        </div>
                    </div>
                </div>
                :
                <><br/><br/><br/><br/></>
            }
        </>
    )
}
