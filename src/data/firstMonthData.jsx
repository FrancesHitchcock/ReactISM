import {nanoid} from "nanoid"

// standard regular events:
// "Coffee Morning every Wednesday 10.30am to 12.00"
// "Exercise for the over 60s (EFOS) every Monday at 10.30am, followed by coffee (open to all) at 11.30am" 

// to add markup to a string the property value will need to be in this format:
// details: (<span>click on the link to visit <a href="https://stackoverflow.com/questions/14659240/angle-bracket-without-triggering-html-code">Stack Overflow</a></span>)

// Where there are more than one event on the same day it should take the following format:

// {
//     id: nanoid(),
//     date: "Saturday 3rd June",
//     events: [
//         {
//             id: nanoid(),
//             time: "10.30am",
//             title: "Church Coffee Morning",
//             details: "",
//         },
//         {
//             id: nanoid(),
//             time: "7.30pm",
//             title: "Bingo Evening",
//             details: "Cost: £1 per person. in the Village Hall",
//         },
//     ]
// },

// to indicate a cancelled event, use code as follows, with classNames "strikethrough" and "red" that are already defined in the CSS: 
// {
//     id: nanoid(),
//     time: (<><span className="strikethrough">10.30am</span></>),
//     title: (<><span className="strikethrough">Church Coffee Morning</span> <span className="red">CANCELLED</span></>),
//     details: "",
// },

const firstMonth = {
    month: "October",
    year: "2023",
    regularEvents: [
        {
            id: nanoid(),
            event: "Coffee Morning every Wednesday 10.30am to 12.00.",
        },
        {
            id: nanoid(),
            event: "Exercise for the over 60s (EFOS) every Monday at 10.30am, followed by coffee (open to all) at 11.30am." 
        },
        {
            id: nanoid(),
            event: "Knit and Natter Group every Tuesday from 11.00am to 1.00pm. All welcome. Cost £3 each." 
        },
        {
            id: nanoid(),
            event: "Carol Singing every Tuesday evening. All welcome. Please contact Val on 01986 781540." 
        },
    ],
    dates: [
        {
            id: nanoid(),
            date: "Saturday 7th October",
            events: [
                {
                    id: nanoid(),
                    time: (<><span className="strikethrough">10.30am</span></>),
                    title: (<><span className="strikethrough">Church Coffee Morning</span> <span className="red" style={{fontWeight: "normal"}}>CANCELLED</span></>),
                    details: "",
                },
                {
                    id: nanoid(),
                    time: "7.30pm",
                    title: "Eric's Famous Curry Night:",
                    details: (<>Selection of meat and vegetable curries from India and Sri Lanka, followed by fabulous complementary desserts. <span className="red">FULLY BOOKED</span></>),
                },
            ]
        },
        {
            id: nanoid(),
            date: "Friday 11th October",
            events: [
                {
                    id: nanoid(),
                    time: "7.30pm",
                    title: "Bingo Evening:",
                    details: "Please arrive from 7.00pm for 7.30 start.",
                },
            ]
        },
        {
            id: nanoid(),
            date: "Friday 20th October",
            events: [
                {
                    id: nanoid(),
                    time: "7.00pm",
                    title: "Shared Supper:",
                    details: "All welcome. Bring a plate of food. Contact Gerry on 01986 781014.",
                },
            ]
        },
        {
            id: nanoid(),
            date: "Friday 27th October",
            events: [
                {
                    id: nanoid(),
                    time: "7.30pm",
                    title: "Village Hall Social Evening:",
                    details: "Cost £1. Log fire. Bring your own drinks and nibbles.",
                },
            ]
        },
    ]
}

export {firstMonth}