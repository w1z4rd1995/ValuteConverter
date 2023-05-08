import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "./stores/AppStore";
import { observer } from "mobx-react-lite";
import { SelectValuteFrom } from "./components/SelectValuteFrom/SelectValuteFrom";
import { SelectValuteTo } from "./components/SelectValuteTo/SelectValuteTo";
import { ReverseButton } from "./components/ReverseButton/ReverseButton";
import "./App.css";

const App = observer(() => {
    const [selectValuteFrom, setSelectValuteFrom] = useState("AUD");
    const [selectValuteTo, setSelectValuteTo] = useState("AUD");
    const [valuteFrom, setValuteFrom] = useState("");
    const [valuteTo, setValuteTo] = useState("");
    const [formattedInput, setFormattedInput] = useState("0");
    const store = useContext(StoreContext);
    const temp = selectValuteFrom;
    let isButtonPressed = false;

    const convertValute = () => {
        let result = 0;
        if (formattedInput > 0) {
            const factor =
                store.Api_data.Valute[selectValuteFrom].Value /
                store.Api_data.Valute[selectValuteTo].Value;
            result = formattedInput * factor;
        } else {
            result = "";
        }
        return result.toLocaleString("ru", { maximumFractionDigits: 2 });
    };

    const buttonClick = () => {
        isButtonPressed = true;
        if (isButtonPressed) {
            setSelectValuteFrom(selectValuteTo);
            setSelectValuteTo(temp);
        }
    };

    useEffect(() => {
        store.fetchData();
    }, []);

    return (
        <div className="mainContent">
            {store.Api_data && (
                <>
                    <SelectValuteFrom
                        FormattedInput={formattedInput}
                        FuncFormattedInput={setFormattedInput}
                        ValuteList={store.Api_data}
                        SelectFrom={selectValuteFrom}
                        FuncSelectFrom={setSelectValuteFrom}
                        InputValuteFrom={valuteFrom}
                        FuncInputValuteFrom={setValuteFrom}
                        SelectTo={selectValuteTo}
                    />

                    <ReverseButton click={buttonClick} />

                    <SelectValuteTo
                        ValuteList={store.Api_data}
                        SelectTo={selectValuteTo}
                        SelectFrom={selectValuteFrom}
                        FuncSelectTo={setSelectValuteTo}
                        ResultValue={valuteTo}
                        FuncResultValue={setValuteTo}
                        ConvertFunc={convertValute}
                    />
                </>
            )}
        </div>
    );
});
export default App;
