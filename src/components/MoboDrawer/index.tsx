import React from "react";
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";
import CommunityIcon from "../CommunityIcon";

const listItem = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Step 1",
        url: "#step1",
    },
    {
        title: "Step 2",
        url: "#step2",
    },
    {
        title: "Step 3",
        url: "#step3",
    },
];

const MoboDrawer = ({ toggleDrawer, isOpen }: any) => {
    return (
        <>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="left"
                className="!w-[100%] "
                style={{ backgroundColor: "#202020" }}
            >
                <div className="w-[100%]  h-screen  px-[16px]  drawer container1 mx-auto text-white bg-[#070328]">
                    <div className="container2 ">
                        <div className="flex justify-between px-[16px] py-[16px]">
                            <img
                                src="/images/astro-logo-white.svg"
                                alt="logo"
                                className="w-[150px] h-[28px]"
                            />
                            <img
                                onClick={toggleDrawer}
                                src="/images/x-icon.svg"
                                alt=""
                                className="w-[24px] h-[24px] cursor-pointer"
                            />
                        </div>
                        <div className="mt-[32px] flex flex-col gap-[24px]">
                            {listItem.map((list, index) => (
                                <div
                                    key={index}
                                    className="hover:bg-[#110D31] py-[8px] rounded-[12px]"
                                >
                                    <a
                                        onClick={toggleDrawer}
                                        href={list.url}
                                        className="px-[24px] font-medium text-[16px] leading-[24px]"
                                    >
                                        {list.title}
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div className="mt-20">
                            <button className="w-[100%] h-[44px] text-[16px]  leading-[24px] font-medium bg-gradient-to-tr from-[#DD2590] to-[#7A5AF8] rounded-[32px] ">
                                Get Started
                            </button>
                        </div>
                        <div className="mt-[40px]">
                            <h2 className="text-center font-semibold text-[18px] leading-[28px]">
                                Join our community:
                            </h2>
                            <div className="flex gap-[16px] pb-4 justify-center mt-[16px]">
                                <CommunityIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default MoboDrawer;
