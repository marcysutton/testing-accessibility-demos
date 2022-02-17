import dayjs from 'dayjs'

/* 
Date Picker Utility Functions 
*/

export const createActiveMonthDays = (year, month, initUnavailableDates) => {
    return [...Array(getDaysInMonth(year, month))].map((day, index) => {
        let date = dayjs(`${year}-${month}-${index + 1}`).format("YYYY-MM-DD")
        return {
            date: date,
            dayOfMonth: index + 1,
            isCurrentMonth: true,
            isSelected: false,
            isBooked: isDateAvailable(date, initUnavailableDates)
        }
    })
}

export const createPrevMonthDays = (year, month, activeMonthDays, initUnavailableDates) => {
    const firstDayOfMonthWeekday = getWeekday(activeMonthDays[0].date)
    const prevMonth = dayjs(`${year}-${month}-01`).subtract(1, "month")

    const visibleDaysFromPrevMonth = firstDayOfMonthWeekday ? firstDayOfMonthWeekday : 6

    const prevMonthLastMondayDayOfMonth = dayjs(
        activeMonthDays[0].date
    ).subtract(visibleDaysFromPrevMonth, "day").date()

    return [...Array(visibleDaysFromPrevMonth)].map((day, index) => {
        let date = dayjs(
            `${prevMonth.year()}-${prevMonth.month() + 1}-${prevMonthLastMondayDayOfMonth + index}`
        ).format("YYYY-MM-DD")
        return {
            date: date,
            dayOfMonth: prevMonthLastMondayDayOfMonth + index,
            isCurrentMonth: false,
            isSelected: false,
            isBooked: isDateAvailable(date, initUnavailableDates)
        }
    })
}

export const createNextMonthDays = (year, month, activeMonthDays, initUnavailableDates) => {
    const lastDayOfMonthWeekday = getWeekday(`${year}-${month}-${activeMonthDays.length}`)
    const visibleDaysFromNextMonth = lastDayOfMonthWeekday ? 6 - lastDayOfMonthWeekday : lastDayOfMonthWeekday

    return [...Array(visibleDaysFromNextMonth)].map((day, index) => {
        let date = dayjs(`${year}-${Number(month + 1)}-${index + 1}`).format("YYYY-MM-DD")
        return {
            date: date,
            dayOfMonth: index + 1,
            isCurrentMonth: false,
            isSelected: false,
            isBooked: isDateAvailable(date, initUnavailableDates)
        }
    })
}

function isDateAvailable(date, datesList) {
    return datesList.includes(date)
}
function getDaysInMonth(year, month) {
    return dayjs(`${year}-${month}-01`).daysInMonth()
}

function getWeekday(date) {
    return dayjs(date).weekday()
}
