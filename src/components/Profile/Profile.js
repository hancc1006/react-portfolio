import React from "react";
import profileimg from '../../assets/profile.jpg';

function Profile(){
    return(
        <>
            <div className="sm container">
                <ul>
                    <img className="circle" src={profileimg}></img>
                </ul>
                
            </div>
            
        </>
    );
    
}


export default Profile;