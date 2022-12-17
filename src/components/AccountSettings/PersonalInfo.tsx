import { Formik, Form } from "formik";
import * as Yup from "yup";
import React from "react";
import InputField from "../InputField";
import TextAreaField from "../TextAreaField";

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label("email"),
    full_name: Yup.string().required().label("user name"),
    user_name: Yup.string().required().label("user name"),
    bio: Yup.string().required().label("bio"),
    phone_number: Yup.number().required().label("phone number"),
});

const PersonalInfo = (): JSX.Element => {
    const initialValues = {
        email: "Kent@gmail.com",
        full_name: "Kent",
        user_name: "Rakib",
        bio: "Hihi, I'm Hyan! I work as freelancer digital artist since 2022. I love drawing female anatomy the most But I'mpracticing to expand my knowledge!",

        phone_number: "1234567",
    };
    const gradient =
        " linear-gradient(115.31deg, #DD2590 -28.13%, #7A5AF8 171.11%";
    return (
        <div className="mt-[32px] text-[#FFFFFF]">
            <h1 className="font-semibold text-[24px] leading-[32px] text-[#F9FAFB]">
                Personal info
            </h1>
            <p className="font-normal text-[16px] leading-[24px] mt-[8px] text-[#E4E7EC]">
                You can change your personal info here
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
                                        inputClass=" !h-[56px] !w-full border-none !bg-[#070328] text-[#F9FAFB] placeholder:text-[#F9FAFB] font-normal text-[16px] rounded-[8px]"
                                        placeholder="Jenny Sun"
                                        name="full_name"
                                        type="text"
                                        label="Full name"
                                        labelClass="text-[#FFFFFF] font-semibold text-[16px] leading-[24px]"
                                    />
                                    <TextAreaField
                                        inputClass="!h-[128px]"
                                        name="bio"
                                        type="text"
                                        required
                                        label="Bio"
                                    />
                                    <InputField
                                        className="!w-[100%]"
                                        inputClass=" !h-[56px] !w-full border-none !bg-[#070328] text-[#F9FAFB] placeholder:text-[#F9FAFB] font-normal text-[16px] rounded-[8px]"
                                        placeholder="USA +1  1230546030"
                                        name="phone_number"
                                        type="number"
                                        label="Phone Number"
                                        labelClass="text-[#FFFFFF] font-semibold text-[16px] leading-[24px] "
                                    />
                                    <InputField
                                        className="!w-[100%]"
                                        inputClass=" !h-[56px] !w-full border-none !bg-[#070328] text-[#F9FAFB] placeholder:text-[#F9FAFB] font-normal text-[16px] rounded-[8px]"
                                        placeholder="jennysun@gmail.com"
                                        name="email"
                                        type="email"
                                        label="E-mail"
                                        labelClass="text-[#FFFFFF] font-semibold text-[16px] leading-[24px]"
                                    />
                                    <InputField
                                        className="!w-[100%]"
                                        inputClass=" !h-[56px] !w-full border-none !bg-[#070328] text-[#F9FAFB] placeholder:text-[#F9FAFB] font-normal text-[16px] rounded-[8px]"
                                        placeholder="@jennysun"
                                        name="user_name"
                                        type="text"
                                        label="User Name"
                                        labelClass="text-[#FFFFFF] font-semibold text-[16px] leading-[24px]"
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

export default PersonalInfo;
