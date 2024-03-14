import { faEnvelope, faGear, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export function Header(){
    return(
        <div className="row">
            <div className="row align-items-center">
                <div className="col-xl-3">
                    <h3 style={{
                        color:"gray"
                    }}>Dashboard</h3>
                </div>
                <div className="col-xl-3">
                    <input placeholder="search"
                    className="form-control"
                    />
                </div>
                <div className="col-xl-2">
                    <FontAwesomeIcon icon={faEnvelope}/>
                </div>
                <div className="col-xl-2">
                    <FontAwesomeIcon icon={faGear} />
                </div>
                <div className="col-xl-2">
                        <FontAwesomeIcon icon={faUser}/>
                </div>
            </div>
        </div>
    )
}