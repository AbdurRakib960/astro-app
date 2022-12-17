import React from "react";
import CommunityIcon from "../CommunityIcon";

const HeroSection = (): JSX.Element => {
    return (
        <>
            <div className="mt-[63px] md:mt-[56px] 2xl:mt-[121px] relative w-[100%] xs:w-[375px] md:w-[583px] 2xl:w-[555px] mx-auto text-center">
                <h1 className="text-[30px] md:text-[60px] 2xl:w-[545px] md:leading-[72px] 2xl:text-[80px] 2xl:leading-[90px] leading-[38px] font-bold text-center px-[10px] md:px-0 ">
                    Create unique game assets in{" "}
                    <span className="text-transparent bg-gradient-to-r from-[#DD2590] to-[#7A5AF8] bg-clip-text relative md:text-[48px] 2xl:text-[80px]">
                        seconds
                        <img
                            src="/images/gradient-line.svg"
                            alt=""
                            className="w-[125px] md:w-[195px] 2xl:w-[310px] absolute bottom-[-10px] md:bottom-[-15px] right-0 2xl:bottom-[-25px]"
                        />
                    </span>
                </h1>
                <img
                    src="/images/star-icon.svg"
                    alt="star"
                    className="w-[41px] h-[41px] absolute bottom-[70px] left-[10px] md:top-[-30px] md:left-[-250px] 2xl:top-[-75px]"
                />
                <img
                    src="/images/star-icon.svg"
                    alt="star"
                    className="w-[12px] h-[12px] md:w-[20px] md:h-[20px] absolute top-[-10px] right-[133px] md:right-[190px] 2xl:right-[170px] 2xl:top-[-60px]"
                />
                <img
                    src="/images/star.svg"
                    alt="star"
                    className="w-[38px] h-[37px] md:w-[62px] md:h-[60px] absolute top-[-10px] right-[10px] md:top-[-5px] md:right-[-60px] 2xl:w-[62px] 2xl:h-[60px] 2xl:top-[-30px] 2xl:right-[-160px]"
                />
                <img
                    src="/images/star-icon.svg"
                    alt="star"
                    className="w-[26px] h-[26px] absolute bottom-[15px] left-[30px] md:bottom-[45px] 2xl:left-[-130px] 2xl:bottom-[240px]"
                />
            </div>
            <div className="relative md:w-[765px] mx-auto">
                <p className="w-[100%] xs:w-[343px] md:w-[359px]  mt-[20px] md:mt-[24px] 2xl:mt-[53px] mx-auto text-[#FFFFFF] font-normal text-[14px] md:text-[16px] md:leading-[24px] leading-[20px] text-center 2xl:text-[18px] 2xl:leading-[28px] 2xl:w-[430px] px-[10px] xs:px-0">
                    Generate unlimited, high-quality creations quickly for all
                    your gaming needs with the community... the possibilities
                    are endless!
                </p>
                <div className="absolute top-[-50px] left-[20px] md:flex flex-col md:gap-[8px] 2xl:gap-[24px] hidden 2xl:left-[-240px] 2xl:top-[-220px]">
                    <img
                        src="/images/game-icon-remix.svg"
                        alt=""
                        className="w-[170px] h-[220px] 2xl:w-[332px] 2xl:h-[408px]"
                    />
                    <p className="w-[126px] 2xl:w-[237px] text-center text-[#ffffff] text-[18px] leading-[28px] font-semibold mx-auto">
                        Game Icon for “Rescue Me”{" "}
                    </p>
                </div>
                <div className="absolute top-[-40px] right-[20px] md:flex flex-col md:gap-[8px] 2xl:gap-[24px] hidden 2xl:right-[-240px] 2xl:top-[-290px]">
                    <img
                        src="/images/game-thumbnail.svg"
                        alt=""
                        className="w-[170px] h-[220px] 2xl:w-[328px] 2xl:h-[394px]"
                    />
                    <p className="w-[155px] 2xl:w-[295px] mx-auto  text-center text-[#ffffff] text-[18px] leading-[28px] font-semibold">
                        Game Thumbnail for “Find That!”
                    </p>
                </div>
            </div>
            <div className="w-[196px] relative mx-auto mt-[34px] text-[#FFFFFF] font-medium text-[16px] leading-[24px] text-center ">
                <button className="w-[196px]  h-[44px] md:h-[48px] 2xl:h-[56px] bg-gradient-to-tr from-[#DD2590] to-[#7A5AF8] rounded-[32px] ">
                    Get Started
                </button>
                <img
                    src="/images/Squid-line.svg"
                    alt="Squid-line"
                    className="w-[122px] h-[72px] 2xl:w-[192px] 2xl:h-[114px] absolute bottom-[-80px] right-[-105px] 2xl:bottom-[-120px] 2xl:right-[-230px] hidden md:block"
                />
            </div>
            <div className="mt-[32px] md:mt-[132px] 2xl:mt-[152px] flex flex-col md:flex-row md:justify-center md:gap-[32px] gap-[16px] items-center">
                <p className="font-semibold text-[18px] leading-[28px] md:text-[20px] md:leading-[30px] 2xl:text-[30px] 2xl:leading-[38px] text-[#ffffff]">
                    Join our community:
                </p>
                <div className="flex gap-[16px]">
                    <CommunityIcon />
                </div>
            </div>
        </>
    );
};

export default HeroSection;
