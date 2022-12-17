import React from "react";
import SidebarElement from "./SidebarElement";

const Sidebar = (): JSX.Element => {
    return (
        <>
            <div
                style={{ borderRight: " 1px solid rgba(255, 255, 255, 0.08)" }}
                className="fixed z-[99] top-0 left-0 h-screen mt-[96px]  bg-[#070328]  drawer overflow-hidden"
            >
                <div className="w-[280px]  overflow-auto h-screen pt-8">
                    <SidebarElement />
                </div>
            </div>
        </>
    );
};

export default Sidebar;
