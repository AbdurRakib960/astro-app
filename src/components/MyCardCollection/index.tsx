import React, { useState } from "react";
import classNames from "classnames";
import MyPurchase from "./MyPurchase";
import MyArt from "./MyArt";
import Favourite from "./Favourite";

const TabData = ["My Purchase", "My Art", "Favourite"];
const MyCardCollection = ():JSX.Element => {
    const [tabState, setTabState] = useState(TabData[0]);
    console.log(tabState, "tabstate");
    return (
        <div className="mt-[40px]">
            <div className="flex gap-[24px] items-center">
                {TabData.map((tab, index) => (
                    <div
                        key={index}
                        className={classNames(
                            tab === tabState
                                ? "bg-gradient-to-tr from-[#DD2590] to-[#7A5AF8] p-[1px] rounded-[10px]"
                                : ""
                        )}
                    >
                        <button
                            onClick={() => setTabState(tab)}
                            className="bg-[#110d31] px-[20px] py-[16px] rounded-[10px] text-[#ffffff] font-medium text-[16px] leading-[24px]"
                        >
                            {tab}
                        </button>
                    </div>
                ))}
            </div>
            <div className="mt-[24px]">
                {tabState === "My Purchase" && <MyPurchase />}
                {tabState === "My Art" && <MyArt />}
                {tabState === "Favourite" && <Favourite />}
            </div>
        </div>
    );
};

export default MyCardCollection;
