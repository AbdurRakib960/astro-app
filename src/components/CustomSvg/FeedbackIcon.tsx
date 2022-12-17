import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const FeedbackIcon = (props: IconType) => {
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
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke={stroke}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9.09 8.99959C9.3251 8.33126 9.78915 7.7677 10.4 7.40873C11.0108 7.04975 11.7289 6.91853 12.4272 7.0383C13.1255 7.15808 13.7588 7.52112 14.2151 8.06312C14.6713 8.60512 14.9211 9.29112 14.92 9.99959C14.92 11.9996 11.92 12.9996 11.92 12.9996"
                        stroke={stroke}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12 17H12.01"
                        stroke={stroke}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        ></CustomIcon>
    );
};

export default FeedbackIcon;
