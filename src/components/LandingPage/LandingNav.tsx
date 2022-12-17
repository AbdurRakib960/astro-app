import React, { useState } from "react";
import MoboDrawer from "../MoboDrawer";

const LandingNav = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };
    return (
        <>
            <div className="py-[20px]">
                <div className="2xl:px-[120px] md:px-[50px] px-[16px]  w-full flex items-center justify-between">
                    <div>
                        <img
                            src="/images/astro-logo-white.svg"
                            alt="logo"
                            className="2xl:w-[250px] 2xl:h-[48px] w-[150px] h-[28px]"
                        />{" "}
                    </div>
                    <img
                        onClick={toggleDrawer}
                        src="/images/hamburg.svg"
                        alt=""
                        className="md:hidden w-[18px] h-[16px] cursor-pointer"
                    />
                    <button className="hidden md:block w-[180px] md:h-[48px] h-[56px] rounded-[32px] bg-gradient-to-tr from-[#DD2590] to-[#7A5AF8] font-medium text-[16px] leading-[24px]">
                        Create an Account
                    </button>
                </div>
            </div>
            <MoboDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
        </>
    );
};

export default LandingNav;
