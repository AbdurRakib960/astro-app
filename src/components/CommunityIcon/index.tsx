import classNames from "classnames";
import React, { useState } from "react";
import { InstagramIcon, MetaIcon, TiktokIcon, TwitterIcon } from "../CustomSvg";

const socialIcon = [
    {
        id: 1,
        url: "",
        Icon: MetaIcon,
    },
    {
        id: 2,
        url: "",
        Icon: TiktokIcon,
    },
    {
        id: 3,
        url: "",
        Icon: InstagramIcon,
    },
    {
        id: 4,
        url: "",
        Icon: TwitterIcon,
    },
];

const CommunityIcon = () => {
    const [iconColor, setIconColor] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState(0);
    console.log(selectedIcon, "selectedIcon,....");
    console.log(selectedIcon, "selectedIcon,....");
    const onOver = (e: any) => {
        if (e) setIconColor(true);
        setSelectedIcon(e);
        console.log(e, "e ");
    };
    const onLeave = (e: any) => {
        if (e) setIconColor(false);
    };
    return (
        <>
            {socialIcon.map(({ url, Icon, id }, index) => (
                <div
                    onMouseOver={() => onOver(id)}
                    onMouseLeave={onLeave}
                    key={index}
                    className={classNames(
                        "w-[44px] h-[44px] md:w-[48px] md:h-[48px] rounded-full flex items-center justify-center  cursor-pointer hover:bg-gradient-to-tr from-[#DD2590] to-[#7A5AF8]",
                        iconColor === true && id === selectedIcon
                            ? ""
                            : "ring-1 ring-[#DD2590]"
                    )}
                >
                    <Icon
                        width="18"
                        height="18"
                        stroke={`${
                            iconColor === true && id === selectedIcon
                                ? "white"
                                : "url(#paint0_linear_1285_1533)"
                        }`}
                    />
                </div>
            ))}
        </>
    );
};

export default CommunityIcon;
