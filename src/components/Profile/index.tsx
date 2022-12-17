import React from "react";
import TopNav from "../../TopNav";
import Sidebar from "../Sidebar";
import ProfileElement from "./ProfileElement";

const Profile = ():JSX.Element  => {
    return (
        <div className="bg-[#070328] w-[100%] min-h-screen">
            <TopNav />
            <Sidebar />
            <div className="pl-[320px] w-full ">
                <ProfileElement />
            </div>
        </div>
    );
};

export default Profile;
