export default [
    {
        type: "TEXT",
        id: "institution",
        label: "Institution",
        key: "institution",
        placeholder: "Institution",
        defaultValue: ""
    },
    {
        type: "TEXT",
        id: "degree",
        label: "Degree",
        key: "degree",
        placeholder: "Degree",
        defaultValue: ""
    },
    {
        type: "TEXT",
        id: "major",
        label: "Major (Field of Study)",
        key: "major",
        placeholder: "Major (Field of Study)",
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
        id: "institution",
        label: "Institution",
        key: "institution",
        placeholder: "Institution",
        defaultValue: "Dhaka International University"
    },
    {
        type: "TEXT",
        id: "degree",
        label: "Degree",
        key: "degree",
        placeholder: "Degree",
        defaultValue: "Computer Science and Engineering"
    },
    {
        type: "TEXT",
        id: "major",
        label: "Major (Field of Study)",
        key: "major",
        placeholder: "Major (Field of Study)",
        defaultValue: "BSC in CSE"
    },
    {
        fields: [
            {
                type: "DATE",
                id: "start-date",
                label: "Start Date",
                key: "startDate",
                placeholder: "Start Date",
                defaultValue: new Date("Mar 15, 2023")
            },
            {
                type: "DATE",
                id: "end-date",
                label: "End Date",
                key: "endDate",
                placeholder: "End Date",
                defaultValue: new Date("Mar 23, 2023"),
                info: "If you currently working here please leave this field empty"
            }
        ]
    }
]