import React, {Component} from "react";
import {Link} from "react-router";

import EmpProfile from "./EmpProfile";
import TalentProfile from "./TalentProfile";
// import Search from "./Search";
import Registration from "./Registration";
import Nav from "./Nav";

class Main extends Component {
    constructor(){
        super();
        this.state = {
            searchTerm: "",
            userName: "",
            minHourly: 1,
            maxHourly: 50,
            //contract prices
            minContract: 100,
            maxContact: 1000,
            availability: [],
        };
        //binds
    }
    
    // componentDidMount(){

    // }

    // componentDidUpdate(){

    // }

    render() {
        return (
        <div className="ui container">
            <Nav searchTerm={this.searchTerm}/>
            {/*body*/}
            <div className="grid">
                <div className="five wide column">
                    {/*blank*/}
                </div>
                <div className="six wide column">
                    <Registration/>
                </div>
                <div className="five wide column">
                    {/*blank*/}
                </div>
            </div>
        </div>        
        );
    }
}

export default Main;