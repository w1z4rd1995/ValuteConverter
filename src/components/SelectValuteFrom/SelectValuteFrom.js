import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import NumberFormat from "react-number-format";
import Checkbox from "@mui/material/Checkbox";
import checkedArrow from "../../icons/SelectChecked.svg";
import { NewIcon } from "../NewIcon/NewIcon";
import style from "./style.module.css";
import {
    useStyles,
    MenuProps,
    selectStyle,
    menuItemStyle,
    checkboxStyle,
    numberStyle,
} from "./styled";

export const SelectValuteFrom = (props) => {
    const classes = useStyles();
    const factor = parseFloat(
        props.ValuteList.Valute[props.SelectFrom].Value /
            props.ValuteList.Valute[props.SelectTo].Value
    ).toLocaleString("ru", { maximumFractionDigits: 4 });

    return (
        <>
            <div>
                <div className={style.upperText}>
                    У меня есть
                    <div className={style.inputChapter}>
                        <Select
                            style={selectStyle}
                            MenuProps={MenuProps}
                            IconComponent={NewIcon}
                            className={classes.select}
                            value={props.SelectFrom}
                            renderValue={(value) => value}
                            onChange={(e) => {
                                props.FuncSelectFrom(e.target.value);
                            }}
                        >
                            {Object.keys(props.ValuteList.Valute).map((key) => (
                                <MenuItem
                                    style={menuItemStyle}
                                    value={key}
                                    key={key}
                                >
                                    <span className={style.keysFont}>
                                        {" "}
                                        {key}{" "}
                                    </span>
                                    <span className={style.labelFont}>
                                        {props.ValuteList.Valute[key].Name}
                                    </span>
                                    <div className={style.selectCheckboxArrow}>
                                        <Checkbox
                                            style={checkboxStyle}
                                            checked={props.SelectFrom === key}
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
                                <NumberFormat
                                    style={numberStyle}
                                    className={style.inputText}
                                    placeholder="Input here..."
                                    value={props.InputValuteFrom}
                                    thousandSeparator=" "
                                    decimalSeparator=","
                                    onValueChange={(values) => {
                                        const { formattedValue, value } =
                                            values;
                                        props.FuncInputValuteFrom(
                                            formattedValue
                                        );
                                        props.FuncFormattedInput(value);
                                    }}
                                />
                                <div className={style.infoFont}>
                                    1 {props.SelectFrom} = {factor}{" "}
                                    {props.SelectTo}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
