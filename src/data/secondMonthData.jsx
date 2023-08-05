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

const secondMonth = {
    month: "September",
    year: "2023",
    regularEvents: [
        {
            id: nanoid(),
            event: "Coffee Morning every Wednesday 10.30am to 12.00",
        },
        {
            id: nanoid(),
            event: "Exercise for the over 60s (EFOS) every Monday at 10.30am, followed by coffee (open to all) at 11.30am" 
        }
    ],
    dates: [
        {
            id: nanoid(),
            date: "Saturday 2nd September",
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
            date: "Tuesday 5th September",
            events: [
                {
                    id: nanoid(),
                    time: "11.00am to 1.00pm",
                    title: "Knit and Natter Group:",
                    details: "All welcome. Cost £3 each.",
                },
            ]
        },
        {
            id: nanoid(),
            date: "Thursday 7th September",
            events: [
                {
                    id: nanoid(),
                    time: "10.00am to 1.00pm",
                    title: "Lindy Lou's Felt Making Class:",
                    details: "All levels invited. Please call Linda on 07887 585055 for details including cost.",
                },
            ]
        },
        {
            id: nanoid(),
            date: "Tuesday 19th September",
            events: [
                {
                    id: nanoid(),
                    time: "11.00am to 1.00pm",
                    title: "Knit and Natter Group:",
                    details: "All welcome. Cost £3 each.",
                },
            ]
        },
        {
            id: nanoid(),
            date: "Tuesday 26th September",
            events: [
                {
                    id: nanoid(),
                    time: "7.00pm",
                    title: "Parish Council First Aid Training",
                    details: "",
                },
            ]
        },
        {
            id: nanoid(),
            date: "Friday 29th September",
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