import React from "react";

const StepOne = (): JSX.Element => {
    return (
        <div
            id="step1"
            className="2xl:mt-[96px] md:mt-[74px] mt-[32px]   flex flex-col gap-[32px] md:flex-row  justify-center 2xl:gap-[69px] md:gap-[40px] items-center px-4 md:px-0"
        >
            <div className="flex flex-col gap-[12px] md:gap-[10px] 2xl:w-[588px] md:w-[312px]">
                <h3 className="font-bold 2xl:text-[24px] text-[20px] leading-[30px]  md:text-[20px] md:leading-[30px]  2xl:leading-[32px] text-transparent bg-gradient-to-r from-[#DD2590] to-[#7A5AF8] bg-clip-text mx-auto md:mx-0">
                    Step 1
                    <span className="">
                        <img
                            src="/images/gradient-small.svg"
                            alt=""
                            className="w-[61px]  2xl:mt-[-2px]"
                        />
                    </span>
                </h3>
                <h2 className="font-bold 2xl:text-[48px] md:text-[24px] text-[24px] leading-[32px] 2xl:leading-[60px] text-white mx-auto md:mx-0">
                    Choose a mod
                </h2>
                <p className="md:mx-0 font-normal 2xl:text-[18px] md:text-[16px] md:leading-[24px] 2xl:leading-[28px] mt-[12px] md:mt-[10px]  text-[14px] leading-[20px] text-center md:text-left w-[343px] md:w-[100%] px-[10px]  xs:px-0">
                    With “mods,” you can transfer any existing style onto
                    infinitely new game assets like icons and thumbnails so you
                    can focus on building and shipping your games faster.
                </p>
            </div>
            {/* right side  */}
            <div className="2xl:w-[560px] md:w-[316px] xs:w-[343px] w-[100%]">
                <img
                    src="/images/step-one-image.png"
                    alt=""
                    className=" 2xl:h-[405px]  md:h-[229px]  h-[249px] w-[100%] mx-auto md:mx-0 px-[10px] xs:px-0"
                />
            </div>
        </div>
    );
};

export default StepOne;
