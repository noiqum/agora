import React,{Component}from 'react';
import EventDashBoard from '../../eventDashBoard/eventDashBoard';
import EventList from '../../eventList/eventList';
import EventNews from '../../eventList/eventNews';



class Main extends Component{

    constructor(){
        super();

        this.state={
            event:{
                title:'',
                hostName:'',
                date:'',
                address:'',
                attendee:[],
                description:'',
                id:null,
                photo:''

            }
            
        }
        this.eventCreate=this.eventCreate.bind(this);
    }

    

    eventCreate(info){
        this.setState({event:{
            title:info.title,
            hostName:info.hostName,
            date:info.date,
            address:info.address,
            description:info.description
        }})
        
    }

    
    
    

    render(){

        return(
            <div className='main'>
            <EventDashBoard />
            <EventList  formCollapse={this.props.formCollapse} createEvent={this.eventCreate}/>
            <EventNews/>
        </div>

        )
    


    }

       


}

export default Main;