import React from 'react';
import EventAttendee from './EventAttendee';

function eventItem (props) {
    let picUrl='https://randomuser.me/api/portraits/med/men/75.jpg';
    let picUrlRandom=()=>{
        let url='https://randomuser.me/api/portraits/med/men/';
        let num=Math.floor((Math.random()*100)+1).toString();
        let result=url+num+'.jpg';
        return result;
    }

    return (
        <div className='event-item'>
            <div className="event-item__host">
                    <img src={picUrlRandom()} alt="hostpicture" className="event-item__host-pic"/>
                    <span className="event-item__host-name">Hosted by{props.name}</span>
            </div>
            <div className="event-item__date">
                <p>date and location</p>
            </div>
            <div className="event-item__attendee">
                <EventAttendee/>
            </div>
            <div className="event-item__description">
                
                <p>description</p>
                <button>view</button>
            </div>
            
        </div>
    )
}

export default eventItem;
