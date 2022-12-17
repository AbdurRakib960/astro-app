import React from "react";
import { Formik, Form } from "formik";
import InputField from "../InputField";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    password: Yup.string().required().label("Password"),
    confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords does not match")
        .required(),
});

const gradient = " linear-gradient(115.31deg, #DD2590 -28.13%, #7A5AF8 171.11%";

export const ResetPasswordCard = () => {
    const initialValues = {
        password: "",
        confirm_password: "",
    };
    return (
        <>
            <div className="w-[100%]  flex justify-center mt-[79px]">
                <div
                    style={{ background: "rgba(255, 255, 255, 0.04" }}
                    className="w-[600px] h-auto rounded-[8px]"
                >
                    <div className="px-[30px] py-[30px]">
                        <h3 className="font-medium text-[30px] leading-[38px] text-[#FFFFFF] text-center">
                            Reset password
                        </h3>
                        <div className="mt-[24px]">
                            <Formik
                                initialValues={initialValues}
                                onSubmit={(valus) => console.log(valus)}
                                validationSchema={validationSchema}
                            >
                                {() => (
                                    <Form>
                                        <div className="">
                                            <InputField
                                                className="!w-[100%]"
                                                inputClass=" !h-[56px] !w-full border-none !bg-[#070328] text-[#667085] font-normal text-[16px] rounded-[8px]"
                                                placeholder="Enter your password"
                                                name="password"
                                                type="password"
                                                label="New password"
                                                labelClass="text-[#FFFFFF] font-normal text-[16px]"
                                                isPassword={true}
                                            />
                                            <InputField
                                                className="!w-[100%] mt-[16px]"
                                                inputClass=" !h-[56px] !w-full border-none !bg-[#070328] text-[#667085] font-normal text-[16px] rounded-[8px]"
                                                placeholder="Enter your password"
                                                name="confirm_password"
                                                type="password"
                                                labelClass="text-[#FFFFFF] font-normal text-[16px]"
                                                label="confirm Password"
                                                isPassword={true}
                                            />
                                        </div>
                                        <button
                                            style={{
                                                background: `${gradient}`,
                                            }}
                                            className="w-[100%] h-[56px] mt-[24px] rounded-[32px] text-[#FFFFFF] text-[16px] leading-[24px] font-medium"
                                            type="submit"
                                        >
                                            Next
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
