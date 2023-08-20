import React from "react"
import {Link} from "react-router-dom"

import EventsDropdown from "./EventsDropdown"
import CommunityDropdown from "./CommunityDropdown"
import ShowDropdown from "./ShowDropdown"

import useNavigation from "../hooks/useNavigation"

export default function DesktopNav(){
    const {
        eventsDropdownHidden, 
        communityDropdownHidden, 
        showDropdownHidden, 
        showEventsDropdown, 
        hideEventsDropdown, 
        showCommunityDropdown, 
        hideCommunityDropdown,
        showShowDropdown, 
        hideShowDropdown
    } = useNavigation()

    return(
        <nav className="outer-nav-container">
            <div className='outer-nav'>
                <Link to="/"><div className="outer-nav-title">Home</div></Link>

                <div className="events-dropdown-container">
                    <span className='events-dropdown-title dropdown-title'>
                        <div className={`outer-nav-title ${!eventsDropdownHidden ? "accent" : "null"}`} onMouseEnter={showEventsDropdown} onMouseLeave={hideEventsDropdown}>Events &#x25BC;
                            <div className={`events-dropdown dropdown ${eventsDropdownHidden ? "dropdown-hidden" : "dropdown-visible"}`} onClick={hideEventsDropdown}>
                                <EventsDropdown />
                            </div>
                        </div>
                    </span>
                </div>

                <div className="community-dropdown-container" >
                    <span className='community-dropdown-title dropdown-title'>
                        <div className={`outer-nav-title ${!communityDropdownHidden ? "accent" : "null"}`} onMouseEnter={showCommunityDropdown} onMouseLeave={hideCommunityDropdown}>Community &#x25BC;
                            <div className={`community-dropdown dropdown ${communityDropdownHidden ? "dropdown-hidden" : "dropdown-visible"}`} onClick={hideCommunityDropdown}>
                                <CommunityDropdown />
                            </div>
                        </div>
                    </span>
                </div>

                <div className="show-dropdown-container" >
                    <span className='show-dropdown-title dropdown-title'>
                        <div className={`outer-nav-title ${!showDropdownHidden ? "accent" : "null"}`} onMouseEnter={showShowDropdown} onMouseLeave={hideShowDropdown}>Village Show &#x25BC;
                            <div className={`show-dropdown dropdown ${showDropdownHidden ? "dropdown-hidden" : "dropdown-visible"}`} onClick={hideShowDropdown}>
                                <ShowDropdown />
                            </div>
                        </div>
                    </span>
                </div>

                {/* <Link to="/village-show"><div className="outer-nav-title last">Village Show</div></Link> */}
            </div>
        </nav>
    )
}