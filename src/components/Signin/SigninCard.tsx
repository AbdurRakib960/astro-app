import React from "react";
import { AuthenticationButton } from "../AuthenticationButton";
import { SigninForm } from "./SigninForm";

const signinButtonDetails = [
    {
        title: "Continue with Google",
        image: "/icon/googlelogo.svg",
        alt: "google logo",
    },
    {
        title: "Continue with Apple",
        image: "/icon/appleicon.svg",
        alt: "apple logo",
    },
];

const divWrapper = "bg-[#070328] w-[100%] rounded-[10px] cursor-pointer";
const childrenDivWrapper = "py-[15px]";
const imageStyle = "";

export const SigninCard = () => {
    return (
        <>
            <div className="w-[100%]  flex justify-center mt-[50px]">
                <div
                    style={{ background: "rgba(255, 255, 255, 0.04" }}
                    className="w-[600px] h-auto rounded-[8px]"
                >
                    <div className="px-[30px] py-[30px]">
                        <h3 className="font-medium text-[30px] leading-[38px] text-[#FFFFFF] text-center">
                            Welcome back!
                        </h3>
                        <div className="flex flex-col gap-[16px] mt-[24px]">
                            {signinButtonDetails.map((button, index) => (
                                <div key={index}>
                                    <AuthenticationButton
                                        wrapper={divWrapper}
                                        childWrapper={childrenDivWrapper}
                                        imageClass={imageStyle}
                                        alt={button.alt}
                                        title={button.title}
                                        imageUrl={button.image}
                                    />
                                </div>
                            ))}
                        </div>
                        {/* ----or---- section  */}
                        <div className="flex items-center gap-[8px] mt-[24px]">
                            <div className="w-[252.5px] h-[1px] bg-[#667085]"></div>
                            <p className="text-white text-[16px] font-normal leading-[24px]">
                                or
                            </p>
                            <div className="w-[252.5px] h-[1px] bg-[#667085]"></div>
                        </div>

                        {/* signin form */}
                        <SigninForm />
                    </div>
                </div>
            </div>
        </>
    );
};
