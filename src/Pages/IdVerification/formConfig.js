export default [
    {
        type: "DROP_DOWN",
        id: "country",
        label: "ID Issuing Country",
        placeholder: "Select Country",
        style: "dropdown-style",
        key: "country",
        options: [
            {
                value: "india",
                text: "India"
            },
            {
                value: "aus",
                text: "Australia"
            }
        ]
    },
    {
        fields: [
            {
                type: "DROP_DOWN",
                id: "state",
                label: "State",
                placeholder: "Select State",
                style: "dropdown-style",
                key: "state",
                options: [
                    {
                        value: "rajasthan",
                        text: "Rajasthan"
                    },
                    {
                        value: "maharashtra",
                        text: "Maharashtra"
                    }
                ]
            },
            {
                type: "DROP_DOWN",
                id: "city",
                label: "City (Optional)",
                placeholder: "Select City",
                style: "dropdown-style",
                key: "city",
                options: [
                    {
                        value: "kota",
                        text: "Kota"
                    },
                    {
                        value: "jaipur",
                        text: "Jaipur"
                    }
                ]
            }
        ]
    },
    {
        type: "TEXT",
        id: "address",
        label: "Address",
        key: "address",
        placeholder: "Enter Address",
        style: "mt-[6px]"
    },
    {
        type: "TEXT",
        id: "zip-code",
        label: "Zip Code",
        key: "zipCode",
        placeholder: "Enter zip code",
        style: "mt-[6px]"
    },
    {
        type: "TEXT",
        id: "national-id",
        label: "National ID Number",
        key: "nationalIdNumber",
        placeholder: "Enter ID Number",
        style: "mt-[6px]"
    },

    {
        fields: [
            {
                type: "FILE",
                description: "Upload Front side of your ID",
                fileInfo: "(500x300px)",
                key: "frontSide"
            },
            {
                type: "FILE",
                description: "Upload Back side of your ID",
                fileInfo: "(500x300px)",
                key: "backSide"
            }
        ]
    }
]