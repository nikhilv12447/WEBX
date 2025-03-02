export default [
    {
        fields: [
            {
                type: "TEXT",
                id: "first-name",
                label: "First Name",
                key: "firstName",
                placeholder: "Enter First Name",
                defaultValue: ""
            },
            {
                type: "TEXT",
                id: "last-name",
                label: "Last Name",
                key: "lastName",
                placeholder: "Enter Last Name",
                defaultValue: ""
            }
        ]
    },
    {
        type: "EMAIL",
        id: "email",
        label: "Your Email",
        key: "email",
        placeholder: "Enter Email",
        defaultValue: ""
    },
    {
        type: "COUNTRY",
        id: "country",
        label: "Your Country",
        placeholder: "Select Your Country",
        key: "country"
    },
    {
        fields: [
            {
                type: "STATE",
                id: "state",
                label: "Your State",
                placeholder: "Select Your State",
                key: "state"
            },
            {
                type: "CITY",
                id: "city",
                label: "Your City",
                placeholder: "Select Your City",
                key: "city",
                defaultValue: ""
            }
        ]
    },
    {
        type: "TEXT",
        id: "exp",
        label: "Your Experience Level",
        key: "experience",
        placeholder: "Enter Your Experience Level",
        defaultValue: ""
    },
]