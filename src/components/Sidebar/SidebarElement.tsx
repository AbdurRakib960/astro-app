import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import {
    UserIcon,
    DollarIcon,
    SettingsIcon,
    BillingIcon,
    OrderIcon,
    FeedbackIcon,
    LogoutIcon,
} from "../CustomSvg";

const sideNavItem = [
    {
        title: "Profile",
        path: "/profile",
        Icon: UserIcon,
    },
    {
        title: "Earnings",
        path: "/earnings",
        Icon: DollarIcon,
    },
    {
        title: "Account settings",
        path: "/account-settings",
        Icon: SettingsIcon,
    },
    {
        title: "Billing & Payments",
        path: "/billing",
        Icon: BillingIcon,
    },
    {
        title: "My Orders",
        path: "/orders",
        Icon: OrderIcon,
    },
    {
        title: "Help & feedback",
        path: "/feedback",
        Icon: FeedbackIcon,
    },
    {
        title: "Log out",
        path: "",
        Icon: LogoutIcon,
    },
];

const SidebarElement = (): JSX.Element => {
    const location: any = useLocation();
    console.log("pathname", location.pathname);

    return (
        <div className="text-white pl-[30px] pr-[10px]">
            {/* @user info section */}
            <div className="flex gap-[12px] items-center">
                <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-tr from-[#DD2590] to-[#7A5AF8] flex items-center justify-center">
                    <img
                        src="/images/demoprf.svg"
                        alt=""
                        className="w-[44px] h-[44px] rounded-full"
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-white text-[16px] font-semibold leading-[24px]">
                        Jenny Sun
                    </p>
                    <p className="text-[#667085] text-[16px] leading-[24px] font-normal">
                        @Jenny_art
                    </p>
                </div>
            </div>
            {/* @nav list  */}
            <div className="mt-[20px] flex flex-col  gap-[8px] pb-[160px]">
                {sideNavItem.map((link, index) => (
                    <ul
                        key={index}
                        className={classNames(
                            location.pathname === link.path
                                ? "bg-gradient-to-tr from-[#DD2590] to-[#7A5AF8] pb-[2px] rounded-b-[10px] rounded-t-[30px] "
                                : ""
                        )}
                    >
                        <Link to={link.path}>
                            <li
                                className={classNames(
                                    location.pathname === link.path
                                        ? "py-[19px] px-[22px] bg-[#110D31] rounded-[10px]"
                                        : "py-[24px]  px-[22px]",
                                    "flex items-center gap-[20px] text-[16px] font-normal leading-[24px]"
                                )}
                            >
                                <span>
                                    <link.Icon
                                        width={22}
                                        height={22}
                                        stroke={
                                            location.pathname === link.path
                                                ? "url(#paint0_linear_431_24087)"
                                                : "white"
                                        }
                                    />
                                </span>{" "}
                                <p
                                    className={classNames(
                                        location.pathname === link.path
                                            ? "text-transparent bg-gradient-to-r from-[#DD2590] to-[#7A5AF8] bg-clip-text"
                                            : "text-[#E4E7EC]"
                                    )}
                                >
                                    {link.title}
                                </p>
                            </li>
                        </Link>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default SidebarElement;
