import React from "react";
import { ForgotPasswordCard } from "./ForgotPasswordCard";

export const ForgotPassword = () => {
    return (
        <div className="min-h-screen w-full bg-[#070328] ">
            <div className="h-full">
                <img
                    src="/images/logo.svg"
                    alt="logo"
                    className="ml-[120px] pt-[24px] w-[250px] h-[48px]"
                />

                <ForgotPasswordCard />
            </div>
        </div>
    );
};
