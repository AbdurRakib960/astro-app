import React, { useState } from "react";
import classNames from "classnames";
import PersonalInfo from "./PersonalInfo";
import Password from "./Password";
import BillingPreferences from "./BillingPreferences";
import UserProfileUpload from "../UserProfileUpload";

const SettingsWrapper = (): JSX.Element => {
    const TabData = ["personal info", "password", "billing preferences"];
    const [tabState, setTabState] = useState(TabData[0]);
    return (
        <div className="pb-[80px]">
            {/* user profile upload section  */}
            <div className="py-[40px]">
                <UserProfileUpload />
            </div>
            <div className="flex gap-[24px] items-center">
                {TabData.map((tab, index) => (
                    <div
                        key={index}
                        className={classNames(
                            tab === tabState
                                ? "bg-gradient-to-tr from-[#DD2590] to-[#7A5AF8] p-[1px] rounded-[10px]"
                                : ""
                        )}
                    >
                        <button
                            onClick={() => setTabState(tab)}
                            className="bg-[#110d31] px-[20px] capitalize py-[16px] rounded-[10px] text-[#ffffff] font-medium text-[16px] leading-[24px]"
                        >
                            {tab}
                        </button>
                    </div>
                ))}
            </div>

            {/* settings tab components here  */}
            {tabState === "personal info" && <PersonalInfo />}
            {tabState === "password" && <Password />}
            {tabState === "billing preferences" && <BillingPreferences />}
        </div>
    );
};

export default SettingsWrapper;
