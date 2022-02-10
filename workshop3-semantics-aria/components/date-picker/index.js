import React, { useEffect, useRef, useState } from "react"
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import weekOfYear from 'dayjs/plugin/weekOfYear'

import { createActiveMonthDays, createPrevMonthDays, createNextMonthDays } from './utils'
import "./date-picker.scss"

const DatePicker = ({monthsInAdvance = 2, currDate}) => {
    dayjs.extend(weekday)
    dayjs.extend(weekOfYear)

    // set date to 3 months from now
    let date = new Date()
    date.setMonth(date.getMonth() + monthsInAdvance)

    // keep the active, visible date in State
    let [activeDate, setActiveDate] = useState(dayjs(date))
    const startYear = dayjs(activeDate).format("YYYY")
    const startMonth = dayjs(activeDate).format("M")

    let activeMonthDays = createActiveMonthDays(startYear, startMonth)
    let prevMonthDays = createPrevMonthDays(startYear, startMonth, activeMonthDays)
    let nextMonthDays = createNextMonthDays(startYear, startMonth, activeMonthDays)

    let days = [...prevMonthDays, ...activeMonthDays, ...nextMonthDays]
    // this array of dates could come from a database, etc.
    let initUnavailableDates = []
    let [unavailableDates, setUnavailableDates] = useState(initUnavailableDates)

    const setPrevMonth = () => {
        // only go backward as far as current month
        if (isPrevMonthAvailable()) {
            setActiveDate(dayjs(activeDate).subtract(1, "month"))
        }
    }
    const setNextMonth = () => {
        setActiveDate(dayjs(activeDate).add(1, "month"))
    }
    const isPrevMonthAvailable = () => {
        return dayjs(activeDate).subtract(1, 'month').get('month') >= dayjs().get('month')
    }
    const selectDay = (day) => {
        // to-do: consider perf of this for large quanitites of dates
        console.log(unavailableDates)

        if (!unavailableDates.includes(day.date)) {
            setUnavailableDates(
                unavailableDates => [...unavailableDates, `${unavailableDates.length}`]
            )
        }
    }
    return (
        <div className="date-picker">
            <header>
                <button
                    className="btn-prev"
                    disabled={isPrevMonthAvailable() ? '' : 'disabled'}
                    onClick={setPrevMonth}
                >
                    <span></span>
                    { dayjs(activeDate).subtract(1, "month").format("MMM") }
                </button>
                <h3>{ dayjs(activeDate).format("MMMM YYYY") }</h3>
                <button
                    className="btn-next"
                    onClick={setNextMonth}
                >
                    { dayjs(activeDate).add(1, 'month').format("MMM") }
                    <span></span>
                </button>
            </header>
            <div className="days-of-week">
                <span>S</span>
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
            </div>
            <div className="date-grid">
                {days.map((day, index) => {
                    return <button
                        className={[
                            day.isCurrentMonth ? 'currentMonth' : '',
                            day.isSelected ? 'active' : ''
                        ].join('')}
                        key={index}
                        onClick={() => selectDay(day)}
                    >
                        <time date-time={day.date}>{day.dayOfMonth}</time>
                    </button>
                })}
            </div>
        </div>
    )
}

export default DatePicker
