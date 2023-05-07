import React from "react";
import style from "./style.module.css";
import { IconButton } from "@mui/material";
import ArrowOne from "../../icons/Arrow1.svg";
import ArrowTwo from "../../icons/Arrow2.svg";
import { buttonStyle } from "./styled";

export const ReverseButton = (props) => {
    return (
        <div className={style.buttonFlex}>
            <IconButton style={buttonStyle} onClick={props.click}>
                <div className={style.arrowFlexOne}>
                    <img src={ArrowOne} />
                    <div className={style.arrowFlexTwo}>
                        <img src={ArrowTwo} />
                    </div>
                </div>
            </IconButton>
        </div>
    );
};
