import React from "react";
import { ResetPasswordCard } from "./ResetPasswordCard";

export const ResetPassword = () => {
    return (
        <div className="min-h-screen w-full bg-[#070328] ">
            <div className="h-full">
                <img
                    src="/images/logo.svg"
                    alt=""
                    className="ml-[120px] pt-[24px] w-[250] h-[48px]"
                />
                <ResetPasswordCard />
            </div>
        </div>
    );
};
