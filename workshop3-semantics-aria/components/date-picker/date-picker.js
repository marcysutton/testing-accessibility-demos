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

    // this collection of dates would come from a database, etc.
    let initUnavailableDates = ['2022-04-10', '2022-04-11', '2022-04-12', '2022-04-14', '2022-04-15', '2022-04-17', '2022-04-18', '2022-04-19', '2022-04-24', '2022-04-25', '2022-04-27']
    let activeMonthDays = createActiveMonthDays(startYear, startMonth, initUnavailableDates)
    let prevMonthDays = createPrevMonthDays(startYear, startMonth, activeMonthDays, initUnavailableDates)
    let nextMonthDays = createNextMonthDays(startYear, startMonth, activeMonthDays, initUnavailableDates)

    let days = [...prevMonthDays, ...activeMonthDays, ...nextMonthDays]
    let [unavailableDates, setUnavailableDates] = useState(initUnavailableDates)
    let [selectedDates, setSelectedDates] = useState([])

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
    const isDayUnavailable = (day) => {
        return unavailableDates.includes(day.date)
    }
    const bookDay = (day) => {
        // this function would run on "Reserve"
        setUnavailableDates(
            unavailableDates => [day.date, ...unavailableDates, `${unavailableDates.length}`]
        )
    }
    const isDaySelected = (day) => {
        return selectedDates.includes(day.date)
    }
    const selectDay = (day) => {
        // to-do: consider perf of this for large quanitites of dates
        if (!isDayUnavailable(day)) {
            // add to selected Dates if not already selected
            if (!isDaySelected(day)) {
                setSelectedDates(
                    selectedDates => [day.date, ...selectedDates]
                )
            } else {
                setSelectedDates(
                    selectedDates.filter(date => date !== day.date)
                )
            }
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
                <span title="Sunday">S</span>
                <span title="Monday">M</span>
                <span title="Tuesday">T</span>
                <span title="Wednesday">W</span>
                <span title="Thursday">T</span>
                <span title="Friday">F</span>
                <span title="Saturday">S</span>
            </div>
            <div className="date-grid">
                {days.map((day, index) => {
                    return <button
                        className={[
                            day.isBooked ? 'booked' : '',
                            day.isCurrentMonth ? 'currentMonth' : '',
                            isDaySelected(day) ? 'selected' : ''
                        ].join(' ').trim()}
                        key={index}
                        onClick={() => selectDay(day)}
                    >
                        <time date-time={day.date}>{day.dayOfMonth}</time>
                        <span className="icon" aria-hidden="true"></span>
                    </button>
                })}
            </div>
            <div className="date-key">
                <div className="date-key-item-wrap">
                    <span className="date-key-item booked">
                        <span className="icon" aria-hidden="true"></span>
                    </span>
                    <span className="date-key-text">Booked</span>
                </div>
                <div className="date-key-item-wrap">
                    <span className="date-key-item available">
                        <span className="icon" aria-hidden="true"></span>
                    </span>
                    <span className="date-key-text">Available</span>
                </div>
                <div className="date-key-item-wrap">
                    <span className="date-key-item selected">
                        <span className="icon" aria-hidden="true"></span>
                    </span>
                    <span className="date-key-text">Selected</span>
                </div>
            </div>
            <div className="reserve-btn">Reserve</div>
        </div>
    )
}

export default DatePicker
