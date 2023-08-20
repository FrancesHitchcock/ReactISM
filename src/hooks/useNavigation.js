import {useState, useEffect, useRef} from "react"

import useScreenSizer from "./useScreenSizer"

function useNavigation(){
    const {mobileScreen} = useScreenSizer()

    const [eventsDropdownHidden, setEventsDropdownHidden] = useState(true)
    const [communityDropdownHidden, setCommunityDropdownHidden] = useState(true)
    const [showDropdownHidden, setShowDropdownHidden] = useState(true)
    const [outerNavHidden, setOuterNavHidden] = useState(true)

    const eventsDropdown = useRef(null)
    const communityDropdown = useRef(null)
    const showDropdown = useRef(null)
    const eventsTitle = useRef(null)
    const communityTitle = useRef(null)
    const showTitle = useRef(null)
    const outerNavRef = useRef(null) 
    const menuButton = useRef(null)

    function showEventsDropdown(){
        setEventsDropdownHidden(false)
    }

    function hideEventsDropdown(){
        setEventsDropdownHidden(true)
    }
    
    function showCommunityDropdown(){
        setCommunityDropdownHidden(false)
    }

    function hideCommunityDropdown(){
        setCommunityDropdownHidden(true)
    }

    function showShowDropdown(){
        setShowDropdownHidden(false)
    }

    function hideShowDropdown(){
        setShowDropdownHidden(true)
    }

    function toggleEventsDropdown(){
        setEventsDropdownHidden(prev => !prev)
    }

    function toggleCommunityDropdown(){
        setCommunityDropdownHidden(prev => !prev)
    }

    function toggleShowDropdown(){
        setShowDropdownHidden(prev => !prev)
    }

    function toggleOuterNav(){
        setOuterNavHidden(prev => !prev)
    }

    useEffect(() => {
        if(mobileScreen){
            const currentEventsDropdown = eventsDropdown.current
            const currentEventsTitle = eventsTitle.current
            const currentCommunityDropdown = communityDropdown.current
            const currentCommunityTitle = communityTitle.current
            const currentShowDropdown = showDropdown.current
            const currentShowTitle = showTitle.current
    
            function hideDropdown(e){
                if(e.target !== currentEventsDropdown && e.target !== currentEventsTitle){
                    setEventsDropdownHidden(true)
                }
    
                if(e.target !== currentCommunityDropdown && e.target !== currentCommunityTitle){
                    setCommunityDropdownHidden(true)
                }
    
                if(e.target !== currentShowDropdown && e.target !== currentShowTitle){
                    setShowDropdownHidden(true)
                }
            }
            document.addEventListener("click", hideDropdown)
        
            return function(){
                document.removeEventListener("click", hideDropdown)
            }
        }
    }, [])

    useEffect(() => {
        if(mobileScreen){
            const menuButtonCurrent = menuButton.current
            const eventsTitleCurrent = eventsTitle.current
            const communityTitleCurrent = communityTitle.current
            const showTitleCurrent = showTitle.current
    
            const menuButtonChildren = Array.from(menuButtonCurrent.children)
    
            function hideOuterNav(e){
                if(e.target !== eventsTitleCurrent && e.target !== communityTitleCurrent && e.target !== showTitleCurrent && e.target !== menuButtonCurrent && !menuButtonChildren.includes(e.target)){
                    setOuterNavHidden(true)
                }
            }
    
            document.addEventListener("click", hideOuterNav)
    
            return function(){
                document.removeEventListener("click", hideOuterNav)
            }
        }
    }, [])

    return {
        eventsDropdownHidden, 
        communityDropdownHidden, 
        showDropdownHidden, 
        outerNavHidden,
        eventsDropdown,
        communityDropdown,
        showDropdown,
        eventsTitle,
        communityTitle,
        showTitle,
        outerNavRef, 
        menuButton,
        showEventsDropdown, 
        hideEventsDropdown, 
        showCommunityDropdown, 
        hideCommunityDropdown, 
        showShowDropdown, 
        hideShowDropdown, 
        toggleEventsDropdown,
        toggleCommunityDropdown,
        toggleShowDropdown,
        toggleOuterNav,
    }
}

export default useNavigation