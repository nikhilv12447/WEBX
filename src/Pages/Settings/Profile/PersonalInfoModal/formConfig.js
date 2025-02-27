export default [
    {
        fields: [
            {
                type: "TEXT",
                id: "first-name",
                label: "First Name",
                key: "firstName",
                placeholder: "Enter First Name",
                style: "mt-[6px]",
                defaultValue: "Ryan"
            },
            {
                type: "TEXT",
                id: "last-name",
                label: "Last Name",
                key: "lastName",
                placeholder: "Enter Last Name",
                style: "mt-[6px]",
                defaultValue: "Wayne"
            }
        ]
    },
    {
        type: "TEXT",
        id: "pro-title",
        label: "Professional Title",
        key: "professionalTitle",
        placeholder: "Enter Professional Title",
        style: "mt-[6px]",
        defaultValue: "Professional HTML Developer"
    },
    {
        type: "TEXT_AREA",
        id: "pro-title",
        label: "Intro about yourself",
        key: "professionalTitle",
        placeholder: "Enter Professional Title",
        style: "mt-[6px]",
        defaultValue: "Professional HTML Developer"
    },
    {
        fields: [
            {
                type: "DROP_DOWN",
                id: "country",
                label: "Your Country",
                placeholder: "Select Your Country",
                style: "drop-down-style",
                key: "country",
                defaultValue: "Argentina",
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
                        value: "argentina",
                        text: "Argentina"
                    }
                ]
            },
            {
                type: "DROP_DOWN",
                id: "state",
                label: "Your State",
                placeholder: "Select Your State",
                style: "drop-down-style",
                key: "state",
                defaultValue: "Buenos Aires",
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