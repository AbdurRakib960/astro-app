import React, { useState } from "react";
import CommunityIcon from "../CommunityIcon";
import { InstagramIcon, MetaIcon, TiktokIcon, TwitterIcon } from "../CustomSvg";
const socialIcon = [
    {
        id: 0,
        url: "",
        Icon: MetaIcon,
    },
    {
        id: 1,
        url: "",
        Icon: TiktokIcon,
    },
    {
        id: 2,
        url: "",
        Icon: InstagramIcon,
    },
    {
        id: 3,
        url: "",
        Icon: TwitterIcon,
    },
];
const GetStarted = (): JSX.Element => {
    const [iconColor, setIconColor] = useState(false);
    const onOver = (e: any) => {
        if (e) setIconColor(true);
    };
    const onLeave = (e: any) => {
        if (e) setIconColor(false);
    };
    return (
        <div className="mt-[45px] md:mt-[62px] 2xl:mt-[83px] px-[16px] ">
            <div className="w-[100%] xs:w-[320px] h-auto md:w-[668px] 2xl:w-[1182px] rounded-[16px] bg-[#110D31] mx-auto">
                <div className="px-[32px] py-[32px] md:px-[40px] md:py-[40px] 2xl:py-[60px] 2xl:px-[220px] text-center">
                    <h2 className="text-[20px] leading-[30px] font-bold	md:text-[30px] md:leading-[38px] 2xl:text-[36px] 2xl:leading-[48px]">
                        What are you waiting for? 2023 is the year for your game
                        to{" "}
                        <span className="text-transparent bg-gradient-to-r from-[#DD2590] to-[#7A5AF8] bg-clip-text">
                            level up!
                        </span>
                    </h2>
                    <button className="w-[230px] h-[44px] md:h-[48px] 2xl:h-[56px] text-[16px]  leading-[24px] font-medium bg-gradient-to-tr from-[#DD2590] to-[#7A5AF8] rounded-[32px] mt-[24px] md:mt-[30px] 2xl:mt-[46px]">
                        Get Started
                    </button>
                </div>
            </div>
            <img
                src="/images/astro-logo-white.svg"
                alt=""
                className="w-[130px] h-[24px] mt-[32px] md:w-[150px] md:h-[28px] md:mt-[44px] 2xl:mt-[58px] mx-auto 2xl:w-[250px] 2xl:h-[48px]"
            />
            <div className="mt-[24px] md:mt-[20px] 2xl:mt-[56px]  mx-auto text-center">
                <h3 className="mb-[16px] md:mb-[8px] 2xl:mb-[16px] text-[14px] font-semibold leading-[20px] md:text-[16px] md:leading-[28px] 2xl:text-[20px] 2xl:leading-[30px]">
                    Join our community:
                </h3>
                <div className="flex gap-[16px] justify-center">
                    <CommunityIcon />
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
