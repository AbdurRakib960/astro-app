import React from "react";
import { CreateAccount } from "../CreateAccount/CreateAccount";

const Create = () => {
    return (
        <div className="min-h-screen w-full bg-[#070328] ">
            <div className="h-full">
                <img
                    src="/images/logo.svg"
                    alt=""
                    width={250}
                    height={48}
                    className="ml-[120px] pt-[24px] w-[250px] h-[48px]"
                />
                <CreateAccount />
            </div>
        </div>
    );
};

export default Create;
