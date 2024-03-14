import React from "react";
import { Header } from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
export function Dashboard(){
    const earning = 20.4576;
    const expenses = 10.897;
    const services = [
        {
            "name":"Overview",
        },
        {
            "name":"Unpaid students"
        },
        {
            "name":"School Expenses"
        },
        {
            "name":"Recent students"
        },
        {
            "name":"Coursers"
        }
    ]
    return(
        <div className="row">
            <div className="row">
                <Header/>
            </div>
            <div className="row mt-4">
                <div className="container">
                    <div className="row mt-4">
                        {services.map((service)=>(
                            <div className="col-xl-2">
                                <p><b>{service.name}</b></p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <div className="row">
                    <div className="col-xl-5" style={{
                        backgroundColor:"#90EE90",
                        padding:"10px 10px",
                        borderRadius:"10px",
                        marginRight:"10px"
                    }}>
                        <div className="row">
                            <div className="col-xl-10">
                               <p><b>Total Earning</b></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-5">
                                <h3><b>{earning}$</b></h3>
                            </div>
                            <div className="col-xl-3 "  style={{
                                    backgroundColor:"white",
                                    borderRadius:"10px"
                                }}>
                                <div className="col-xl-3 d-flex align-items-center">
                                    <FontAwesomeIcon icon={faArrowUp} style={{
                                        color:"green",
                                        padding:"0px 10px"
                                    }}/>
                                    <p><b>+45%</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5" style={{
                        backgroundColor:"#FA8072",
                        padding:"10px 10px",
                        borderRadius:"10px"
                    }}>
                        <div className="row">
                        
                            <div className="col-xl-10">
                               <p><b>Total Expenses</b></p>
                            </div>
                            <div className="row">
                                   <div className="col-xl-5">
                                         <h3><b>{expenses}$</b></h3>
                                   </div>
                                   <div className="col-xl-3 "  style={{
                                    backgroundColor:"white",
                                    borderRadius:"10px"
                                }}>
                                <div className="col-xl-3 d-flex align-items-center">
                                    <FontAwesomeIcon icon={faArrowDown} style={{
                                        color:"red",
                                        padding:"0px 10px"
                                    }}/>
                                    <p><b>+10%</b></p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-5">
                                
                            </div>
                            <div className="col-xl-6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}