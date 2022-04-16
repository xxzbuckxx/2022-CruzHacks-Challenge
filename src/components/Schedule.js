// import { useState } from "react";
import './Schedule.css';
import PopupForm from './PopupForm.js';

function Schedule(props) {

    // Create table

	return (
		<div className="Schedule">
            <h2>{props.date}</h2>
            <table>
                <tbody>
                    {props.events.map((event, index) => 
                        <tr key={index}>
                            <td className="eventDate" key={event.name}>{event.time}</td>
                            <td className="eventName">{event.name}</td>
                            {/* <PopupForm name="Test Name"/> */}
                        </tr>
                    )}
                </tbody>
            </table>
		</div>
	)
}

export default Schedule;
