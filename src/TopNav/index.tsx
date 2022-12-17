import React from "react";
import ProfileDropdown from "../components/ProfileDropdown";

const TopNav = (): JSX.Element  => {
    return (
        <div className=" bg-[#070328] text-white sticky top-0 z-50 ">
            <div className="px-[120px] flex w-[100%] h-[96px]  justify-between items-center">
                <img
                    src="/images/astro-logo-white.svg"
                    alt=""
                    className="w-[250px] h-[48px]"
                />
                <div className="flex  gap-[24px]">
                    <button className="uppercase w-[160px] h-[56px] bg-gradient-to-tr from-[#DD2590] to-[#7A5AF8] rounded-[32px] text-[16px] font-medium leading-[24px]">
                        create
                    </button>

                    {/* search box  */}
                    <div
                        style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}
                        className="w-[430px] h-[56px] rounded-[31px]  bg-[#110d31] flex items-center"
                    >
                        <div className="px-[25px] flex items-center gap-[10px]">
                            <img src="/images/search-icon.svg" alt="search" />
                            <input
                                type="text"
                                name=""
                                className="w-[350px] bg-transparent text-[#667085] text-[16px] font-normal leading-[24px] focus:outline-none"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    <div className="pl-[16px]">
                        <ProfileDropdown />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNav;
