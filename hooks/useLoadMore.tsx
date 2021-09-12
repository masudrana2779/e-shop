import React, {useState, useCallback} from "react";

type Data = {
    name: string
}

export function useLoadMore(count: number) {
    const [visible, setVisible] = useState(count);

    const loadMoreItems = useCallback(async () => {
        await setVisible((preValue) => preValue + 4)
    }, [visible]);

    return {
        visible, loadMoreItems
    }
}

// @ts-ignore
export function LoadMoreButton({loadMoreItems, isShow}) {

    return (
        <>
            {isShow ?
                <div className="row">
                    <div className="col-12">
                        <br/>
                        <br/>
                        <div className="loadMoreVideos text-center">
                            <button className="btn btn-success loadMOre" onClick={loadMoreItems}>Load More</button>
                        </div>
                    </div>
                </div>
                :
                <><br/><br/><br/><br/></>
            }
        </>
    )
}
