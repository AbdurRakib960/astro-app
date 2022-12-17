import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const LogoutIcon = (props: IconType) => {
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
                        d="M15 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H15"
                        stroke={stroke}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8 17L3 12L8 7"
                        stroke={stroke}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M3 12H15"
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

export default LogoutIcon;
