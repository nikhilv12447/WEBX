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

export const data = {
    institution: "Dhaka International University",
    degree: "Computer Science and Engineering",
    major: "BSC in CSE",
    startDate: new Date("Mar 15, 2023"),
    endDate: new Date("Mar 23, 2023")
}