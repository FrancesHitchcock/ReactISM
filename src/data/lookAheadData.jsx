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

// If there are no events just leave the array empty and the JS will take care of the display.

const lookAhead = {
    dates: [
        {
            id: nanoid(),
            date: "Friday 10th November",
            events: [
                {
                    id: nanoid(),
                    time: "7.30pm",
                    title: "Hotpot Evening:",
                    details: "A selection of meat or vegetable casseroles for you to choose from.",
                },
            ]
        },
        {
            id: nanoid(),
            date: "Tuesday 14th November",
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
            date: "Tuesday 28th November",
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
        {
            id: nanoid(),
            date: "Tuesday 12th December",
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
            date: "Sunday 17th December",
            events: [
                {
                    id: nanoid(),
                    time: "1.00pm",
                    title: "Christmas Lunch",
                    details: "",
                },
            ]
        },
        {
            id: nanoid(),
            date: "Friday 22nd December",
            events: [
                {
                    id: nanoid(),
                    time: "time TBC",
                    title: "Carol Singing:",
                    details: "in the evening at the Village Hall.",
                },
            ]
        },
    ]
}

export {lookAhead}