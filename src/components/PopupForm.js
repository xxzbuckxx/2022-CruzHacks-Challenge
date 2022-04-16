import React from 'react';
import './PopupForm.css';

function PopupForm(props) {
    return (
        <div className="popup">
            <h3>{props.name}</h3>

            <form>
                <label>
                    First Name:
                    <input type="text" name="name" className="textBox"/>
                </label>
                <br/>
                <label>
                    Last Name:
                    <input type="text" name="name" className="textBox"/>
                </label>
                <br/>
                <label>
                    Email:
                    <input type="text" name="name" className="textBox"/>
                </label>
                <br/>
                <label className="reminder">
                    <input
                        type="checkbox"
                        className="checkBox"
                    />
                    Would you like an Email reminder?
                </label>
                <br/>
                <input type="submit" value="Register" className="submit" />
            </form>
        </div>
    )
}

export default PopupForm