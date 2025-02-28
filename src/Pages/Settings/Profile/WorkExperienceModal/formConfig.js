export default [
    {
        type: "TEXT",
        id: "title",
        label: "Title",
        key: "title",
        placeholder: "Title",
        defaultValue: ""
    },
    {
        type: "TEXT",
        id: "organization",
        label: "Organization",
        key: "organization",
        placeholder: "Organization",
        defaultValue: ""
    },
    {
        type: "TEXT",
        id: "address",
        label: "Address",
        key: "address",
        placeholder: "Address",
        defaultValue: ""
    },
    {
        type: "TEXT_AREA",
        id: "short-description",
        label: "Short Description",
        key: "shortDescription",
        placeholder: "Short Description",
        defaultValue: ""
    },
    {
        fields: [
            {
                type: "DATE",
                id: "start-date",
                label: "Start Date",
                key: "startDate",
                placeholder: "Start Date",
                defaultValue: ""
            },
            {
                type: "DATE",
                id: "end-date",
                label: "End Date",
                key: "endDate",
                placeholder: "End Date",
                defaultValue: "",
                info: "If you currently working here please leave this field empty"
            }
        ]
    }
]