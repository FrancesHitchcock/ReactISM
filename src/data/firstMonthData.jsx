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

const firstMonth = {
    month: "November",
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
            date: "Saturday 4th November",
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
            date: "Thursday 9th November",
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
            date: "Friday 10th November",
            events: [
                {
                    id: nanoid(),
                    time: "7.30pm",
                    title: "Hotpot Evening:",
                    details: (<span>A selection of meat or vegetable casseroles, pudding and raffle. Cost: adult £10; child £5. Booking essential. Click on the link for <a href="../../docs/flyers/hot_pot_night.jpg" target="_blank">more information</a>.</span>),
                },
            ]
        },
        {
            id: nanoid(),
            date: "Wednesday 15th November",
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
            date: "Wednesday 22nd November",
            events: [
                {
                    id: nanoid(),
                    time: "7.30pm",
                    title: "Parish Meeting",
                    details: "",
                },
            ]
        },
        {
            id: nanoid(),
            date: "Friday 24th November",
            events: [
                {
                    id: nanoid(),
                    time: "7.30pm",
                    title: "Village Hall Social Evening:",
                    details: "Cost £1. Log fire. Bring your own drinks and nibbles.",
                },
            ]
        },
        {
            id: nanoid(),
            date: "Saturday 25th November",
            events: [
                {
                    id: nanoid(),
                    time: "11.00am to 2.00pm",
                    title: "Wreath Making Class:",
                    details: "Professional florist.  All materials provided. Tea, coffee, cake supplied. Go home with a beautiful Christmas wreath, ready to hang on your door.  All inclusive £30. Profits to the Village Hall roof.",
                },
            ]
        },
        {
            id: nanoid(),
            date: "Sunday 26th November",
            events: [
                {
                    id: nanoid(),
                    time: "11.00am to 2.00pm",
                    title: "Wreath Making Class:",
                    details: "Details as above.",
                },
            ]
        },
        {
            id: nanoid(),
            date: "Thursday 30th November",
            events: [
                {
                    id: nanoid(),
                    time: "10.00am to 1.00pm",
                    title: "Lindy Lou's Felt Making Class:",
                    details: "All levels invited. Please call Linda on 07887 585055 for details including cost.",
                },
            ]
        },
    ]
}

export {firstMonth}