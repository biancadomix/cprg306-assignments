"use Client"

import { useState } from "react";
import counter from "./counter";

export default function CounterPage () {

    const [ counter, setCounter ] = useState (0);
    // const [timeCheck, setTimeCheck] = useState("");


    const incrementCounter = () => {
        let currentCount = counter;
        setCounter (currentCount + 1);
    }
}