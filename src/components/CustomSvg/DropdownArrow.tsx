import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const DropdownArrow = (props: IconType) => {
    return (
        <CustomIcon
            {...props}
            svg={({ stroke, color, width, height }) => (
                <svg
                    width="18"
                    height="9"
                    viewBox="0 0 18 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.9995 8.80059C8.2995 8.80059 7.5995 8.5306 7.0695 8.0006L0.549531 1.48061C0.259531 1.19061 0.259531 0.710615 0.549531 0.420625C0.839531 0.130625 1.31953 0.130625 1.60953 0.420625L8.1295 6.9406C8.6095 7.4206 9.3895 7.4206 9.8695 6.9406L16.3895 0.420625C16.6795 0.130625 17.1595 0.130625 17.4495 0.420625C17.7395 0.710615 17.7395 1.19061 17.4495 1.48061L10.9295 8.0006C10.3995 8.5306 9.6995 8.80059 8.9995 8.80059Z"
                        fill={stroke}
                    />
                </svg>
            )}
        ></CustomIcon>
    );
};

export default DropdownArrow;
