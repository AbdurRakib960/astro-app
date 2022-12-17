import React from "react";

const gradient = " linear-gradient(115.31deg, #DD2590 -28.13%, #7A5AF8 171.11%";

export const VerifyEmailCard = () => {
    return (
        <>
            <div className="w-[100%]  flex justify-center mt-[79px]">
                <div
                    style={{ background: "rgba(255, 255, 255, 0.04" }}
                    className="w-[600px] h-auto rounded-[8px]"
                >
                    <div className="px-[30px] py-[30px] flex flex-col items-center">
                        <h3 className="font-medium text-[30px] leading-[38px] text-[#FFFFFF] text-center">
                            Verify your email
                        </h3>
                        <img
                            src="/icon/emailnotification.svg"
                            alt=""
                            width={120}
                            height={94}
                            className="mt-[24px] w-[120px] h-[94px]"
                        />
                        <p className="text-[#D0D5DD] font-normal text-[16px] leading-[24px] py-[24px]">
                            Check your email & click the link to reset your
                            password.
                        </p>

                        <button
                            style={{ background: `${gradient}` }}
                            className="w-[100%] h-[56px] mt-[24px] rounded-[32px] text-[#FFFFFF] text-[16px] leading-[24px] font-medium"
                            type="submit"
                        >
                            Resend
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
