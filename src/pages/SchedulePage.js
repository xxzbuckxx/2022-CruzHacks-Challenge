import React, {useState, useEffect} from 'react';
import './SchedulePage.css';
import ScheduleSlider from '../components/ScheduleSlider';

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
                <ScheduleSlider schedules={schedules} />
            </div>
        </div>
    );
}

export default SchedulePage;
