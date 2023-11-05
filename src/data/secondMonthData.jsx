import {nanoid} from "nanoid"

// standard regular events:
// "Coffee Morning every Wednesday 10.30am to 12.00"
// "Exercise for the over 60s (EFOS) every Monday at 10.30am, followed by coffee (open to all) at 11.30am" 

// to add markup to a string the property value will need to be in this format:
// details: (<span>click on the link to visit <a href="https://stackoverflow.com/questions/14659240/angle-bracket-without-triggering-html-code">Stack Overflow</a></span>)

// or 
// details: (<span>A selection of meat or vegetable casseroles, pudding and raffle. Cost: adult £10; child £5. Booking essential. Click on the link for <a href="../../docs/flyers/hot_pot_night.jpg" target="_blank">more information</a>.</span>)

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

const secondMonth = {
    month: "December",
    year: "2023",
    regularEvents: [
        {
            id: nanoid(),
            event: "Coffee Morning every Wednesday 10.30am to 12.00.",
        },
        {
            id: nanoid(),
            event: "Exercise for the over 60s (EFOS) every Monday at 10.30am (cost £2 each), followed by coffee (open to all) at 11.30am." 
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
            date: "Saturday 2nd December",
            events: [
                {
                    id: nanoid(),
                    time: "10.30am",
                    title: "Church Coffee Morning",
                    details: "",
                },
            ]
        },
        {
            id: nanoid(),
            date: "Sunday 3rd December",
            events: [
                {
                    id: nanoid(),
                    time: "6.00pm",
                    title: "Advent Carols:",
                    details: "in St Margaret's Church.",
                },
            ]
        },
        {
            id: nanoid(),
            date: "Wednesday 10th December",
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
            date: "Sunday 17th December",
            events: [
                {
                    id: nanoid(),
                    time: "1.00pm",
                    title: "Village Christmas Lunch",
                    details: "Cost: adult £15; child under 11 years £10. Please book with Eva on 01986 781312.",
                },
            ]
        },
        {
            id: nanoid(),
            date: "Friday 22nd December",
            events: [
                {
                    id: nanoid(),
                    time: "7.00pm",
                    title: "Carol Singing:",
                    details: "at the Village Hall. Mince pies, mulled wine and open fire.",
                },
            ]
        },
        {
            id: nanoid(),
            date: "Sunday 24th December",
            events: [
                {
                    id: nanoid(),
                    time: "3.00pm",
                    title: "Carols and readings:",
                    details: "in St Margaret's Church (bring a torch).",
                },
            ]
        },
    ]
}

export {secondMonth}