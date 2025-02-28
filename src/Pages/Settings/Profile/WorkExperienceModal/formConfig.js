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

export const conf = [
    {
        type: "TEXT",
        id: "title",
        label: "Title",
        key: "title",
        placeholder: "Title",
        defaultValue: "Professional HTML Developer"
    },
    {
        type: "TEXT",
        id: "organization",
        label: "Organization",
        key: "organization",
        placeholder: "Organization",
        defaultValue: "Softking"
    },
    {
        type: "TEXT",
        id: "address",
        label: "Address",
        key: "address",
        placeholder: "Address",
        defaultValue: "Uttara Dhaka 1203"
    },
    {
        type: "TEXT_AREA",
        id: "short-description",
        label: "Short Description",
        key: "shortDescription",
        placeholder: "Short Description",
        defaultValue: "Yes, I am familiar with Bill Gates. Bill Gates is a renowned American business magnate, software developer, philanthropist, and author. He co-founded Microsoft Corporation in 1975 with his childhood friend Paul Allen."
    },
    {
        fields: [
            {
                type: "DATE",
                id: "start-date",
                label: "Start Date",
                key: "startDate",
                placeholder: "Start Date",
                defaultValue: new Date("Mar 20, 2023")
            },
            {
                type: "DATE",
                id: "end-date",
                label: "End Date",
                key: "endDate",
                placeholder: "End Date",
                defaultValue: new Date("Mar 29, 2023"),
                info: "If you currently working here please leave this field empty"
            }
        ]
    }
]