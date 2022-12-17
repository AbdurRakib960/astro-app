import { SigninCard } from "./SigninCard";

export const Signin = () => {
    return (
        <div className="min-h-screen w-full bg-[#070328] ">
            <div className="h-full">
                <img
                    src="/images/logo.svg"
                    alt="logo"
                    className="ml-[120px] pt-[24px] w-[250] h-[48px]"
                />
                {/* sign in card  start*/}
                <SigninCard />
                {/* out side card  */}
                <p className="text-center text-white font-normal text-[16px] leading-[24px] mt-[24px] pb-8">
                    Don’t have an account?{" "}
                    <span className="font-medium text-[#2E90FA] cursor-pointer">
                        Create Account
                    </span>
                </p>
            </div>
        </div>
    );
};
