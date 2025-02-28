export default [
    {
        fields: [
            {
                type: "TEXT",
                id: "first-name",
                label: "First Name",
                key: "firstName",
                placeholder: "Enter First Name"
            },
            {
                type: "TEXT",
                id: "last-name",
                label: "Last Name",
                key: "lastName",
                placeholder: "Enter Last Name"
            }
        ]
    },
    {
        type: "TEXT",
        id: "pro-title",
        label: "Professional Title",
        key: "professionalTitle",
        placeholder: "Enter Professional Title"
    },
    {
        type: "TEXT_AREA",
        id: "my-info",
        label: "Intro about yourself",
        key: "myInfo",
        placeholder: "Enter Intro about yourself"
    },
    {
        fields: [
            {
                type: "DROP_DOWN",
                id: "country",
                label: "Your Country",
                placeholder: "Select Your Country",
                key: "country",
                options: [
                    {
                        value: "india",
                        text: "India"
                    },
                    {
                        value: "aus",
                        text: "Australia"
                    },
                    {
                        value: "lende-pral",
                        text: "Lende Pral"
                    }
                ]
            },
            {
                type: "DROP_DOWN",
                id: "state",
                label: "Your State",
                placeholder: "Select Your State",
                key: "state",
                options: [
                    {
                        value: "rajasthan",
                        text: "Rajasthan"
                    },
                    {
                        value: "maharashtra",
                        text: "Maharashtra"
                    },
                    {
                        value: "buenos-aires",
                        text: "Buenos Aires"
                    }
                ]
            }
        ]
    }
]

export const data = {
    firstName: "Ryan",
    lastName: "Wayne",
    professionalTitle: "Professional HTML Developer",
    myInfo: "Yes, I am familiar with Bill Gates. Bill Gates is a renowned American business magnate, software developer, philanthropist, and author. He co-founded Microsoft Corporation in 1975 with his childhood friend Paul Allen.",
    country: "lende-pral",
    state: "buenos-aires"
}