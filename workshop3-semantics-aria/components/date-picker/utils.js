import dayjs from 'dayjs'

/* 
Date Picker Utility Functions 
*/

export const createActiveMonthDays = (year, month) => {
    return [...Array(getDaysInMonth(year, month))].map((day, index) => {
      return {
        date: dayjs(`${year}-${month}-${index + 1}`).format("YYYY-MM-DD"),
        dayOfMonth: index + 1,
        isCurrentMonth: true,
        isSelected: false
      }
    })
}

export const createPrevMonthDays = (year, month, activeMonthDays) => {
    const firstDayOfMonthWeekday = getWeekday(activeMonthDays[0].date)
    const prevMonth = dayjs(`${year}-${month}-01`).subtract(1, "month")

    const visibleDaysFromPrevMonth = firstDayOfMonthWeekday ? firstDayOfMonthWeekday : 6

    const prevMonthLastMondayDayOfMonth = dayjs(
        activeMonthDays[0].date
    ).subtract(visibleDaysFromPrevMonth, "day").date()

    return [...Array(visibleDaysFromPrevMonth)].map((day, index) => {
        return {
            date: dayjs(
                `${prevMonth.year()}-${prevMonth.month() + 1}-${prevMonthLastMondayDayOfMonth + index}`
            ).format("YYYY-MM-DD"),
            dayOfMonth: prevMonthLastMondayDayOfMonth + index,
            isCurrentMonth: false,
            isSelected: false
        }
    })
}

export const createNextMonthDays = (year, month, activeMonthDays) => {
    const lastDayOfMonthWeekday = getWeekday(`${year}-${month}-${activeMonthDays.length}`)
    const visibleDaysFromNextMonth = lastDayOfMonthWeekday ? 6 - lastDayOfMonthWeekday : lastDayOfMonthWeekday

    return [...Array(visibleDaysFromNextMonth)].map((day, index) => {
        return {
            date: dayjs(`${year}-${Number(month + 1)}-${index + 1}`).format("YYYY-MM-DD"),
            dayOfMonth: index + 1,
            isCurrentMonth: false,
            isSelected: false
        }
    })
}

function getDaysInMonth(year, month) {
    return dayjs(`${year}-${month}-01`).daysInMonth()
}

function getWeekday(date) {
    return dayjs(date).weekday()
}
