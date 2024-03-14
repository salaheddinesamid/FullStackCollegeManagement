import React from "react";
import { Side } from "../Components/Side";
import { Dashboard } from "../Components/Dashboard";
export function Home(){
    return(
        <div className="row">
            <div className="col-xl-3">
                <Side/>
            </div>
            <div className="col-xl-9">
                <Dashboard/>
            </div>
        </div>
    )
}