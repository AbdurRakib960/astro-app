import React from "react";
import GlobalCard from "../GlobalCard";

const DemoPage = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-10 bg-black">
            <h1 className="text-6xl text-white">Hello!</h1>
            <GlobalCard
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8C0eZ51cUVq9NO5x1H7Avc0eOMZrACwC_gIYztkQCcjMX_Ma5qf1fNWkSAoyU00YASkQ&usqp=CAU"
                title="Test card"
                userProfileUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8C0eZ51cUVq9NO5x1H7Avc0eOMZrACwC_gIYztkQCcjMX_Ma5qf1fNWkSAoyU00YASkQ&usqp=CAU"
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
                hoverCard={
                    false ? undefined : (
                        <div className="flex flex-col items-center justify-center w-full h-full gap-[32px]">
                            <button className="bg-[#00000064] text-[15px] w-[190px] h-[48px] py-2 px-6 border-[#DD2590] border-2 bg-transparent text-white text-xl font-bold rounded-[53px] hover:bg-gradient-to-r from-[#DD2590] to-[#7A5AF8]">
                                Use this mod
                            </button>
                            <button className="bg-[#00000064] text-[15px] w-[190px] h-[48px] py-2 px-6 border-[#DD2590] border-2 bg-transparent text-white text-xl font-bold rounded-[53px] hover:bg-gradient-to-r from-[#DD2590] to-[#7A5AF8]">
                                View mod page
                            </button>
                        </div>
                    )
                }
            />
        </div>
    );
};

export default DemoPage;
