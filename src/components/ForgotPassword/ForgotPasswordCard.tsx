import React from "react";
import { Formik, Form } from "formik";
import InputField from "../InputField";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label("email"),
});
const gradient = " linear-gradient(115.31deg, #DD2590 -28.13%, #7A5AF8 171.11%";

export const ForgotPasswordCard = () => {
    const navigate = useNavigate();
    const initialValues = {
        email: "",
    };
    return (
        <div className="w-[100%]  flex justify-center mt-[130px]">
            <div
                style={{ background: "rgba(255, 255, 255, 0.04" }}
                className="w-[600px] h-auto rounded-[8px]"
            >
                <div className="px-[30px] py-[30px]">
                    <h3 className="font-medium text-[30px] leading-[38px] text-[#FFFFFF] text-center">
                        Forgot password
                    </h3>
                    <p className="font-normal text-[16px] leading-[24px] text-[#D0D5DD] mt-[16px] text-center">
                        Enter your email, we will send you a verification link
                    </p>

                    <div className="mt-[24px]">
                        <Formik
                            initialValues={initialValues}
                            onSubmit={(valus) => navigate("/verify-email")}
                            validationSchema={validationSchema}
                        >
                            {() => (
                                <Form>
                                    <div className="">
                                        <InputField
                                            className="!w-[100%]"
                                            inputClass=" !h-[56px] !w-full border-none !bg-[#070328] text-[#667085] font-normal text-[16px] rounded-[8px]"
                                            placeholder="Enter your email/username"
                                            name="email"
                                            type="text"
                                            label="Email or username"
                                            labelClass="text-[#FFFFFF] font-normal text-[16px]"
                                        />
                                    </div>
                                    <button
                                        style={{ background: `${gradient}` }}
                                        className="w-[100%] h-[56px] mt-[24px] rounded-[32px] text-[#FFFFFF] text-[16px] leading-[24px] font-medium"
                                        type="submit"
                                    >
                                        Send
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};
