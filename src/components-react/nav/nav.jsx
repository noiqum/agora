
import React, { Component } from 'react';

export class Nav extends Component {

    
    state={
        hamburgerClicked:null,
        
        style1:null,
        style2:null,
        style3:null
    };
    
    tog=()=>{
       (this.state.hamburgerClicked===null)
       ? 
       this.setState(
           {hamburgerClicked:true,
            style2:{'display':'none'},
            style1:{'transform':'skewY(45deg)','width':'20px'},
            style3:{'transform':'skewY(-45deg) translateY(-7px)','width':'20px'}
            } ) 
       :
        this.setState(
            {
                hamburgerClicked:null,
                style1:null,
                style2:null,
                style3:null
            }
            
            )
        
    };

    styleUpdate=(a)=>{
        if(a===true){
            this.setState({style2:{'display':'none'}});
        }
    };
   
    
    render() {

        
        return (
            <div>
                <header>
            <h1 className="nav__logo">agora</h1>
            <input  id="nav-toggle"type="checkbox" className="nav__toggle" onClick={this.tog}/>
            <nav className="nav__nav">
                <div className="nav__nav-a">
                    <ul className="nav__nav-a-ul">
                        <li>
                            <a href="#">event</a>
                            
                        </li>
                        <li>
                            <a href="#">people</a>
                        
                        </li>
                    </ul>
                </div>
                <div className="nav__nav-b">
                    <ul className="nav__nav-b-ul">
                        <li><a href="#">Log in</a></li>
                        <li><a href="#">sign up</a></li>
                    </ul>
                </div>
            </nav>
            <label for="nav-toggle" className="nav__nav-label">
                <span style={this.state.style1}></span>
                <span style={this.state.style2}></span>
                <span style={this.state.style3}></span>
            </label>
        </header>
            </div>
        )
    }
}

export default Nav;


