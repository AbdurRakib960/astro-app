import { useField, FieldHookConfig, ErrorMessage } from "formik";
import { FC, useState } from "react";

interface InputFieldType {
    label?: string;
    inputImg?: FC;
    height: string;
    labelClass?: string;
    inputClass?: string;
    value?: any;
    onChange?: any;
    myChange?: (v: string) => any;
    isPassword?: boolean;
}

function InputField(props: InputFieldType & FieldHookConfig<string>) {
    const [open, setOpen] = useState(false);
    const [field, meta] = useField(props);
    const id = props.label ? props.label.replace(" ", "-") : props.name;

    return (
        <div className={props.className}>
            <label
                className={
                    "text-[16px] text-white font-normal label  leading-[24px] block" +
                    " " +
                    props.labelClass
                }
                htmlFor={id}
            >
                {props.label}
            </label>
            {props.label && <div className="pt-[8px]"></div>}
            <div className="relative">
                <input
                    id={id}
                    {...field}
                    value={props.value || field.value}
                    onChange={
                        props.onChange ||
                        ((v) => {
                            field.onChange(v);
                            props.myChange && props.myChange(v.target.value);
                        })
                    }
                    type={
                        props.isPassword === true
                            ? `${open === true ? "text" : "password"}`
                            : props.type
                    }
                    className={` ${
                        meta.touched && meta.error && "!border-error"
                    } w-full input bg-[#070328] text-[16px] placeholder:text-[#667085] ${
                        props.inputClass
                    } focus:outline-none px-[24px] text-[#667085] rounded-[8px]`}
                    placeholder={props.placeholder}
                    style={{ height: props.height }}
                />
                {props.inputImg && <props.inputImg />}
                {props.isPassword && (
                    <img
                        onClick={() => setOpen(!open)}
                        className=" absolute top-[20px] right-4 cursor-pointer w-[16px] h-[16px]"
                        src={
                            open ? "/icon/eye-open.svg" : "/icon/eye-close.svg"
                        }
                        alt=""
                    />
                )}
            </div>
            <ErrorMessage
                component="div"
                className=" error text-[red] text-[14px]"
                name={field.name}
            />
        </div>
    );
}

InputField.defaultProps = {
    height: "56px",
};

export default InputField;
