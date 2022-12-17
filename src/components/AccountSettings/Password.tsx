import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import InputField from "../InputField";

const validationSchema = Yup.object().shape({
    current_password: Yup.string().required().label("Current Password"),
    new_password: Yup.string().required().label("New Password"),
    confirm_password: Yup.string()
        .oneOf([Yup.ref("new_password")], "Passwords does not match")
        .required(),
});

const Password = (): JSX.Element => {
    const initialValues = {
        current_password: "",
        new_password: "",
        confirm_password: "",
    };
    const gradient =
        " linear-gradient(115.31deg, #DD2590 -28.13%, #7A5AF8 171.11%";
    return (
        <div className="mt-[32px] text-[#FFFFFF]">
            <h1 className="font-semibold text-[24px] leading-[32px] text-[#F9FAFB]">
                Password
            </h1>
            <p className="font-normal text-[16px] leading-[24px] mt-[8px] text-[#E4E7EC]">
                Please enter your current password
            </p>
            {/* information card  */}
            <div
                style={{ background: "rgba(255, 255, 255, 0.04)" }}
                className="max-w-[1016px] h-auto mt-[24px] rounded-[16px]"
            >
                <div className="px-[24px] py-[24px]">
                    <Formik
                        initialValues={initialValues}
                        // All field will store here on value
                        onSubmit={(value) => console.log(value)}
                        validationSchema={validationSchema}
                    >
                        {() => (
                            <Form>
                                <div className="flex flex-col gap-[16px]">
                                    <InputField
                                        className="!w-[100%]"
                                        inputClass=" !h-[56px] !w-full border-none !bg-[#070328] text-[#F9FAFB] placeholder:text-[#667085] font-normal text-[16px] rounded-[8px]"
                                        placeholder="***************"
                                        name="current_password"
                                        type="password"
                                        label="Current Password"
                                        labelClass="text-[#FFFFFF] font-semibold text-[16px] leading-[24px]"
                                        isPassword={true}
                                    />

                                    <InputField
                                        className="!w-[100%]"
                                        inputClass=" !h-[56px] !w-full border-none !bg-[#070328] text-[#F9FAFB] placeholder:text-[#667085] font-normal text-[16px] rounded-[8px]"
                                        placeholder="***************"
                                        name="new_password"
                                        type="password"
                                        label="New Password"
                                        labelClass="text-[#FFFFFF] font-semibold text-[16px] leading-[24px] "
                                        isPassword={true}
                                    />
                                    <InputField
                                        className="!w-[100%]"
                                        inputClass=" !h-[56px] !w-full border-none !bg-[#070328] text-[#F9FAFB] placeholder:text-[#667085] font-normal text-[16px] rounded-[8px]"
                                        placeholder="***************"
                                        name="confirm_password"
                                        type="password"
                                        label="Confirm Password"
                                        labelClass="text-[#FFFFFF] font-semibold text-[16px] leading-[24px]"
                                        isPassword={true}
                                    />
                                </div>
                                <button
                                    style={{ background: `${gradient}` }}
                                    className="w-[300px] h-[56px] mt-[24px] rounded-[32px] text-[#FFFFFF] text-[16px] leading-[24px] font-medium"
                                    type="submit"
                                >
                                    Save changes
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Password;
