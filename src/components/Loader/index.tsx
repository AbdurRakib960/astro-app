import React from "react";

const LoaderSign = () => {
    return (
        <div className="mx-auto flex items-center justify-center w-[307px] h-[56px] bg-[#131033] mt-[48px] mb-[40px] rounded-[32px]">
            <button className="text-white ">
                <span className="flex gap-[8px]">
                    <img
                        src="/Icon/logo.svg"
                        alt=""
                        className="w-[27px] h-[24px]"
                    />{" "}
                    Loading...
                </span>
            </button>
        </div>
    );
};

export default LoaderSign;
