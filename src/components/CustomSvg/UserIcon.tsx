import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const UserIcon = (props: IconType) => {
    return (
        <CustomIcon
            {...props}
            svg={({ stroke, color, width, height }) => (
                <svg
                    width={width}
                    height={height}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                        stroke={stroke}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                        stroke={stroke}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_431_24087"
                            x1="-3.47171"
                            y1="15.6677"
                            x2="14.6577"
                            y2="38.5265"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#DD2590" />
                            <stop offset="1" stopColor="#7A5AF8" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_431_24087"
                            x1="4.26415"
                            y1="3.89025"
                            x2="23.4505"
                            y2="12.962"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#DD2590" />
                            <stop offset="1" stopColor="#7A5AF8" />
                        </linearGradient>
                    </defs>
                </svg>
            )}
        ></CustomIcon>
    );
};

export default UserIcon;
// url(#paint0_linear_431_24087)
