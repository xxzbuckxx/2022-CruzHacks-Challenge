// import { useState } from "react";
import './Schedule.css';

function Schedule(props) {

    // Create table

	return (
		<div className="Schedule">
            <h2>Firday, January 14, 2023</h2>
            {props.events.map(event => <li key={event.name}>{event.name}, {event.time}</li>)}
            {/* <table>
                <tbody>
                    <tr>
                        <td>9:00 AM</td>
                        <td>Adding a Backend and Databse to Your App in 3 Lines</td>
                    </tr>
                    <tr>
                        <td>10:00 AM</td>
                        <td>Intro to Algorithm / Applications</td>
                    </tr>
                </tbody>
            </table> */}
		</div>
	)
}

export default Schedule;
