import React from "react";

const AboutUser = ():JSX.Element => {
    return (
        <div className="mt-[40px]">
            <div
                style={{ backgroundColor: "rgba(255, 255, 255, 0.04)" }}
                className="text-white max-w-[1000px] h-[260px] rounded-[10px]"
            >
                <div className="px-[24px] py-[24px] text-[#ffffff]">
                    {/* profile & button start */}
                    <div className="flex items-center justify-between">
                        <div className="flex gap-[16px] items-center">
                            <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-tr from-[#DD2590] to-[#7A5AF8] flex items-center justify-center">
                                <img
                                    src="/images/demoprf.svg"
                                    alt=""
                                    className="w-[95px] h-[95px] rounded-full"
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-white text-[16px] font-semibold leading-[24px]">
                                    Jenny Sun
                                </p>
                                <p className="text-[#667085] text-[16px] leading-[24px] font-normal">
                                    @Jenny_art
                                </p>
                            </div>
                        </div>
                        <button className="w-[234px] h-[56px] rounded-[32px] bg-gradient-to-tr from-[#DD2590] to-[#7A5AF8] font-medium text-[16px] leading-[24px] text-[#ffffff] hover:bg-gradient-to-tr hover:from-[#7A5AF8] hover:to-[#DD2590]">
                            Remix
                        </button>
                    </div>
                    {/* profile & button end */}
                    <p className="text-[#98A2B3] font-normal text-[16px] leading-[24px] mt-[16px]">
                        Hi, I'm Hyang! I work as freelancer digital artist since
                        2022. I love drawing female anatomy the most But I'm
                        practicing to expand my knowledge! <br /> <br /> Your
                        support allows me to do this for a living
                    </p>
                </div>
            </div>
            <div
                style={{ background: "rgba(255, 255, 255, 0.1)" }}
                className="max-w-[1000px] h-[1px] mt-[40px]"
            ></div>
        </div>
    );
};

export default AboutUser;
