export default {
    "personal-info": [
        {
            fields: [
                {
                    type: "TEXT",
                    id: "first-name",
                    label: "First Name",
                    key: "firstName",
                    placeholder: "Enter First Name", 
                    defaultValue: "Ryan"
                },
                {
                    type: "TEXT",
                    id: "last-name",
                    label: "Last Name",
                    key: "lastName",
                    placeholder: "Enter Last Name",
                    defaultValue: "Wayne"
                }
            ]
        },
        {
            type: "EMAIL",
            id: "email",
            label: "Your Email",
            key: "email",
            placeholder: "Enter Email",
            defaultValue: "riad@gmail.com"
        },
        {
            type: "DROP_DOWN",
            id: "country",
            label: "Your Country",
            placeholder: "Select Your Country",
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
            fields: [
                {
                    type: "DROP_DOWN",
                    id: "state",
                    label: "Your State",
                    placeholder: "Select Your State",
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
                },
                {
                    type: "DROP_DOWN",
                    id: "city",
                    label: "Your City",
                    placeholder: "Select Your City",
                    key: "city",
                    defaultValue: "Lende Pral",
                    options: [
                        {
                            value: "kota",
                            text: "Kota"
                        },
                        {
                            value: "jaipur",
                            text: "Jaipur"
                        },
                        {
                            value: "lende-pral",
                            text: "Lende Pral"
                        }
                    ]
                }
            ]
        },
        {
            type: "TEXT",
            id: "exp",
            label: "Your Experience Level",
            key: "experience",
            placeholder: "Enter Your Experience Level",
            defaultValue: "Junior"
        },
    ]
}