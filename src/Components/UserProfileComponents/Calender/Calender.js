import React, { useState } from 'react'
import "./Calender.scss"
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import { Calendar } from "react-modern-calendar-datepicker";

const Calender = () => {

    const [selectedDayRange, setSelectedDayRange] = useState({
        from: null,
        to: null
    });


    return (

        <Calendar
            value={selectedDayRange}
            onChange={setSelectedDayRange}
            shouldHighlightWeekends

        />


    )
}

export default Calender