import { useState } from "react";
import Navbar from "./Navbar";
import FormComponent from "./Slot";

export function Book(){
    const [name,setName]=useState(" ");
    const [number,setNumber]=useState(" ");
    const [time,setTime]=useState(" ");
    return <div>
        <div className="p-2">
            <Navbar/>
        </div>
        <FormComponent/>
    </div>
}