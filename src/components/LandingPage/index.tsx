import React from "react";
import Footer from "../Footer";
import GetStarted from "./GetStarted";
import HeroSection from "./HeroSection";
import LandingNav from "./LandingNav";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

const LandingPage = (): JSX.Element => {
    return (
        <div className="bg-[#070328] w-[100%] min-h-screen text-white">
            <LandingNav />
            <HeroSection />
            <StepOne />
            <StepTwo />
            <StepThree />
            <GetStarted />
            <Footer />
        </div>
    );
};

export default LandingPage;
