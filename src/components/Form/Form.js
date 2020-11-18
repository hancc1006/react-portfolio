import React from "react";
import SendIcon from '@material-ui/icons/Send';
import {Row, Col} from "../Grid/index";

function form() {
    return(
        <>
        <Row>
            <Col size="s12"/>
        </Row>
        <Row>
            <form className="col s12">
                <div className="row">
                <div className="input-field col m6 black-text">
                    <input id="first_name" type="text" className="validate"></input>
                    <label htmlFor="first_name" className="black-text">First Name</label>
                    </div>
                    <div className="input-field col m6">
                    <input id="last_name" type="text" className="validate"></input>
                    <label htmlFor="last_name" className="black-text">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col m12">
                    <input id="email" type="email" className="validate"></input>
                    <label htmlFor="email" className="black-text">Email</label>
                    </div>
                </div>
            </form>
            <button className="btn waves-effect waves-light" type="submit" name="action">
                <SendIcon/> SUBMIT  
            </button>
            </Row>
        </>
        
    );
    
}

  export default form;