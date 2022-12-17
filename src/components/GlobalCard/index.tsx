import React from "react";

interface GlobalCardProps {
    imageUrl: string;
    title: string;
    userProfileUrl: string;
    username: string;
    showLikeButton?: boolean;
    handleLike?: () => void;
    numHearts?: number;
    numRemixes?: number;
    numViews?: number;
    additionalStyles?: string;
    // An optional overlay card to show when the card is visible
    overlayCard?: React.ReactNode;
    // An optional component to show on top of the card when hovering. For example,
    // the mod cards shown the options to "use this mod" or "view mod page" when hovering,
    // however remix cards just have a single on-click action (viewing the remix),
    // so this component would not be needed.
    hoverCard?: React.ReactNode;
}

const GlobalCard = ({
    imageUrl,
    title,
    userProfileUrl,
    username,
    showLikeButton,
    handleLike,
    numHearts,
    numRemixes,
    numViews,
    additionalStyles,
    overlayCard,
    hoverCard,
}: GlobalCardProps) => {
    const [hoverMode, setHoverMode] = React.useState(false);

    const handleMouseEnter = React.useCallback(() => {
        setHoverMode(true);
    }, [setHoverMode]);

    const handleMouseExit = React.useCallback(() => {
        setHoverMode(false);
    }, [setHoverMode]);
    return (
        <>
            <div
                style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                className={`w-[282px] h-auto bg-card-bg rounded-[10px] cursor-pointer border-2 border-transparent hover:border-[#DD2590] relative ${
                    additionalStyles ?? ""
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseExit}
            >
                {overlayCard && (
                    <div className="flex flex-col items-center justify-center rounded-[10px] h-full w-full absolute bg-[#000000C8] z-10">
                        {overlayCard}
                    </div>
                )}
                {hoverCard && hoverMode && (
                    <div className="flex flex-col items-center justify-center rounded-[10px] h-full w-full absolute bg-[#000000C8] z-20">
                        {hoverCard}
                    </div>
                )}
                <div className="px-[8px] py-[8px]">
                    <div className="relative">
                        <img
                            style={{
                                borderBottomRightRadius: "20px",
                            }}
                            src={imageUrl}
                            alt="art"
                            className="rounded-[10px] w-[100%] h-[240px] mx-auto"
                        />
                        {showLikeButton && (
                            <div className="relative">
                                <img
                                    src="/images/curved-icon.svg"
                                    alt=""
                                    className="absolute bottom-[-.6px] right-[25px]"
                                />
                                <div className="absolute flex justify-center items-center bottom-[-13px] right-[42px] w-[42px] h-[40px] bg-[#1F1C3D] rounded-full">
                                    <img
                                        src="/images/red-heart-icon.svg"
                                        alt="like"
                                        className="cursor-pointer"
                                        onClick={handleLike}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <p className="mt-[28px] text-white font-medium text-[20px] leading-[30px]">
                        {title}
                    </p>
                    <div className="mt-[8px] flex gap-[8px] items-center">
                        <div className="w-[28px] h-[28px] rounded-full bg-gradient-to-tr from-[#DD2590] to-[#7A5AF8] flex items-center justify-center">
                            <img
                                src={`${userProfileUrl}`}
                                alt=""
                                className="w-[24px] h-[24px] rounded-full "
                            />
                        </div>
                        <p className="font-normal text-[14] text-[#98A2B3] leading-[20px]">
                            {username}
                        </p>
                    </div>
                    <div className="mt-[19px] flex gap-[26px] ">
                        <div className="flex gap-[6px] items-center">
                            <img
                                src="/images/likeicon.svg"
                                alt="like"
                                className="w-[20px] h-[17px]"
                            />
                            <p className="font-normal text-[14px] text-[#D0D5DD] leading-[20px]">
                                {numHearts}
                            </p>
                        </div>
                        <div className="flex gap-[6px] items-center">
                            <img
                                src="/images/remixicon.svg"
                                alt="like"
                                className="w-[20px] h-[17px]"
                            />
                            <p className="font-normal text-[14px] text-[#D0D5DD] leading-[20px]">
                                {numRemixes}
                            </p>
                        </div>
                        <div className="flex gap-[6px] items-center">
                            <img
                                src="/images/eyeicon.svg"
                                alt="like"
                                className="w-[20px] h-[17px]"
                            />
                            <p className="font-normal text-[14px] text-[#D0D5DD] leading-[20px]">
                                {numViews}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GlobalCard;
