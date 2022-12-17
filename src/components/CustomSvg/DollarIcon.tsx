import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const DollarIcon = (props: IconType) => {
    return (
        <CustomIcon
            {...props}
            svg={({ stroke, color, width, height }) => (
                <svg
                    width={width}
                    height={height}
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_431_24092)">
                        <path
                            d="M12.0352 1.03906V23.0391"
                            stroke={stroke}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M17.0352 5.03906H9.53516C8.6069 5.03906 7.71666 5.40781 7.06028 6.06419C6.40391 6.72057 6.03516 7.6108 6.03516 8.53906C6.03516 9.46732 6.40391 10.3576 7.06028 11.0139C7.71666 11.6703 8.6069 12.0391 9.53516 12.0391H14.5352C15.4634 12.0391 16.3537 12.4078 17.01 13.0642C17.6664 13.7206 18.0352 14.6108 18.0352 15.5391C18.0352 16.4673 17.6664 17.3576 17.01 18.0139C16.3537 18.6703 15.4634 19.0391 14.5352 19.0391H6.03516"
                            stroke={stroke}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_431_24092">
                            <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(0.0351562 0.0390625)"
                            />
                        </clipPath>
                    </defs>
                </svg>
            )}
        ></CustomIcon>
    );
};

export default DollarIcon;
