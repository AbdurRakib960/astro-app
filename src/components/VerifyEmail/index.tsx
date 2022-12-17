import React from "react";
import { VerifyEmailCard } from "./VerifyEmailCard";

export const VerifyEmail = () => {
    return (
        <div className="min-h-screen w-full bg-[#070328] ">
            <div className="h-full">
                <img
                    src="/images/logo.svg"
                    alt=""
                    className="ml-[120px] pt-[24px] w-[250px] h-[48px]"
                />
                <VerifyEmailCard />
            </div>
        </div>
    );
};
