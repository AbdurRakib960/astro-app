import { useState } from "react";
import { Formik, Form } from "formik";
import InputField from "../InputField";
import { RememberCheckbox } from "../RememberCheckbox";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label("email"),
    password: Yup.string().required().label("Password"),
});

const gradient = " linear-gradient(115.31deg, #DD2590 -28.13%, #7A5AF8 171.11%";

export const SigninForm = () => {
    const [remember, setRemember] = useState(true);
    const initialValues = {
        email: "",
        password: "",
    };
    return (
        <div className="mt-[36px]">
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
                                placeholder="Enter your email/username"
                                name="email"
                                type="text"
                                label="Email or username"
                                labelClass="text-[#FFFFFF] font-normal text-[16px]"
                            />
                            <InputField
                                className="!w-[100%] mt-[16px]"
                                inputClass=" !h-[56px] !w-full border-none !bg-[#070328] text-[#667085] font-normal text-[16px] rounded-[8px]"
                                placeholder="Enter your password"
                                name="password"
                                type="password"
                                labelClass="text-[#FFFFFF] font-normal text-[16px]"
                                label="Password"
                                isPassword={true}
                            />

                            <div className="mt-[17px] flex justify-between items-center">
                                <RememberCheckbox
                                    remember={remember}
                                    setRemember={setRemember}
                                />
                                <Link
                                    to=""
                                    className="text-[16px] text-[#2E90FA] font-medium"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        </div>
                        <button
                            style={{ background: `${gradient}` }}
                            className="w-[100%] h-[56px] mt-[24px] rounded-[32px] text-[#FFFFFF] text-[16px] leading-[24px] font-medium"
                            type="submit"
                        >
                            Sign in
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
