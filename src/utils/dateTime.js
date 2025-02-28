const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export function getFormatedDate(date, defaultValue = "") {
    if (!date) return defaultValue

    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    day = day < 10 ? "0" + day : day

    return `${months[month]} ${day}, ${year}`
}