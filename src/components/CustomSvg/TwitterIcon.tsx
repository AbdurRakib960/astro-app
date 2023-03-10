import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const TwitterIcon = (props: IconType) => {
    return (
        <CustomIcon
            {...props}
            svg={({ stroke, color, width, height }) => (
                <svg
                    width={width}
                    height={height}
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M19.1666 2.3155C18.4848 2.61456 17.7584 2.81279 17.001 2.90904C17.7801 2.44383 18.3748 1.71279 18.6544 0.831646C17.9279 1.26477 17.1259 1.57071 16.2711 1.74144C15.5813 1.00696 14.5981 0.552063 13.5256 0.552063C11.4448 0.552063 9.76961 2.24102 9.76961 4.31154C9.76961 4.60946 9.79481 4.89592 9.85669 5.16862C6.732 5.01623 3.96711 3.51863 2.10971 1.23727C1.78544 1.79988 1.59523 2.44383 1.59523 3.13706C1.59523 4.43873 2.26554 5.59258 3.26471 6.2606C2.66086 6.24915 2.06846 6.07383 1.56659 5.79769C1.56659 5.80915 1.56659 5.82404 1.56659 5.83894C1.56659 7.6654 2.8694 9.18248 4.57783 9.53196C4.2719 9.6156 3.93846 9.65571 3.59242 9.65571C3.35179 9.65571 3.10888 9.64196 2.88086 9.59154C3.36784 11.08 4.74971 12.1742 6.39284 12.2098C5.11409 13.2101 3.49044 13.8128 1.73273 13.8128C1.4245 13.8128 1.12888 13.799 0.833252 13.7612C2.49815 14.8349 4.47127 15.4479 6.59908 15.4479C13.5153 15.4479 17.2966 9.71873 17.2966 4.75269C17.2966 4.58654 17.2909 4.42613 17.2828 4.26685C18.0288 3.73748 18.6555 3.07633 19.1666 2.3155Z"
                        fill={stroke}
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_1285_1552"
                            x1="-7.72808"
                            y1="2.20968"
                            x2="32.4604"
                            y2="25.597"
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

export default TwitterIcon;
