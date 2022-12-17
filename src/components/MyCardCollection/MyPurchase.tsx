import React from "react";
import GlobalCard from "../GlobalCard";
import InfiniteScrollComponent from "./../InfiniteScroll/index";

const MyPurchase = (): JSX.Element => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    return (
        <div className="max-w-[894px]">
            <InfiniteScrollComponent
                PAGE_LIMIT={9}
                apiPathUrl={apiUrl}
                children={
                    <GlobalCard
                        imageUrl="http://projects.websetters.in/digg-seos/digg/wp-content/themes/twentytwenty-child-theme/img/demo-prof.jpg"
                        title="Test card"
                        userProfileUrl="http://projects.websetters.in/digg-seos/digg/wp-content/themes/twentytwenty-child-theme/img/demo-prof.jpg"
                        username="user-123"
                        numHearts={999}
                        numRemixes={999}
                        numViews={999}
                        overlayCard={
                            true ? undefined : (
                                <div className="flex flex-col items-center justify-start w-full h-full mt-[64px] gap-[16px]">
                                    <div className="flex w-full place-content-center h-1/2">
                                        <img
                                            src="/images/astro-logo-white.svg"
                                            alt=""
                                            className="w-1/3 justify-self-center animate-logo-bouncing"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center justify-center text-center text-[15px] w-[200px] h-[48px] py-2 px-6 text-white text-xl font-bold rounded-[53px] bg-gradient-to-r from-[#DD2590] to-[#7A5AF8]">
                                        <p>Ready in 100 mins</p>
                                    </div>
                                </div>
                            )
                        }
                    />
                }
            />
        </div>
    );
};

export default MyPurchase;
