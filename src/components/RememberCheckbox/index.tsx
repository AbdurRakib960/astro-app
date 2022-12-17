type RCTYPE = {
    remember: boolean;
    setRemember: React.Dispatch<React.SetStateAction<boolean>>;
};
export const RememberCheckbox = ({ remember, setRemember }: RCTYPE) => {
    console.log(remember);
    return (
        <div
            onClick={() => setRemember(!remember)}
            className="flex items-center gap-[8px] cursor-pointer"
        >
            <div
                className={`w-[22px] h-[22px]  rounded-[6px] flex justify-center items-center bg-gradient-to-tr from-[#DD2590] to-[#7A5AF8] ${
                    remember && "!border-primary bg-primary"
                }`}
            >
                <div className="text-[14px] text-white bg-[#110d31]  font-semibold m-[2px] w-[18px] h-[18px] rounded-[6px] flex justify-center items-center">
                    {remember && <p>✓</p>}
                </div>
            </div>
            <div className="text-[#FFFFFF] text-[16px] leading-[24px] font-normal">
                Remember me
            </div>
        </div>
    );
};
