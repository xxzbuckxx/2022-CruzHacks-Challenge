import { useState } from 'react'
import Schedule from './Schedule.js';
import './ScheduleSlider.css'
import leftArrow from '../assets/left_arrow.svg';


function ScheduleSlider(props) {
    const [current, setCurrent] = useState(0);
    const length = props.schedules.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    // If API Fetch empty (no schedules passed)
    if (!Array.isArray(props.schedules) || props.schedules.length <= 0) {
        return null;
    }

    return (
        <>
            <h1>Schedule</h1>
            <div className="slider">
                <img src={leftArrow} className="left-arrow" onClick={prevSlide} />
                {props.schedules.map((s, index) => {
                    return (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && (
                                <Schedule key={index} date={s.date} events={s.events} />
                            )}
                        </div>
                    )
                })}
                <img src={leftArrow} className="right-arrow" onClick={nextSlide} />
            </div>
        </>
    )
}

export default ScheduleSlider