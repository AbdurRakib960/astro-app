import classNames from "classnames";

type WrapperStyle = {
    wrapper: string;
    childWrapper?: string;
    imageClass: string;
    alt?: string;
    imageUrl: string;
    title: string;
};

export const AuthenticationButton = (props: WrapperStyle) => {
    return (
        <div className={props.wrapper}>
            <div
                className={classNames(
                    "flex gap-[12.96px] items-center justify-center",
                    `${props.childWrapper}`
                )}
            >
                <img
                    src={props.imageUrl}
                    alt={`${props.alt}`}
                    className={classNames(
                        `${props.imageClass}`,
                        "w-[23px] h-[23px]"
                    )}
                />
                <p className="text-[#FFFFFF] text-[16px] font-medium leading-[24px]">
                    {props.title}
                </p>
            </div>
        </div>
    );
};
