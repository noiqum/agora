

import React, { Component } from 'react';
import EventForm from './eventForm';
import { connect } from 'react-redux';


export class eventList extends Component {
    constructor(props){
        super(props)
        this.state={
            formOpen:false
        }
    };

    handleForm=()=>{
        this.setState({formOpen:true})
        console.log(this.props.formShow);
        
    }
    handleFormClose=()=>{
        this.setState({formOpen:false})
    }
    
    
    


    render() {
        return (
            <div className="event-list">       
            <button  onClick={this.props.formHandle} className='event-list__button'>Create Event</button>
                {this.props.formShow && <EventForm   submitForm={this.handleFormClose} createEvent={this.props.createEvent} formClose={this.props.formClose}/>}
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        formShow:state.formShow,
        title:state.title
    };
}

const mapDispatchToProps=dispatch=>{
    return{
        formHandle:()=>dispatch({type:'FORMHANDLE'}),
        formClose:()=>dispatch({type:'FORMCLOSE'})
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(eventList);

