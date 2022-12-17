import React from "react";
import { Routes, Route } from "react-router-dom";
import AccountSettings from "./components/AccountSettings";
import Create from "./components/Create";
import DemoPage from "./components/DemoPage/index";
import { ForgotPassword } from "./components/ForgotPassword";
import LandingPage from "./components/LandingPage";
import Profile from "./components/Profile";
import { ResetPassword } from "./components/ResetPassword";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import SignupSuccess from "./components/SuccessPage";
import { VerifyEmail } from "./components/VerifyEmail";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/verify-email" element={<VerifyEmail />} />
                <Route path="/create-account" element={<Create />} />
                <Route path="/successful" element={<SignupSuccess />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/account-settings" element={<AccountSettings />} />
            </Routes>
        </>
    );
};

export default App;
