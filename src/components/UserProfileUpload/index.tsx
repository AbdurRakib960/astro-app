import React, { ChangeEvent, useState } from "react";

const UserProfileUpload = (): JSX.Element => {
    const [file, setFile] = useState<File>();
    console.log(file, "file.......");
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };
    return (
        <div className="text-white">
            <div className="flex gap-[16px] items-center">
                <div className="relative">
                    <img
                        src="/images/demoprf.svg"
                        alt="profile"
                        className="w-[150px] h-[150px] rounded-full"
                    />
                    <div className="w-[50px] h-[50px] rounded-full absolute bottom-0  right-0">
                        <label htmlFor="file-input">
                            <img
                                src="/images/camera.svg"
                                alt="upload"
                                className="w-[50px] h-[50px] rounded-full cursor-pointer"
                            />
                        </label>

                        <input
                            id="file-input"
                            type="file"
                            onChange={handleFileChange}
                            accept="image/*"
                            className="w-[50px] h-[50px] rounded-full hidden"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-[16px] text-[#FFFFFF]">
                    <h2 className=" font-semibold text-[24px] leading-[32px] ">
                        Jenny Sun
                    </h2>
                    <h3 className="font-normal text-[16px] leading-[24px]">
                        @Jenny Sun
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default UserProfileUpload;
