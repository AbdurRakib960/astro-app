import React from "react";
import TopNav from "../../TopNav";
import Sidebar from "../Sidebar";
import SettingsWrapper from "./SettingsWrapper";

const AccountSettings = (): JSX.Element => {
    return (
        <div className="bg-[#070328] w-[100%] min-h-screen">
            <TopNav />
            <Sidebar />
            <div className="pl-[304px]">
                <SettingsWrapper />
            </div>
        </div>
    );
};

export default AccountSettings;
