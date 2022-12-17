import { useField, FieldHookConfig, ErrorMessage } from "formik";
import { FC, ReactElement } from "react";

interface TextAreaFieldType {
    label?: string;
    inputImg?: FC;
    height: string;
    labelClass?: string;
    inputClass?: string;
}

function TextAreaField(props: TextAreaFieldType & FieldHookConfig<string>) {
    const [field, meta] = useField(props);
    return (
        <div className={props.className}>
            <label
                className={
                    "text-[16px] font-semibold leading-[24px] label text-[#FFFFFF]   block" +
                    " " +
                    props.labelClass
                }
                htmlFor={props.label}
            >
                {props.label}
            </label>
            {props.label && <div className="pt-[8px]"></div>}
            <div className="relative">
                <textarea
                    id={props.label}
                    {...field}
                    className={` ${
                        meta.touched && meta.error && "!border-error"
                    } w-full input bg-[#070328] text-[16px] placeholder:text-[#F9FAFB] border-0  ${
                        props.inputClass
                    } focus:outline-none p-[16px] resize-none  text-[#FFFFFF] rounded-[8px]`}
                    placeholder={props.placeholder}
                    style={{ height: props.height }}
                ></textarea>
                {props.inputImg && <props.inputImg />}
            </div>
            <ErrorMessage
                component="div"
                className=" error text-[red] text-[14px]"
                name={field.name}
            />
        </div>
    );
}

TextAreaField.defaultProps = {
    height: "100px",
};

export default TextAreaField;
