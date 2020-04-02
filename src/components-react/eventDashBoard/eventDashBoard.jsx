import React, { Component } from 'react'
import EventItem from './eventItem';


export class eventDashBoard extends Component {
    constructor(){
        super();

        this.state={
            events:[{
                eventID:1,
                host:'',
                title:'',
                date:'',
                address:'',
                description:''
            }]
        }
    }


    render() {
        return (
            <div className="dash-board">
            <h1>event list</h1>
            <EventItem/>
            <EventItem/>
            <EventItem/>
        </div>
        )
    }
}

export default eventDashBoard;
