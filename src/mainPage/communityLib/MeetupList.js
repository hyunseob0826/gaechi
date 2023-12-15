import React from 'react';
import './Meetup.css';
import Menu from '../menu';



const MeetupList = ({meetups}) => {
    return(
        <div>
            <h2>Meetup List</h2>
            <ul>
                {meetups.map((meetup, index) => (
                    <li key = {index}>
                        <h3>{meetup.title}</h3>
                        <p>{meetup.description}</p>
                    </li>
                ))}
            </ul>
            <Menu></Menu>
        </div>
    );
};

export default MeetupList;