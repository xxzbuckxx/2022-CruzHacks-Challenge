import React, {useState, useEffect} from 'react';
import './SchedulePage.css';
import Schedule from '../components/Schedule.js';

async function getSchedule() {
    const apiURL = 'https://cruzhacks23-organizer-endpoint.herokuapp.com/api/schedule';
    return fetch(apiURL)
        .then(response => response.json());
}

function SchedulePage() {
    const [schedules, setSchedule] = useState([]); // default to empty list
    
    // On Component Load
    useEffect(() => {
        let mounted = true;
        getSchedule()
            .then(s => {
                if (mounted) {
                    setSchedule(s.payload)
                }
            });
        return () => mounted = false;
    }, []);

    return (
        <div className="body background">
            <div className="site">
                <h1>Schedule</h1>
                {schedules.map(s => <Schedule key={s.date} date={s.date} events={s.events}/>)}
            </div>
        </div>
    );
}

export default SchedulePage;
