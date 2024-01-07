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
    month: "February",
    year: "2024",
    regularEvents: [
        {
            id: nanoid(),
            event: "Coffee Morning every Wednesday 10.30am to 12.00.",
        },
        {
            id: nanoid(),
            event: "Exercise for the over 60s (EFOS) every Monday at 10.30am (cost £3 each), followed by coffee (open to all) at 11.30am." 
        },
        {
            id: nanoid(),
            event: "Knit and Natter Group every Tuesday from 11.00am to 1.00pm. All welcome. Cost £3 each." 
        },
    ],
    dates: [
        {
            id: nanoid(),
            date: "Saturday 3rd February",
            events: [
                {
                    id: nanoid(),
                    time: "10.30am",
                    title: "Church Coffee Morning",
                    details: "",
                },
            ]
        },
        // {
        //     id: nanoid(),
        //     date: "Wednesday 10th January",
        //     events: [
        //         {
        //             id: nanoid(),
        //             time: "7.30pm",
        //             title: "Bingo Evening:",
        //             details: "Please arrive from 7.00pm for 7.30 start.",
        //         },
        //     ]
        // },
        {
            id: nanoid(),
            date: "Friday 23rd February",
            events: [
                {
                    id: nanoid(),
                    time: "7.30pm",
                    title: "Village Hall Social Evening:",
                    details: "Cost £1. Bring your own drinks and nibbles.",
                },
            ]
        },
    ]
}

export {secondMonth}