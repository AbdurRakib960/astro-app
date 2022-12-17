import React from "react";

const Footer = () => {
    const dynamicYear = new Date().getFullYear();
    return (
        <div className="mt-[16px] md:mt-[24px] 2xl:mt-[30px] ">
            <div
                style={{ background: "rgba(255, 255, 255, 0.1" }}
                className="w-[100%] h-[2px]"
            ></div>
            <div className="md:py-[24px] py-[16px] flex justify-center md:justify-between 2xl:px-[129px] md:px-[50px]">
                <p className="2xl:font-normal 2xl:text-[16px] 2xl:leading-[24px] md:text-[14px] md:leading-[20px] text-[12px] ">
                    ©Copyright {dynamicYear}, All Rights Reserved by
                    <span className="text-transparent bg-gradient-to-r from-[#DD2590] to-[#7A5AF8] bg-clip-text pl-2">
                        Astroblox.oi
                    </span>
                </p>
                <img
                    src="/images/term-logo.svg"
                    alt="logo"
                    className="2xl:w-[210px] h-[30px] md:w-[168px] hidden md:block"
                />
            </div>
        </div>
    );
};

export default Footer;
