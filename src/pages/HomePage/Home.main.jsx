import React, { useState } from 'react';
import * as style from "./style/Home.main";
import Calendar from "../HomePage/Calendar";


function HomePage() {
const [selectedDate, setSelectedDate] = useState(new Date())

    return(
            <style.Wrapper>
                <style.CalendarWrapper>
                    <Calendar onSelectDate={setSelectedDate}></Calendar>
                </style.CalendarWrapper>
                <style.TodoListWrapper>

                </style.TodoListWrapper>

            </style.Wrapper>

    )
}

export default HomePage;