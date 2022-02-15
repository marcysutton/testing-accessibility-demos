import React, { useEffect, useRef, useState } from "react"
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import weekOfYear from 'dayjs/plugin/weekOfYear'

import { createActiveMonthDays, createPrevMonthDays, createNextMonthDays } from 'workshop3-components/date-picker/utils'
import "workshop3-components/date-picker/date-picker.scss"

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

    const tableRows = (daysArray, sliceSize, sliceFunc) => {
        const weeks = []
        for (var i = 0; i < daysArray.length; i += sliceSize) {
            const slice = daysArray.slice(i, i + sliceSize)
            weeks.push(sliceFunc(slice, i))
        }
        return weeks
    }

    return (
        <div className="date-picker">
            <header>
                <button
                    aria-label={`Previous month ${dayjs(activeDate).subtract(1, "month").format("MMMM")}`}
                    className="btn-month btn-prev"
                    disabled={isPrevMonthAvailable() ? '' : 'disabled'}
                    onClick={setPrevMonth}
                >
                    <span aria-hidden="true"></span>
                    { dayjs(activeDate).subtract(1, "month").format("MMM") }
                </button>
                <h4 id="month">{ dayjs(activeDate).format("MMMM YYYY") }</h4>
                <button
                    aria-label={`Next month ${dayjs(activeDate).add(1, "month").format("MMMM")}`}
                    className="btn-month btn-next"
                    onClick={setNextMonth}
                >
                    { dayjs(activeDate).add(1, 'month').format("MMM") }
                    <span aria-hidden="true"></span>
                </button>
            </header>
            <table aria-labelledby="month">
                <thead>
                    <tr className="days-of-week">
                        <th scope="col">
                            <span aria-hidden="true" role="presentation">S</span>
                            <span className="visually-hidden">Sunday</span>
                        </th>
                        <th scope="col">
                            <span aria-hidden="true" role="presentation">M</span>
                            <span className="visually-hidden">Monday</span>
                        </th>
                        <th scope="col">
                            <span aria-hidden="true" role="presentation">T</span>
                            <span className="visually-hidden">Tuesday</span>
                        </th>
                        <th scope="col">
                            <span aria-hidden="true" role="presentation">W</span>
                            <span className="visually-hidden">Wednesday</span>
                        </th>
                        <th scope="col">
                            <span aria-hidden="true" role="presentation">T</span>
                            <span className="visually-hidden">Thursday</span>
                        </th>
                        <th scope="col">
                            <span aria-hidden="true" role="presentation">F</span>
                            <span className="visually-hidden">Friday</span>
                        </th>
                        <th scope="col">
                            <span aria-hidden="true" role="presentation">S</span>
                            <span className="visually-hidden">Saturday</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                        {tableRows(days, 7, (week, weekNum) => (
                            <tr className="date-grid" key={weekNum}>
                            {week.map((day, index) => (
                                <td key={index}>
                                    <button
                                        aria-disabled={day.isBooked ? 'true' : 'false'}
                                        aria-label={
                                            `${dayjs(day.date).format('MMMM D')}${day.isBooked ? ' already booked' : '' }${isDaySelected(day) ? ' selected' : ''}`
                                        }
                                        aria-selected={
                                            isDaySelected(day) ? 'true' : 'false' 
                                        }
                                        className={[
                                            'grid-btn',
                                            day.isBooked ? 'booked' : '',
                                            day.isCurrentMonth ? 'currentMonth' : '',
                                            isDaySelected(day) ? 'selected' : ''
                                        ].join(' ').trim()}
                                        onClick={() => selectDay(day)}
                                    >
                                        <time date-time={day.date}>{day.dayOfMonth}</time>
                                        <span className="icon" aria-hidden="true"></span>
                                    </button>
                                </td>
                            ))}
                            </tr>
                        ))}
                </tbody>
            </table>
            <ul className="date-key" role="list">
                <li className="date-key-item-wrap">
                    <span className="date-key-item booked">
                        <span className="icon" aria-hidden="true"></span>
                    </span>
                    <span className="date-key-text">Booked</span>
                </li>
                <li className="date-key-item-wrap">
                    <span className="date-key-item available">
                        <span className="icon" aria-hidden="true"></span>
                    </span>
                    <span className="date-key-text">Available</span>
                </li>
                <li className="date-key-item-wrap">
                    <span className="date-key-item selected">
                        <span className="icon" aria-hidden="true"></span>
                    </span>
                    <span className="date-key-text">Selected</span>
                </li>
            </ul>
            <button className="reserve-btn">Reserve</button>
        </div>
    )
}

export default DatePicker
