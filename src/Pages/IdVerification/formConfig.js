export default [
    {
        type: "COUNTRY",
        id: "country",
        label: "ID Issuing Country",
        placeholder: "Select Country",
        key: "country"
    },
    {
        fields: [
            {
                type: "STATE",
                id: "state",
                label: "State",
                placeholder: "Select State",
                key: "state"
            },
            {
                type: "CITY",
                id: "city",
                label: "City (Optional)",
                placeholder: "Select City",
                key: "city"
            }
        ]
    },
    {
        type: "TEXT",
        id: "address",
        label: "Address",
        key: "address",
        placeholder: "Enter Address"
    },
    {
        type: "TEXT",
        id: "zip-code",
        label: "Zip Code",
        key: "zipCode",
        placeholder: "Enter zip code"
    },
    {
        type: "TEXT",
        id: "national-id",
        label: "National ID Number",
        key: "nationalIdNumber",
        placeholder: "Enter ID Number"
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