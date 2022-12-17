import React from "react";
import { SignupCard } from "./signupCard";

export const Signup = () => {
    return (
        <div className="min-h-screen w-full bg-[#070328] ">
            <div className="h-full">
                <img
                    src="/images/logo.svg"
                    alt=""
                    className="ml-[120px] pt-[24px] w-[250px] h-[48px]"
                />
                {/* sign up card  start*/}
                <SignupCard />
                {/* out side card  */}
                <p className="text-center text-white font-normal text-[16px] leading-[24px] mt-[24px] pb-8">
                    Have an account?{" "}
                    <span className="font-medium text-[#2E90FA] cursor-pointer">
                        Sign in
                    </span>
                </p>
            </div>
        </div>
    );
};
