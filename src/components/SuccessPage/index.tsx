import React from "react";

const SignupSuccess = () => {
    return (
        <>
            <div className="min-h-screen w-full bg-[#070328] ">
                <div className="h-full">
                    <img
                        src="/images/logo.svg"
                        alt=""
                        className="ml-[120px] pt-[24px] w-[250px] h-[48px]"
                    />
                    <div className="flex flex-col items-center justify-center h-[80vh]">
                        <img
                            src="/icon/circlecheck.svg"
                            alt=""
                            className="w-[100px] h-[100px]"
                        />
                        <h1 className="text-[30px] text-[#FFFFFF] leading-[38px] font-medium mt-[40px]">
                            Congratulations!
                        </h1>
                        <p className="text-[#D0D5DD] text-[16px] font-normal leading-[24px] mt-[8px]">
                            Account created successfully!
                        </p>
                        <p className="mt-[52px] text-[16px] leading-[24px] font-medium text-[#2E90FA] cursor-pointer">
                            Go to home
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignupSuccess;
