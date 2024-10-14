import React, { useState, useEffect } from 'react';
import { format, startOfWeek, addDays, isSameDay } from 'date-fns';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import * as style from '../HomePage/style/Calendar'

const HomeCalendar = ({ onSelectDate }) => {
    const [currentWeek, setCurrentWeek] = useState([]);
    const today = new Date();


    useEffect(() => {
        const today = new Date();
        const start = startOfWeek(today, {weekStartsOn: 1});
        const week = Array.from({length: 7}).map((_,i)=>addDays(start, i));
        setCurrentWeek(week);
        console.log(currentWeek);
    },[]);



    return(
        <style.TotalWrapper>
            <style.DateMoveWrapper>

            </style.DateMoveWrapper>
            <style.WeekWrapper>
                {currentWeek.map((day, index)=>(
                    <style.EachDateWrapper key={index}>
                        <style.EachDayofWeek>
                            {format(day,'EEE')}
                        </style.EachDayofWeek>
                        <style.EachDayButton
                        isToday = {isSameDay(day, today)}
                        onClick={()=>onSelectDate(day)}>
                            <style.EachDayText>
                                {format(day, 'd')}
                            </style.EachDayText>
                        </style.EachDayButton>
                    </style.EachDateWrapper>

                ))}
            </style.WeekWrapper>
        </style.TotalWrapper>
    )

}

export default HomeCalendar;