import React, { Component } from 'react';
import { connect} from 'react-redux';

export class eventForm extends Component {
    constructor(props){
        super(props);

        this.state={
            event:{
                title:'',
                hostName:'',
                date:'',
                address:'',
                description:''
            },
            formClose:true
        }
        
    }

    


    
    onFormSubmit=(e)=>{
        e.preventDefault();
        this.props.createEvent(this.state.event,this.state.formClose);
    }
    
    // onInputChange=(e)=>{
    //     console.log(this.props.event);
        
    // }
    render() {
        
        
        return (
            
        <div>
            <form onSubmit={this.onFormSubmit}  className="event__form"action="POST">
           <input onChange={this.props.onInputChangeTitle}  type="text" name='title' placeholder='event title' required/>
           <input onChange={this.props.onInputChangeHostname}  name="hostName"type="text" placeholder="who is host?" required/>
           <input onChange={this.props.onInputChangeDate}  type="date" name="date" id="date" required/>
           <input onChange={this.props.onInputChangeAddress} type="text" name="address" placeholder="event address" required/>
           <input onChange={this.props.onInputChangeDescription} type="textArea" name="description" id="description" placeholder="description" required maxLength='60' rows='2'/>
           <div className='event__form__buttons'>
           <button  >Submit</button>
           <button onClick={this.props.formClose} >Cancel</button>
           </div>

       </form>
       </div>
        )
    }
}

const mapStateToProps=state=>{
    return {
        formShow:state.formShow,
        title:state.title,
        address:state.address,
        hostName:state.hostName,
        date:state.date,
        description:state.description
    };
}

const mapDispatchToProps=dispatch=>{
    return {
        onInputChangeTitle:(e)=>dispatch({type:'ONINPUTCHANGE-TITLE',value:e.target.value}),
        onInputChangeAddress:(e)=>dispatch({type:'ONINPUTCHANGE-ADDRESS',value:e.target.value}),
        onInputChangeHostname:(e)=>dispatch({type:'ONINPUTCHANGE-HOSTNAME',value:e.target.value}),
        onInputChangeDate:(e)=>dispatch({type:'ONINPUTCHANGE-DATE',value:e.target.value}),
        onInputChangeDescription:(e)=>dispatch({type:'ONINPUTCHANGE-DESCRIPTION',value:e.target.value}),
    };
}



export default connect(mapStateToProps,mapDispatchToProps) (eventForm);
