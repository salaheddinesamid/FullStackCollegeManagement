import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faChalkboard, faUser, faCoffee, faTableColumns, faSchool } from "@fortawesome/free-solid-svg-icons";
export function Side(){
    let listOfServices = [
        {
            "name":"Dashboard",
            "logo":faTableColumns
        },
        {
            "name":"Teachers",
            "logo":faChalkboard
        },
        {
            "name":"Students",
            "logo":faUser
        },
        {
            "name":"Event",
            "logo":faCalendarDay
        }
    ]
    return(
        <div className="row" style={{
        }}>
            <div className="row">
                <div className="container">
                    <div className="col-xl-12">
                        <div className="row d-inline-flex justify-content-center">
                            <div className="col-xl-12">
                                  <h3 style={{
                                fontWeight:"bold"
                            }}><FontAwesomeIcon icon={faSchool} style={{
                                height:"100px",
                                padding:"10px 90px"
                            }}/></h3>
                            
                            </div>
                           
                        </div>
                        <div className="row mt-4 d-flex justify-content-center">
                            <div className="col-xl-12 justify-content-center">
                            {listOfServices.map((service)=>(
                                <div className="row d-block-flex ">
                                    <div className="row mt-4">
                                        <div className="col-xl-12 d-inline-flex justify-content-center" style={{
                                            cursor:"pointer",
                                            
                                        }}>
                                            <p style={{
                                                padding:"0px 10px"
                                            }}><FontAwesomeIcon icon={service.logo}/></p>
                                            <p onMouseMove={()=>{
                                                
                                            }} style={{
                                                color:"black"
                                            }}><b>{service.name}</b></p>
                                        </div>
                                    </div>
                                    </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}