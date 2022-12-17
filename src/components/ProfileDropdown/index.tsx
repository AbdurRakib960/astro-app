import React, { useState } from "react";
import {
    DropdownArrow,
    PenIcon,
    DollarIcon,
    SettingsIcon,
    BillingIcon,
    OrderIcon,
    FeedbackIcon,
    LogoutIcon,
} from "../CustomSvg";
import classNames from "classnames";
import { Link } from "react-router-dom";

const dropDownData = [
    {
        title: "Become an Artist",
        url: "",
        Icon: PenIcon,
    },
    {
        title: "Earnings",
        url: "",
        Icon: DollarIcon,
    },
    {
        title: "Account settings",
        url: "",
        Icon: SettingsIcon,
    },
    {
        title: "Billing & Payments",
        url: "",
        Icon: BillingIcon,
    },
    {
        title: "My Orders",
        url: "",
        Icon: OrderIcon,
    },
    {
        title: "Help & feedback",
        url: "/",
        Icon: FeedbackIcon,
    },
];

const ProfileDropdown = (): JSX.Element => {
    const [arrowClick, setArrowClick] = useState<Boolean>(false);
    return (
        <div className="relative">
            <div className="flex items-center gap-[28px]">
                <div className="w-[56px] h-[56px] rounded-full bg-gradient-to-tr from-[#DD2590] to-[#7A5AF8] flex items-center justify-center">
                    <img
                        src="/images/demoprf.svg"
                        alt=""
                        className="w-[52px] h-[52px] rounded-full"
                    />
                </div>
                <div
                    onClick={() => setArrowClick(!arrowClick)}
                    className={classNames(
                        "cursor-pointer",
                        arrowClick ? "rotate-180" : ""
                    )}
                >
                    <DropdownArrow stroke="white" />
                </div>
            </div>
            {arrowClick && (
                <div className="text-white w-[300px] h-auto bg-[#070328]  py-[19px] absolute top-[65px] right-0 z-50">
                    <div className="w-[200px] h-[36px] rounded-[32px] bg-gradient-to-tr from-[#DD2590] to-[#7A5AF8] flex items-center mx-auto justify-center ">
                        <div className="w-[196px] h-[34px] rounded-[32px] bg-[#070328] text-[14px] leading-[20px] font-medium flex justify-center items-center cursor-pointer">
                            <p className="text-transparent bg-gradient-to-r from-[#DD2590] to-[#7A5AF8] bg-clip-text">
                                {" "}
                                View Profile
                            </p>
                        </div>
                    </div>

                    {/* drop down link  */}
                    <div className="flex flex-col gap-[24px] px-[20px] mt-[24px] ">
                        {dropDownData.map(({ title, url, Icon }, index) => (
                            <div key={index}>
                                <Link
                                    to={url}
                                    className="flex gap-[8px] items-center cursor-pointer"
                                >
                                    <div
                                        style={{
                                            background:
                                                "rgba(255, 255, 255, 0.05)",
                                        }}
                                        className="w-[40px] h-[40px] rounde-[8px] flex justify-center items-center rounded-[8px]"
                                    >
                                        <Icon
                                            stroke="url(#paint1_linear_1024_5101)"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <p className="text-[16px] font-normal leading-[24px]">
                                        {title}
                                    </p>
                                </Link>
                            </div>
                        ))}
                        {/* for logout onclick handler  */}
                        <div className="flex gap-[8px] items-center cursor-pointer">
                            <div
                                onClick={() => console.log("handle click")}
                                style={{
                                    background: "rgba(255, 255, 255, 0.05)",
                                }}
                                className="w-[40px] h-[40px] rounde-[8px] flex justify-center items-center rounded-[8px]"
                            >
                                <LogoutIcon
                                    stroke="url(#paint1_linear_1024_5101)"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <p className="text-[16px] font-normal leading-[24px]">
                                Logout
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
