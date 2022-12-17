import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const OrderIcon = (props: IconType) => {
    return (
        <CustomIcon
            {...props}
            svg={({ stroke, color, width, height }) => (
                <svg
                    width={width}
                    height={height}
                    viewBox="0 0 22 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.6084 8.72754V4.32122C11.6084 2.48681 10.1213 0.999698 8.28687 0.999698C6.45241 0.999698 4.9653 2.48681 4.9653 4.32122V8.72754"
                        stroke={stroke}
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M15.2894 13.2142L14.8871 6.32733H1.68682L1.0049 18.0004C0.912018 19.5903 2.1763 20.9307 3.76889 20.9307H12.2785"
                        stroke={stroke}
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M13.8455 17.6023L15.5786 19.5625L18.666 16.3644"
                        stroke={stroke}
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                    <path
                        d="M21.2461 18.0553C21.2461 20.7862 19.0323 23 16.3014 23C13.5705 23 11.3566 20.7862 11.3566 18.0553C11.3566 15.3244 13.5705 13.1106 16.3014 13.1106C19.0323 13.1106 21.2461 15.3244 21.2461 18.0553Z"
                        stroke={stroke}
                        strokeMiterlimit="10"
                    />
                </svg>
            )}
        ></CustomIcon>
    );
};

export default OrderIcon;
