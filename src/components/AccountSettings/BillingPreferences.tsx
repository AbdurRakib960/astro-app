import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import InputField from "../InputField";
import SelectField from "../SelectField";

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
    company_name: Yup.string().required().label("Company Name"),
    country: Yup.string().required().label("Country"),
    state: Yup.string().required().label("State"),
    city: Yup.string().required().label("City"),
    postal_code: Yup.string().required().label("Postal Code"),
    address1: Yup.string().required().label("Address 1"),
    address2: Yup.string().required().label("Address 2"),
    business_tas_id: Yup.string().required().label("Business Tas Id"),
    business_tas_id2: Yup.string().required().label("Business Tas Id 2"),
});

const BillingPreferences = (): JSX.Element => {
    const initialValues = {
        company_name: "Astrobloc",
        purchase_order_number: "12345",
        country: "USA",
        state: "example state",
        city: "New York",
        postal_code: "234232sdf",
        address1: "test address",
        address2: "test address 2",
        email: "kent@gmail.com",
        business_tas_id: "42432423",
        business_tas_id2: "24242342",
    };
    const gradient =
        " linear-gradient(115.31deg, #DD2590 -28.13%, #7A5AF8 171.11%";

    const userTypeOptions = [
        { value: "test", label: "Test option" },
        { value: "test2", label: "Test option" },
        { value: "test3", label: "Test option" },
    ];
    return (
        <div className="mt-[32px] text-[#FFFFFF]">
            <h1 className="font-semibold text-[24px] leading-[32px] text-[#F9FAFB]">
                Billing Preferances
            </h1>
            <p className="font-normal text-[16px] leading-[24px] mt-[8px] text-[#98A2B3]">
                Chanve to rhese preferances will apply to future invoices <br />
                only. If you nee a past invoice reissued please contact at
                @astroblox.com
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
                                    <div className="flex flex-row gap-[16px]">
                                        <InputField
                                            className="!w-[100%]"
                                            inputClass=" !h-[56px] !w-full border-none !bg-[#070328] text-[#F9FAFB] placeholder:text-[#667085] font-normal text-[16px] rounded-[8px]"
                                            placeholder="Type here"
                                            name="company_name"
                                            type="text"
                                            label="Company Name"
                                            labelClass="text-[#FFFFFF] font-semibold text-[16px] leading-[24px]"
                                        />
                                        <InputField
                                            className="!w-[100%]"
                                            inputClass=" !h-[56px] !w-full border-none !bg-[#070328] text-[#F9FAFB] placeholder:text-[#667085] font-normal text-[16px] rounded-[8px]"
                                            placeholder="Type here"
                                            name="purchase_order_number"
                                            type="text"
                                            label="Purchase Order (PO) Number"
                                            labelClass="text-[#FFFFFF] font-semibold text-[16px] leading-[24px]"
                                        />
                                    </div>
                                    <div className="flex flex-row gap-[16px] items-center">
                                        <InputField
                                            className="!w-[100%]"
                                            inputClass=" !h-[56px] !w-full border-none !bg-[#070328] text-[#F9FAFB] placeholder:text-[#667085] font-normal text-[16px] rounded-[8px]"
                                            placeholder="Country"
                                            name="country"
                                            type="text"
                                            label="Primary Business Address"
                                            labelClass="text-[#FFFFFF] font-semibold text-[16px] leading-[24px]"
                                        />
                                        <InputField
                                            className="!w-[100%]"
                                            inputClass=" !h-[56px] !w-full border-none !bg-[#070328] text-[#F9FAFB] placeholder:text-[#667085] font-normal text-[16px] rounded-[8px] mt-[30px]"
                                            placeholder="State/ Province/ State"
                                            name="state"
                                            type="text"
                                            // label="Purchase Order (PO) Number"
                                            labelClass="text-[#FFFFFF] font-semibold text-[16px] leading-[24px]"
                                        />
                                    </div>
                                    <div className="flex flex-row gap-[16px] items-center">
                                        <InputField
                                            className="!w-[100%]"
                                            inputClass=" !h-[56px] !w-full border-none !bg-[#070328] text-[#F9FAFB] placeholder:text-[#667085] font-normal text-[16px] rounded-[8px]"
                                            placeholder="City"
                                            name="city"
                                            type="text"
                                            labelClass="text-[#FFFFFF] font-semibold text-[16px] leading-[24px]"
                                        />
                                        <InputField
                                            className="!w-[100%]"
                                            inputClass=" !h-[56px] !w-full border-none !bg-[#070328] text-[#F9FAFB] placeholder:text-[#667085] font-normal text-[16px] rounded-[8px]"
                                            placeholder="Postal code"
                                            name="postal_code"
                                            type="text"
                                            labelClass="text-[#FFFFFF] font-semibold text-[16px] leading-[24px]"
                                        />
                                    </div>
                                    <div className="flex flex-row gap-[16px] items-center">
                                        <InputField
                                            className="!w-[100%]"
                                            inputClass=" !h-[56px] !w-full border-none !bg-[#070328] text-[#F9FAFB] placeholder:text-[#667085] font-normal text-[16px] rounded-[8px]"
                                            placeholder="Address 1"
                                            name="address1"
                                            type="text"
                                            labelClass="text-[#FFFFFF] font-semibold text-[16px] leading-[24px]"
                                        />
                                        <InputField
                                            className="!w-[100%]"
                                            inputClass=" !h-[56px] !w-full border-none !bg-[#070328] text-[#F9FAFB] placeholder:text-[#667085] font-normal text-[16px] rounded-[8px]"
                                            placeholder="Address 2"
                                            name="address2"
                                            type="text"
                                            labelClass="text-[#FFFFFF] font-semibold text-[16px] leading-[24px]"
                                        />
                                    </div>
                                    <InputField
                                        className="!w-[100%]"
                                        inputClass=" !h-[56px] !w-full border-none !bg-[#070328] text-[#F9FAFB] placeholder:text-[#667085] font-normal text-[16px] rounded-[8px]"
                                        placeholder="Type here"
                                        name="email"
                                        type="email"
                                        label="Billing Email"
                                        labelClass="text-[#FFFFFF] font-semibold text-[16px] leading-[24px]"
                                    />

                                    <div className="flex flex-row gap-[16px]">
                                        <SelectField
                                            name="business_tas_id"
                                            options={userTypeOptions}
                                            label="Business Tas ID"
                                            placeholder="Type here"
                                        />
                                        <InputField
                                            className="!w-[100%]"
                                            inputClass=" !h-[56px] !w-full border-none !bg-[#070328] text-[#F9FAFB] placeholder:text-[#667085] font-normal text-[16px] rounded-[8px] mt-[33px]"
                                            placeholder="Type here"
                                            name="business_tas_id2"
                                            type="text"
                                            labelClass="text-[#FFFFFF] font-semibold text-[16px] leading-[24px]"
                                        />
                                    </div>
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

export default BillingPreferences;
