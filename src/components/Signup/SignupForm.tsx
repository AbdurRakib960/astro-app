import React from "react";
import { Formik, Form } from "formik";
import InputField from "../InputField";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label("email"),
});
const gradient = " linear-gradient(115.31deg, #DD2590 -28.13%, #7A5AF8 171.11%";

export const SignupForm = () => {
    const navigate = useNavigate();
    const initialValues = {
        email: "",
    };
    const handleSubmit = (value: any) => {
        console.log(value.email, "value");
        if (value.email !== "") {
            navigate("/create-account");
        }
    };
    return (
        <div className="mt-[30px]">
            <Formik
                initialValues={initialValues}
                onSubmit={(value) => handleSubmit(value)}
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
                            Next
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
