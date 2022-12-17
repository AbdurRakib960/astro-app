import React, { useState, useEffect } from "react";
import LoaderSign from "./../Loader/index";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import classNames from "classnames";

type PaginationProps = {
    PAGE_LIMIT: number;
    apiPathUrl: string;
    urlQuery?: string;
    children: any;
    className?: string;
};

const InfiniteScrollComponent = (props: PaginationProps) => {
    const PAGE_LIMIT = props.PAGE_LIMIT;
    const apiPath = props.apiPathUrl;
    const [data, setData] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    // const { comp: Comp } = props;

    const getProductList = () => {
        if (data.length < 40) {
            let pageNo = Math.ceil(data.length / PAGE_LIMIT);

            // const queryPara = "?page=" + pageNo + "&limit=" + PAGE_LIMIT;
            const queryPara = props.urlQuery
                ? props.urlQuery
                : "?_start=" + pageNo + "&_limit=" + PAGE_LIMIT;

            const finalUrl = apiPath + queryPara;

            axios
                .get(finalUrl)
                .then((res: any) => {
                    const apiRes = res?.data;
                    const mergeData: any = [...data, ...apiRes];

                    setTimeout(() => {
                        setData(mergeData);
                    }, 1000);
                })
                .catch((err) => {
                    console.log("error while loadding", err);
                });
        } else {
            setHasMore(false);
        }
    };

    useEffect(() => {
        getProductList();
    }, []);
    const fetchMoreData = () => {
        getProductList();
    };

    return (
        <div>
            <InfiniteScroll
                dataLength={data.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<LoaderSign />}
                endMessage={
                    <p className="py-4 text-center text-white">
                        <b> You have seen it all</b>
                    </p>
                }
            >
                <div className="flex flex-wrap gap-[24px]">
                    {data &&
                        data.length &&
                        data.map((key: any, index) => {
                            return (
                                <div className="" key={index}>
                                    {React.cloneElement(props.children, {
                                        data: key,
                                    })}
                                </div>
                            );
                        })}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default InfiniteScrollComponent;

// to call the component

// <InfiniteScrollComponent
// PAGE_LIMIT={9}
// apiPathUrl={apiUrl}
// children={<TestFile />}
// />
