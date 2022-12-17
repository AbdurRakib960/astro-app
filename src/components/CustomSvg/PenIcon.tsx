import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const PenIcon = (props: IconType) => {
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
                        d="M12 19L19 12L22 15L15 22L12 19Z"
                        stroke="url(#paint0_linear_1024_5101)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M18 13L16.5 5.5L2 2L5.5 16.5L13 18L18 13Z"
                        stroke={stroke}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M2 2L9.586 9.586"
                        stroke={stroke}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11 13C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9C9.89543 9 9 9.89543 9 11C9 12.1046 9.89543 13 11 13Z"
                        stroke={stroke}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_1024_5101"
                            x1="7.33018"
                            y1="13.1128"
                            x2="31.3131"
                            y2="24.4526"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#DD2590" />
                            <stop offset="1" stopColor="#7A5AF8" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_1024_5101"
                            x1="-5.47171"
                            y1="3.78049"
                            x2="32.901"
                            y2="21.9241"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#DD2590" />
                            <stop offset="1" stopColor="#7A5AF8" />
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_1024_5101"
                            x1="-1.54252"
                            y1="2.84418"
                            x2="16.6509"
                            y2="11.4465"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#DD2590" />
                            <stop offset="1" stopColor="#7A5AF8" />
                        </linearGradient>
                        <linearGradient
                            id="paint3_linear_1024_5101"
                            x1="7.13207"
                            y1="9.44512"
                            x2="16.7252"
                            y2="13.981"
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

export default PenIcon;
