import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import checkedArrow from "../../icons/SelectChecked.svg";
import style from "./style.module.css";
import { NewIcon } from "../NewIcon/NewIcon";
import {
    useStyles,
    menuProps,
    selectStyle,
    menuItemStyle,
    checkboxStyle,
    numberStyle,
} from "./styled";

export const SelectValuteTo = (props) => {
    const classes = useStyles();
    const factor = (
        parseFloat(props.ValuteList.Valute[props.SelectTo].Value) /
        props.ValuteList.Valute[props.SelectFrom].Value
    ).toLocaleString("ru", { maximumFractionDigits: 2 });
    return (
        <>
            <div>
                <div className={style.upperText}>
                    Я получу
                    <div className={style.outputChapter}>
                        <Select
                            style={selectStyle}
                            MenuProps={menuProps}
                            className={classes.select}
                            IconComponent={NewIcon}
                            value={props.SelectTo}
                            renderValue={(value) => value}
                            onChange={(e) => {
                                props.FuncSelectTo(e.target.value);
                            }}
                        >
                            {Object.keys(props.ValuteList.Valute).map((key) => (
                                <MenuItem
                                    style={menuItemStyle}
                                    value={key}
                                    key={key}
                                >
                                    <span className={style.keysFont}>
                                        {key}
                                    </span>
                                    <span className={style.labelFont}>
                                        {props.ValuteList.Valute[key].Name}
                                    </span>
                                    <div className={style.selectCheckboxArrow}>
                                        <Checkbox
                                            style={checkboxStyle}
                                            checked={props.SelectTo === key}
                                            icon={<div />}
                                            checkedIcon={
                                                <div
                                                    className={
                                                        style.checkedArrowPos
                                                    }
                                                >
                                                    <img
                                                        className={
                                                            style.checkboxArrowSize
                                                        }
                                                        src={checkedArrow}
                                                    />
                                                </div>
                                            }
                                        />
                                    </div>
                                </MenuItem>
                            ))}
                        </Select>
                        <div className={style.border}>
                            <div className={style.content}>
                                <input
                                    style={numberStyle}
                                    className={style.inputText}
                                    type="text"
                                    value={props.ConvertFunc()}
                                    onChange={(e) => {
                                        props.FuncResultValue(e.target.value);
                                    }}
                                />
                                <div className={style.infoFont}>
                                    1 {props.SelectTo} = {factor}{" "}
                                    {props.SelectFrom}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
