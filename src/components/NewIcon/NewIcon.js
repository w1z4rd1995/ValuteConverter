import style from "./style.module.css";
const iconStyle = {
    position: "absolute",
    pointerEvents: "none",
};

export const NewIcon = () => {
    return (
        <div className={style.dropDownArrow}>
            <svg
                style={iconStyle}
                width="14"
                height="7"
                viewBox="0 0 16 9"
                fill="none"
            >
                <path d="M1 1L8 8L15 1" stroke="black" stroke-width="1.27273" />
            </svg>
        </div>
    );
};
