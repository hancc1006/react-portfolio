import React from "react";
import "./home.css";
import Profile from "../Profile/Profile";
import Nav from "../Navbar/Navbar";
import {Link} from "react-router-dom";
function HomeDescription(){
    return(
        <main role="main" className="cover-container w-100 p-3 d-flex flex-column mx-auto style">
            <div className="profile">
                <h1>Welcome to my portfolio</h1>
                <p>
                I am a Full stack web developer and Electrical Engineer with a certificate in full stack development from University of California Irvine. 
                I have an understanding of Javascript, CSS, Node.js, MYSQL, MongoDB, and React; I look to continue expanding my knowledge in these areas. 
                </p>
                <p>
                Hobbies: Swimming, Skiing, Reading, Drawing,
                </p>
                <p>
                    <Link to="/project" className="btn btn-lg">Projects</Link>
                </p>
            </div>
        </main> 
    )
    
}

export default HomeDescription;