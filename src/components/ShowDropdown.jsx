import React from "react"
import {Link} from "react-router-dom"

import useScreenSizer from "../hooks/useScreenSizer"

export default function ShowDropdown(){
    const {mobileScreen} = useScreenSizer()

    return(
        <>
            <Link to="/village-show">
                <div className="inner-nav-title">{mobileScreen ? "History" : "Show History"}</div>
            </Link>
            <Link to="/village-show-23">
                <div className="inner-nav-title last">{mobileScreen ? "Show 2023" : "Village Show 2023"}</div>
            </Link>
        </>
    )
}